import { translate } from '../i18n';
import { PRODUCTS } from '../data/products';
import { SERVICES } from '../data/services';
import { LOCATIONS } from '../data/locations';
import { matchesQuery, productSearchText } from './search';

/** Location types that offer each service line (used when filtering by service). */
const SERVICE_LOCATION_TYPES = {
  mechanical: ['service'],
  emergency: ['towing', 'service'],
  inspection: ['service'],
  specialty: ['service', 'wash'],
  towing: ['towing'],
  carWash: ['wash'],
};

const serviceText = (service) =>
  ['en', 'ar']
    .flatMap((language) => [translate(language, `serviceNames.${service.key}`), translate(language, `home.services.items.${service.key}`)])
    .join(' ');

const locationText = (location) =>
  [
    location.name.ar,
    location.name.en,
    location.address.ar,
    location.address.en,
    ...location.tags.flatMap((tag) => [translate('ar', `locations.tags.${tag}`), translate('en', `locations.tags.${tag}`)]),
  ].join(' ');

/**
 * Searches products, services and locations at once (Arabic or English queries).
 * @param {{ query?: string, service?: string, brand?: string }} criteria
 */
export const searchSite = ({ query = '', service = '', brand = '' }) => {
  const text = query.trim();

  const services = SERVICES.filter((item) => (service ? item.key === service : false) || (text && matchesQuery(serviceText(item), text)));

  const products =
    text || brand
      ? PRODUCTS.filter(
          (product) => (!brand || product.brands.includes(brand)) && (!text || matchesQuery(productSearchText(product), text))
        )
      : [];

  const allowedTypes = service ? SERVICE_LOCATION_TYPES[service] : null;
  const locations =
    text || service
      ? LOCATIONS.filter(
          (location) => (!allowedTypes || allowedTypes.includes(location.type)) && (!text || matchesQuery(locationText(location), text))
        )
      : [];

  return { services, products, locations };
};
