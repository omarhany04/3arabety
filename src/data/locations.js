/**
 * Partner service locations in Alexandria.
 * Names and addresses are stored in both languages; service tags are
 * translated through `locations.tags.<key>` in the locale files.
 * `hours` is either "24/7" or an [open, close] pair in 24h "HH:mm" (Cairo time).
 */
export const CITY_CENTER = [31.2001, 29.9187];

export const LOCATION_TYPES = ['service', 'parts', 'wash', 'towing'];

export const LOCATIONS = [
  { id: 1, type: 'service', lat: 31.2156, lng: 29.9553, rating: 4.6, reviews: 65, phone: '+20 12 3456 7893', hours: ['09:00', '20:00'],
    name: { ar: 'مركز صيانة عربيتك', en: '3arabetak Service Center' },
    address: { ar: 'شارع مصطفى كامل، سموحة، الإسكندرية', en: 'Mostafa Kamel St, Smouha, Alexandria' },
    tags: ['engineRepair', 'diagnostics', 'electrical'] },
  { id: 2, type: 'parts', lat: 31.2471, lng: 29.9632, rating: 4.3, reviews: 48, phone: '+20 12 3456 7894', hours: ['09:30', '21:00'],
    name: { ar: 'قطع غيار أوتو بلس', en: 'Auto Plus Spare Parts' },
    address: { ar: 'شارع جمال عبد الناصر، ميامي، الإسكندرية', en: 'Gamal Abdel Nasser St, Miami, Alexandria' },
    tags: ['oemParts', 'aftermarketParts', 'accessories'] },
  { id: 3, type: 'wash', lat: 31.2433, lng: 29.9768, rating: 3.8, reviews: 27, phone: '+20 12 3456 7895', hours: ['08:00', '22:00'],
    name: { ar: 'كار ووش النزهة', en: 'El Nozha Car Wash' },
    address: { ar: 'شارع النزهة، سيدي بشر، الإسكندرية', en: 'El Nozha St, Sidi Bishr, Alexandria' },
    tags: ['expressWash', 'premiumDetailing', 'interiorCleaning'] },
  { id: 4, type: 'towing', lat: 31.0625, lng: 29.7762, rating: 4.1, reviews: 15, phone: '+20 12 3456 7896', hours: '24/7',
    name: { ar: 'ونش إنقاذ الطريق', en: 'Road Rescue Towing' },
    address: { ar: 'الطريق الصحراوي، مدخل الإسكندرية', en: 'Desert Road, Alexandria Entrance' },
    tags: ['emergencyTowing', 'roadsideAssistance', 'accidentRecovery'] },
  { id: 5, type: 'service', lat: 31.1057, lng: 29.7695, rating: 4.4, reviews: 32, phone: '+20 12 3456 7897', hours: ['07:00', '23:00'],
    name: { ar: 'خدمة الطريق السريع', en: 'Highway Road Service' },
    address: { ar: 'طريق إسكندرية القاهرة السريع، العامرية، الإسكندرية', en: 'Alexandria-Cairo Highway, Amreya, Alexandria' },
    tags: ['mobileRepair', 'batteryService', 'tireChange'] },
  { id: 6, type: 'service', lat: 31.2519, lng: 29.986, rating: 4.6, reviews: 85, phone: '+20 12 3456 7890', hours: ['09:00', '21:00'],
    name: { ar: 'مركز الطارق لخدمات السيارات', en: 'El Tarek Car Service Center' },
    address: { ar: 'طريق الكورنيش، سيدي بشر، الإسكندرية', en: 'Corniche Road, Sidi Bishr, Alexandria' },
    tags: ['mechanicalRepairs', 'oilChange', 'brakeService'] },
  { id: 7, type: 'parts', lat: 31.2146, lng: 29.9442, rating: 4.2, reviews: 64, phone: '+20 12 3456 7891', hours: ['08:30', '20:00'],
    name: { ar: 'أبو اليزيد لقطع غيار السيارات', en: 'Abu El Yazid Auto Parts' },
    address: { ar: 'شارع الحرية، سموحة، الإسكندرية', en: 'El Horreya St, Smouha, Alexandria' },
    tags: ['spareParts', 'accessories', 'electronics'] },
  { id: 8, type: 'wash', lat: 31.2237, lng: 29.9576, rating: 4.0, reviews: 40, phone: '+20 12 3456 7892', hours: ['08:00', '22:00'],
    name: { ar: 'سبيد لغسيل السيارات', en: 'Speed Car Wash' },
    address: { ar: 'شارع مصطفى كامل، رشدي، الإسكندرية', en: 'Mostafa Kamel St, Roushdy, Alexandria' },
    tags: ['carWash', 'interiorCleaning', 'polishing'] },
  { id: 9, type: 'service', lat: 31.2742, lng: 30.0055, rating: 4.8, reviews: 112, phone: '+20 12 3456 7898', hours: ['08:00', '20:00'],
    name: { ar: 'المركز الألماني للسيارات', en: 'The German Auto Center' },
    address: { ar: 'شارع أبو قير، المنتزه، الإسكندرية', en: 'Abu Qir St, Montaza, Alexandria' },
    tags: ['germanSpecialist', 'computerDiagnostics', 'performanceTuning', 'transmissionRepair'] },
  { id: 10, type: 'parts', lat: 31.2039, lng: 29.9156, rating: 4.7, reviews: 92, phone: '+20 12 3456 8001', hours: ['08:00', '21:00'],
    name: { ar: 'مركز الإتحاد للإطارات', en: 'El Etihad Tire Center' },
    address: { ar: 'شارع الإسكندر الأكبر، أزاريطة، الإسكندرية', en: 'Alexander the Great St, Azarita, Alexandria' },
    tags: ['tireSales', 'wheelAlignment', 'balancing', 'tireRepair'] },
  { id: 11, type: 'service', lat: 31.1932, lng: 29.911, rating: 4.3, reviews: 58, phone: '+20 12 3456 8002', hours: ['08:30', '20:30'],
    name: { ar: 'ورشة النور للسيارات', en: 'El Nour Auto Workshop' },
    address: { ar: 'شارع فوزي معاذ، محرم بك، الإسكندرية', en: 'Fawzy Moaz St, Moharram Bek, Alexandria' },
    tags: ['generalRepair', 'suspension', 'transmissionRepair'] },
  { id: 12, type: 'wash', lat: 31.2332, lng: 29.9482, rating: 4.5, reviews: 73, phone: '+20 12 3456 8003', hours: ['09:00', '22:00'],
    name: { ar: 'الزهور لتلميع السيارات', en: 'El Zohour Car Polishing' },
    address: { ar: 'شارع العيسوي، فلمنج، الإسكندرية', en: 'El Eissawy St, Fleming, Alexandria' },
    tags: ['premiumDetailing', 'exteriorPolishing', 'steamCleaning'] },
  { id: 13, type: 'parts', lat: 31.1997, lng: 29.8993, rating: 4.1, reviews: 47, phone: '+20 12 3456 8004', hours: ['09:00', '21:00'],
    name: { ar: 'توفيق لقطع غيار الكوري', en: 'Tawfik Korean Car Parts' },
    address: { ar: 'شارع السلطان حسين، محطة الرمل، الإسكندرية', en: 'Sultan Hussein St, Raml Station, Alexandria' },
    tags: ['koreanParts', 'japaneseParts', 'electronics'] },
  { id: 14, type: 'towing', lat: 31.1571, lng: 29.8035, rating: 4.3, reviews: 29, phone: '+20 12 3456 8005', hours: '24/7',
    name: { ar: 'سامي للسحب والإنقاذ', en: 'Sami Towing & Recovery' },
    address: { ar: 'الطريق الدائري، العجمي، الإسكندرية', en: 'Ring Road, Agami, Alexandria' },
    tags: ['heavyTowing', 'roadsideAssistance', 'carTransport'] },
  { id: 15, type: 'service', lat: 31.265, lng: 29.9812, rating: 4.4, reviews: 83, phone: '+20 12 3456 8006', hours: ['08:00', '21:00'],
    name: { ar: 'مركز الأصيل للزيوت والفلاتر', en: 'El Aseel Oil & Filter Center' },
    address: { ar: 'شارع 45، العصافرة، الإسكندرية', en: '45th St, Asafra, Alexandria' },
    tags: ['oilChange', 'filterReplacement', 'fluidsCheck'] },
  { id: 16, type: 'parts', lat: 31.2226, lng: 29.9402, rating: 3.9, reviews: 41, phone: '+20 12 3456 8007', hours: ['10:00', '22:00'],
    name: { ar: 'البدر لزينة السيارات', en: 'El Badr Car Accessories' },
    address: { ar: 'شارع اسكندر إبراهيم، سابا باشا، الإسكندرية', en: 'Iskandar Ibrahim St, Saba Pasha, Alexandria' },
    tags: ['accessories', 'windowTinting', 'ledLighting'] },
  { id: 17, type: 'service', lat: 31.2823, lng: 30.0285, rating: 4.7, reviews: 95, phone: '+20 12 3456 8008', hours: ['09:00', '19:00'],
    name: { ar: 'الساحل للسمكرة والدهان', en: 'El Sahel Body & Paint' },
    address: { ar: 'المعمورة البلد، المنتزه، الإسكندرية', en: 'Maamoura El Balad, Montaza, Alexandria' },
    tags: ['bodyWork', 'painting', 'dentRemoval'] },
  { id: 18, type: 'wash', lat: 31.2117, lng: 29.9182, rating: 3.8, reviews: 36, phone: '+20 12 3456 8009', hours: ['08:00', '20:00'],
    name: { ar: 'غسيل متنقل الشاطبي', en: 'El Shatby Mobile Wash' },
    address: { ar: 'شارع بور سعيد، الشاطبي، الإسكندرية', en: 'Port Said St, Shatby, Alexandria' },
    tags: ['mobileWash', 'steamCleaning', 'subscription'] },
  { id: 19, type: 'service', lat: 31.2324, lng: 29.9666, rating: 4.9, reviews: 107, phone: '+20 12 3456 8010', hours: ['10:00', '19:00'],
    name: { ar: 'مركز تكنو لبرمجة السيارات', en: 'Techno Car Programming Center' },
    address: { ar: 'شارع جميلة بوحريد، جليم، الإسكندرية', en: 'Gamila Bouhired St, Glim, Alexandria' },
    tags: ['ecuProgramming', 'diagnostics', 'performanceTuning'] },
  { id: 20, type: 'parts', lat: 31.2437, lng: 29.9702, rating: 4.5, reviews: 67, phone: '+20 12 3456 8011', hours: ['09:00', '20:00'],
    name: { ar: 'البرنس لقطع غيار الأمريكي', en: 'El Prince American Car Parts' },
    address: { ar: 'شارع الإقبال، لوران، الإسكندرية', en: 'El Eqbal St, Laurent, Alexandria' },
    tags: ['americanParts', 'accessories', 'performanceParts'] },
  { id: 21, type: 'service', lat: 31.0158, lng: 29.7689, rating: 4.2, reviews: 31, phone: '+20 12 3456 8012', hours: '24/7',
    name: { ar: 'مركز خدمة متنقل 24', en: 'Mobile Service Center 24' },
    address: { ar: 'طريق برج العرب، العامرية، الإسكندرية', en: 'Borg El Arab Road, Amreya, Alexandria' },
    tags: ['mobileRepair', 'jumpStart', 'tireChange', 'fuelDelivery'] },
  { id: 22, type: 'service', lat: 31.2181, lng: 29.9341, rating: 4.6, reviews: 87, phone: '+20 12 3456 8013', hours: ['09:00', '20:00'],
    name: { ar: 'الإتقان لصيانة المكيفات', en: 'El Etqan A/C Service' },
    address: { ar: 'شارع أبو قير، الإبراهيمية، الإسكندرية', en: 'Abu Qir St, Ibrahimia, Alexandria' },
    tags: ['acRepair', 'acRecharge', 'heaterService'] },
  { id: 23, type: 'parts', lat: 31.1876, lng: 29.9105, rating: 4.4, reviews: 59, phone: '+20 12 3456 8014', hours: ['09:00', '21:00'],
    name: { ar: 'الفرعونية للإطارات المستوردة', en: 'El Pharaonia Imported Tires' },
    address: { ar: 'شارع الشهيد مصطفى يسري، الحضرة، الإسكندرية', en: 'El Shahid Mostafa Yousry St, El Hadara, Alexandria' },
    tags: ['importedTires', 'rims', 'wheelAlignment'] },
  { id: 24, type: 'service', lat: 31.2597, lng: 29.9877, rating: 4.3, reviews: 72, phone: '+20 12 3456 8015', hours: ['08:30', '20:30'],
    name: { ar: 'الكوثر لخدمات السيارات', en: 'El Kawthar Car Services' },
    address: { ar: 'شارع ملك حفني، المندرة، الإسكندرية', en: 'Malak Hefny St, Mandara, Alexandria' },
    tags: ['generalMaintenance', 'brakeService', 'suspension'] },
];

const toMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

/** Current time in Cairo as minutes since midnight. */
export const cairoMinutesNow = (date = new Date()) => {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Africa/Cairo', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(date);
  const value = (type) => Number(parts.find((part) => part.type === type)?.value || 0);
  return value('hour') * 60 + value('minute');
};

export const isOpenNow = (location, minutes = cairoMinutesNow()) => {
  if (location.hours === '24/7') return true;
  const [open, close] = location.hours.map(toMinutes);
  return minutes >= open && minutes < close;
};

/** Great-circle distance in kilometres. */
export const distanceKm = ([lat1, lng1], [lat2, lng2]) => {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};
