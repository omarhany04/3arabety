import React, { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Phone, Clock, ChevronDown, ChevronUp, Search, Check, Navigation, RotateCcw, Frown } from 'react-feather';
import RatingStars from '../components/common/RatingStars';
import { CITY_CENTER, LOCATIONS, LOCATION_TYPES, cairoMinutesNow, distanceKm, isOpenNow } from '../data/locations';
import { matchesQuery } from '../utils/search';
import { translate, useTranslation } from '../i18n';

const TYPE_COLORS = { service: '#2563eb', parts: '#9333ea', wash: '#0891b2', towing: '#ca8a04' };
const INITIAL_VISIBLE = 9;

const dotIcon = (color, size) =>
  L.divIcon({
    className: '',
    html: `<span style="background:${color};width:${size}px;height:${size}px;border-radius:50%;display:block;border:2px solid #fff;box-shadow:0 0 3px rgba(0,0,0,.5)"></span>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });

const ICONS = Object.fromEntries(LOCATION_TYPES.map((type) => [type, dotIcon(TYPE_COLORS[type], 16)]));
const SELECTED_ICON = dotIcon('#dc2626', 22);

const MapViewSetter = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

// Searchable text in both languages so Arabic and English queries both match
const searchText = (location) =>
  [
    location.name.ar,
    location.name.en,
    location.address.ar,
    location.address.en,
    ...location.tags.flatMap((tag) => [translate('ar', `locations.tags.${tag}`), translate('en', `locations.tags.${tag}`)]),
  ].join(' ');

const selectClass =
  'block w-full bg-gray-50 border border-gray-300 rounded-md py-3 ps-4 pe-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none';

const Locations = () => {
  const { t, language, locale } = useTranslation();
  const [serviceType, setServiceType] = useState('all');
  const [maxDistance, setMaxDistance] = useState('any');
  const [minRating, setMinRating] = useState('any');
  const [searchQuery, setSearchQuery] = useState('');
  const [mapView, setMapView] = useState({ center: CITY_CENTER, zoom: 12 });
  const [showAll, setShowAll] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [now, setNow] = useState(cairoMinutesNow);

  // Refresh "open now" every minute
  useEffect(() => {
    const interval = setInterval(() => setNow(cairoMinutesNow()), 60000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: '2-digit' }).format(new Date(2000, 0, 1, hours, minutes));
  };
  const hoursLabel = (location) =>
    location.hours === '24/7' ? t('locations.open24') : `${formatTime(location.hours[0])} - ${formatTime(location.hours[1])}`;

  const filteredLocations = useMemo(
    () =>
      LOCATIONS.filter((location) => {
        if (serviceType !== 'all' && location.type !== serviceType) return false;
        if (minRating !== 'any' && location.rating < Number(minRating)) return false;
        if (maxDistance !== 'any' && distanceKm(CITY_CENTER, [location.lat, location.lng]) > Number(maxDistance)) return false;
        if (searchQuery && !matchesQuery(searchText(location), searchQuery)) return false;
        return true;
      }),
    [serviceType, minRating, maxDistance, searchQuery]
  );

  const selectedLocation = LOCATIONS.find((location) => location.id === selectedId) || null;
  const displayedLocations = showAll ? filteredLocations : filteredLocations.slice(0, INITIAL_VISIBLE);

  const selectLocation = (location) => {
    setSelectedId(location.id);
    setMapView({ center: [location.lat, location.lng], zoom: 15 });
    document.getElementById('locations-map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const resetView = () => {
    setSelectedId(null);
    setMapView({ center: CITY_CENTER, zoom: 12 });
  };

  const resetFilters = () => {
    setServiceType('all');
    setMinRating('any');
    setMaxDistance('any');
    setSearchQuery('');
    resetView();
  };

  const openStatus = (location) => {
    const open = isOpenNow(location, now);
    return (
      <span className={`text-sm font-medium ${open ? 'text-green-600' : 'text-red-600'}`}>
        {open ? t('locations.openNow') : t('locations.closed')}
      </span>
    );
  };

  return (
    <section id="locations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('locations.title')}</h1>
          <p className="text-lg text-gray-600">{t('locations.subtitle')}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          {/* Search */}
          <div className="mb-6 relative">
            <input
              type="search"
              placeholder={t('locations.searchPlaceholder')}
              aria-label={t('locations.searchPlaceholder')}
              className="w-full bg-gray-50 border border-gray-300 rounded-md py-3 ps-10 pe-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute inset-y-0 start-3 my-auto h-5 w-5 text-gray-400 pointer-events-none" />
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label htmlFor="location-type" className="block text-gray-700 text-sm font-medium mb-2">
                {t('locations.serviceType')}
              </label>
              <div className="relative">
                <select id="location-type" className={selectClass} value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
                  <option value="all">{t('locations.types.all')}</option>
                  {LOCATION_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {t(`locations.types.${type}`)}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute inset-y-0 end-2 my-auto h-4 w-4 text-gray-700" />
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="location-distance" className="block text-gray-700 text-sm font-medium mb-2">
                {t('locations.distance')}
              </label>
              <div className="relative">
                <select id="location-distance" className={selectClass} value={maxDistance} onChange={(e) => setMaxDistance(e.target.value)}>
                  <option value="any">{t('locations.anyDistance')}</option>
                  {[5, 10, 20, 50].map((km) => (
                    <option key={km} value={km}>
                      {t('locations.withinKm', { km })}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute inset-y-0 end-2 my-auto h-4 w-4 text-gray-700" />
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="location-rating" className="block text-gray-700 text-sm font-medium mb-2">
                {t('locations.rating')}
              </label>
              <div className="relative">
                <select id="location-rating" className={selectClass} value={minRating} onChange={(e) => setMinRating(e.target.value)}>
                  <option value="any">{t('locations.anyRating')}</option>
                  {[4.5, 4, 3].map((stars) => (
                    <option key={stars} value={stars}>
                      {t('locations.starsPlus', { stars })}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute inset-y-0 end-2 my-auto h-4 w-4 text-gray-700" />
              </div>
            </div>
            <button
              type="button"
              onClick={resetFilters}
              className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center md:self-end"
            >
              <RotateCcw className="h-5 w-5 me-2" /> {t('common.reset')}
            </button>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
            {LOCATION_TYPES.map((type) => (
              <span key={type} className="inline-flex items-center gap-2">
                <span className="h-3 w-3 rounded-full inline-block" style={{ background: TYPE_COLORS[type] }} />
                {t(`locations.types.${type}`)}
              </span>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Map (Leaflet controls are laid out left-to-right) */}
            <div className="lg:w-2/3" id="locations-map" dir="ltr">
              <div className="h-96 w-full rounded-lg overflow-hidden relative z-0">
                <MapContainer center={mapView.center} zoom={mapView.zoom} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                  <MapViewSetter center={mapView.center} zoom={mapView.zoom} />
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {filteredLocations.map((location) => (
                    <Marker
                      key={location.id}
                      position={[location.lat, location.lng]}
                      icon={location.id === selectedId ? SELECTED_ICON : ICONS[location.type]}
                      eventHandlers={{ click: () => selectLocation(location) }}
                    >
                      <Popup>
                        <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="text-start">
                          <p className="font-bold text-base">{location.name[language]}</p>
                          <p className="text-sm text-gray-600 !my-1">{location.address[language]}</p>
                          <div className="flex items-center gap-1">
                            <RatingStars rating={location.rating} />
                            <span className="text-sm text-gray-600">({location.reviews})</span>
                          </div>
                          {openStatus(location)}
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </div>

            {/* Details */}
            <div className="lg:w-1/3">
              {selectedLocation ? (
                <div className="bg-white rounded-lg shadow-md p-6 border-s-4 border-blue-600">
                  <div className="flex justify-between items-start gap-3 mb-4">
                    <h2 className="text-xl font-bold text-gray-900">{selectedLocation.name[language]}</h2>
                    <button type="button" onClick={resetView} className="text-sm text-gray-500 hover:text-gray-700 whitespace-nowrap">
                      {t('locations.backToAll')}
                    </button>
                  </div>

                  <div className="flex items-center mb-3">
                    <RatingStars rating={selectedLocation.rating} size="h-5 w-5" />
                    <span className="text-gray-600 ms-2">
                      {selectedLocation.rating} ({t('common.reviewsCount', { count: selectedLocation.reviews })})
                    </span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1 me-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900">{t('locations.address')}</h3>
                        <p className="text-gray-600">{selectedLocation.address[language]}</p>
                      </div>
                    </div>
                    <div className="flex">
                      <Phone className="h-5 w-5 text-blue-600 mt-1 me-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900">{t('locations.phone')}</h3>
                        <a href={`tel:${selectedLocation.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-blue-600" dir="ltr">
                          {selectedLocation.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex">
                      <Clock className="h-5 w-5 text-blue-600 mt-1 me-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900">{t('locations.hours')}</h3>
                        <p className="text-gray-600">{hoursLabel(selectedLocation)}</p>
                        {openStatus(selectedLocation)}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-medium text-gray-900 mb-2">{t('locations.services')}</h3>
                    <ul className="space-y-1">
                      {selectedLocation.tags.map((tag) => (
                        <li key={tag} className="flex items-center text-gray-600">
                          <Check className="h-4 w-4 text-blue-600 me-2" aria-hidden="true" />
                          {t(`locations.tags.${tag}`)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.lat},${selectedLocation.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300"
                  >
                    <Navigation className="h-4 w-4 me-2" /> {t('locations.directions')}
                  </a>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-6 h-full">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">{t('locations.listTitle')}</h2>
                  <p className="text-gray-600 mb-6">{t('locations.listHint')}</p>
                  <div className="space-y-2">
                    {filteredLocations.length > 0 ? (
                      filteredLocations.slice(0, 3).map((location) => (
                        <button
                          type="button"
                          key={location.id}
                          onClick={() => selectLocation(location)}
                          className="w-full text-start p-3 bg-white rounded-md shadow-sm hover:shadow-md transition duration-200 border-s-4 border-blue-600"
                        >
                          <p className="font-bold text-gray-900">{location.name[language]}</p>
                          <div className="flex justify-between gap-2">
                            <p className="text-gray-600 text-sm">{location.address[language]}</p>
                            {openStatus(location)}
                          </div>
                        </button>
                      ))
                    ) : (
                      <p className="text-gray-600 text-center p-8">{t('locations.noMatch')}</p>
                    )}
                  </div>
                  {filteredLocations.length > 3 && (
                    <p className="text-end mt-3 text-sm text-gray-500">
                      {t('locations.showingOf', { shown: 3, total: filteredLocations.length })}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* All locations */}
          <div className="flex flex-wrap justify-between items-center gap-3 mt-10 mb-6">
            <h2 className="text-xl font-bold text-gray-900">{t('locations.listTitle')}</h2>
            {filteredLocations.length > INITIAL_VISIBLE && (
              <button
                type="button"
                onClick={() => setShowAll((value) => !value)}
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition duration-200"
                aria-expanded={showAll}
              >
                {showAll ? (
                  <>
                    <ChevronUp className="h-5 w-5 me-1" /> {t('common.showLess')}
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-5 w-5 me-1" /> {t('common.viewAll', { count: filteredLocations.length })}
                  </>
                )}
              </button>
            )}
          </div>

          {filteredLocations.length === 0 ? (
            <div className="text-center p-12 bg-gray-50 rounded-lg">
              <Frown className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('locations.noneTitle')}</h3>
              <p className="text-gray-600 mb-4">{t('locations.noneText')}</p>
              <button
                type="button"
                onClick={resetFilters}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition duration-300"
              >
                {t('common.resetFilters')}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayedLocations.map((location) => (
                <button
                  type="button"
                  key={location.id}
                  className="text-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200 border-s-4 border-blue-600"
                  onClick={() => selectLocation(location)}
                >
                  <p className="text-xs font-medium mb-1" style={{ color: TYPE_COLORS[location.type] }}>
                    {t(`locations.types.${location.type}`)}
                  </p>
                  <h3 className="font-bold text-gray-900">{location.name[language]}</h3>
                  <p className="text-gray-600 text-sm">{location.address[language]}</p>
                  <div className="flex items-center my-2">
                    <RatingStars rating={location.rating} />
                    <span className="text-gray-500 text-sm ms-2">{t('common.reviewsCount', { count: location.reviews })}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    {openStatus(location)}
                    <span className="text-blue-600 text-sm">{t('common.viewDetails')}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Locations;
