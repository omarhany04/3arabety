/**
 * Product catalogue – single source of truth for the shop, the home page,
 * search and the cart. Product names/descriptions live in the locale files
 * under `products.<slug>` so they can be shown in Arabic or English.
 *
 * Images are bundled with the site (src/assets/images/products) instead of
 * being hot-linked from third-party hosts, so they are cached and served fast.
 */
import brakeDisc from '../assets/images/products/brake-disc.webp';
import serpentineBelt from '../assets/images/products/serpentine-belt.webp';
import engineOil from '../assets/images/products/engine-oil.webp';
import coolant from '../assets/images/products/coolant.webp';
import carBattery from '../assets/images/products/car-battery.webp';
import truckBattery from '../assets/images/products/truck-battery.webp';
import ledHeadlights from '../assets/images/products/led-headlights.webp';
import fogLights from '../assets/images/products/fog-lights.webp';
import cleaningKit from '../assets/images/products/cleaning-kit.webp';
import wheelCleaner from '../assets/images/products/wheel-cleaner.webp';
import floorMats from '../assets/images/products/floor-mats.webp';
import phoneMount from '../assets/images/products/phone-mount.webp';
import highFlowAirFilter from '../assets/images/products/high-flow-air-filter.webp';
import injectorCleaner from '../assets/images/products/injector-cleaner.webp';
import oilFilter from '../assets/images/products/oil-filter.webp';
import brakePads from '../assets/images/products/brake-pads.webp';
import sparkPlugs from '../assets/images/products/spark-plugs.webp';
import brakeRotors from '../assets/images/products/brake-rotors.webp';
import timingChainKit from '../assets/images/products/timing-chain-kit.webp';
import controlArm from '../assets/images/products/control-arm.webp';
import clutchKit from '../assets/images/products/clutch-kit.webp';
import ballJoint from '../assets/images/products/ball-joint.webp';
import radiatorFan from '../assets/images/products/radiator-fan.webp';
import oilPan from '../assets/images/products/oil-pan.webp';
import driveshaft from '../assets/images/products/driveshaft.webp';
import steeringRack from '../assets/images/products/steering-rack.webp';
import fuelPump from '../assets/images/products/fuel-pump.webp';
import axleShaft from '../assets/images/products/axle-shaft.webp';
import waterPump from '../assets/images/products/water-pump.webp';
import brakeBooster from '../assets/images/products/brake-booster.webp';
import cvJointKit from '../assets/images/products/cv-joint-kit.webp';
import engineMount from '../assets/images/products/engine-mount.webp';
import shockAbsorber from '../assets/images/products/shock-absorber.webp';
import dashcam from '../assets/images/products/dashcam.webp';
import tire from '../assets/images/products/tire.webp';
import alloyWheel from '../assets/images/products/alloy-wheel.webp';
import obdScanner from '../assets/images/products/obd-scanner.webp';
import jumperCables from '../assets/images/products/jumper-cables.webp';
import oilChangeKit from '../assets/images/products/oil-change-kit.webp';
import transmissionFluid from '../assets/images/products/transmission-fluid.webp';
import microfiberTowels from '../assets/images/products/microfiber-towels.webp';
import carWax from '../assets/images/products/car-wax.webp';
import snowFoamShampoo from '../assets/images/products/snow-foam-shampoo.webp';
import wiperBlades from '../assets/images/products/wiper-blades.webp';
import seatCovers from '../assets/images/products/seat-covers.webp';
import steeringWheelCover from '../assets/images/products/steering-wheel-cover.webp';
import airFreshener from '../assets/images/products/air-freshener.webp';
import turbocharger from '../assets/images/products/turbocharger.webp';
import exhaustTips from '../assets/images/products/exhaust-tips.webp';
import projectorHeadlight from '../assets/images/products/projector-headlight.webp';
import fireExtinguisher from '../assets/images/products/fire-extinguisher.webp';
import firstAidKit from '../assets/images/products/first-aid-kit.webp';
import coiloverKit from '../assets/images/products/coilover-kit.webp';
import alternator from '../assets/images/products/alternator.webp';
import engineAirFilter from '../assets/images/products/engine-air-filter.webp';

/** Category ids, in the order they are listed in the shop sidebar. */
export const CATEGORIES = [
  'spare',
  'brakes',
  'engine',
  'filters',
  'fluids',
  'cooling',
  'electrical',
  'batteries',
  'lighting',
  'tires',
  'carcare',
  'accessories',
  'safety',
];

/** Car brands that products can be filtered by (brand names are not translated). */
export const CAR_BRANDS = [
  { id: 'toyota', name: 'Toyota' },
  { id: 'honda', name: 'Honda' },
  { id: 'bmw', name: 'BMW' },
  { id: 'mercedes', name: 'Mercedes' },
  { id: 'ford', name: 'Ford' },
  { id: 'chevrolet', name: 'Chevrolet' },
  { id: 'audi', name: 'Audi' },
  { id: 'nissan', name: 'Nissan' },
  { id: 'hyundai', name: 'Hyundai' },
  { id: 'kia', name: 'Kia' },
  { id: 'volkswagen', name: 'Volkswagen' },
  { id: 'peugeot', name: 'Peugeot' },
  { id: 'suzuki', name: 'Suzuki' },
  { id: 'renault', name: 'Renault' },
  { id: 'opel', name: 'Opel' },
  { id: 'mitsubishi', name: 'Mitsubishi' },
  { id: 'subaru', name: 'Subaru' },
  { id: 'fiat', name: 'Fiat' },
];

/** Badge id → Tailwind classes (kept as full class names so Tailwind can detect them). */
export const BADGE_STYLES = {
  inStock: 'bg-green-500',
  sale: 'bg-red-500',
  fewLeft: 'bg-amber-500',
  bestSeller: 'bg-blue-600',
  new: 'bg-purple-600',
};

/** Installation is offered as an add-on at 20% of the item price. */
export const INSTALLATION_RATE = 0.2;

export const PRODUCTS = [
  // Spare parts
  { id: 2, slug: 'serpentine-belt', category: 'spare', brands: ['ford', 'chevrolet', 'toyota'], price: 229.99, rating: 4.5, reviews: 42, badge: 'inStock', image: serpentineBelt },
  { id: 19, slug: 'timing-chain-kit', category: 'spare', brands: ['toyota'], price: 1899.99, rating: 4.6, reviews: 52, badge: 'inStock', image: timingChainKit },
  { id: 20, slug: 'control-arm', category: 'spare', brands: ['honda'], price: 1099.99, rating: 4.5, reviews: 45, badge: 'fewLeft', image: controlArm },
  { id: 25, slug: 'driveshaft', category: 'spare', brands: ['chevrolet'], price: 1649.99, rating: 4.5, reviews: 33, badge: 'fewLeft', image: driveshaft },
  { id: 26, slug: 'steering-rack', category: 'spare', brands: ['hyundai'], price: 2999.99, rating: 4.6, reviews: 40, badge: 'inStock', image: steeringRack },
  { id: 28, slug: 'axle-shaft', category: 'spare', brands: ['audi'], price: 2799.99, rating: 4.6, reviews: 36, badge: 'inStock', image: axleShaft },
  { id: 31, slug: 'cv-joint-kit', category: 'spare', brands: ['renault'], price: 849.99, rating: 4.2, reviews: 19, badge: 'inStock', image: cvJointKit },

  // Brakes & suspension
  { id: 1, slug: 'brake-disc', category: 'brakes', brands: ['toyota', 'honda', 'nissan'], price: 464.99, rating: 4.7, reviews: 58, badge: 'inStock', image: brakeDisc },
  { id: 16, slug: 'brake-pads', category: 'brakes', brands: ['toyota', 'honda'], price: 999.99, rating: 5, reviews: 67, badge: 'bestSeller', image: brakePads },
  { id: 18, slug: 'brake-rotors', category: 'brakes', brands: ['bmw', 'mercedes', 'audi'], price: 599.99, rating: 4.6, reviews: 43, badge: 'inStock', image: brakeRotors },
  { id: 22, slug: 'ball-joint', category: 'brakes', brands: ['ford'], price: 799.99, rating: 4.3, reviews: 29, badge: 'inStock', image: ballJoint },
  { id: 30, slug: 'brake-booster', category: 'brakes', brands: ['suzuki'], price: 1749.99, rating: 4.4, reviews: 32, badge: 'inStock', image: brakeBooster },
  { id: 33, slug: 'shock-absorber', category: 'brakes', brands: ['mitsubishi'], price: 1349.99, oldPrice: 1499.99, rating: 4.4, reviews: 30, badge: 'sale', image: shockAbsorber },
  { id: 53, slug: 'coilover-kit', category: 'brakes', brands: ['bmw', 'honda', 'subaru'], price: 12499.99, rating: 4.8, reviews: 18, badge: 'new', image: coiloverKit },

  // Engine performance
  { id: 13, slug: 'high-flow-air-filter', category: 'engine', brands: ['bmw', 'audi', 'mercedes'], price: 599.99, rating: 4.6, reviews: 78, badge: 'inStock', image: highFlowAirFilter },
  { id: 14, slug: 'injector-cleaner', category: 'engine', brands: ['fiat', 'renault', 'suzuki'], price: 649.99, rating: 4.4, reviews: 91, badge: 'inStock', image: injectorCleaner },
  { id: 21, slug: 'clutch-kit', category: 'engine', brands: ['nissan'], price: 2299.99, rating: 4.7, reviews: 37, badge: 'inStock', image: clutchKit },
  { id: 24, slug: 'oil-pan', category: 'engine', brands: ['mercedes'], price: 1249.99, rating: 4.4, reviews: 21, badge: 'inStock', image: oilPan },
  { id: 27, slug: 'fuel-pump', category: 'engine', brands: ['kia'], price: 2149.99, rating: 4.7, reviews: 50, badge: 'inStock', image: fuelPump },
  { id: 32, slug: 'engine-mount', category: 'engine', brands: ['opel'], price: 699.99, rating: 4.5, reviews: 22, badge: 'inStock', image: engineMount },
  { id: 48, slug: 'turbocharger', category: 'engine', brands: ['volkswagen', 'audi', 'bmw'], price: 14999.99, rating: 4.7, reviews: 14, badge: 'new', image: turbocharger },
  { id: 49, slug: 'exhaust-tips', category: 'engine', brands: ['bmw', 'mercedes', 'audi', 'volkswagen'], price: 899.99, rating: 4.5, reviews: 39, badge: 'inStock', image: exhaustTips },

  // Filters
  { id: 15, slug: 'oil-filter', category: 'filters', brands: ['toyota', 'honda', 'nissan'], price: 299.99, rating: 4.5, reviews: 42, badge: 'inStock', image: oilFilter },
  { id: 55, slug: 'engine-air-filter', category: 'filters', brands: ['toyota', 'honda', 'hyundai', 'kia', 'nissan'], price: 349.99, rating: 4.4, reviews: 61, badge: 'inStock', image: engineAirFilter },

  // Oils & fluids
  { id: 3, slug: 'engine-oil', category: 'fluids', brands: ['fiat', 'renault', 'opel'], price: 1199.99, oldPrice: 1349.99, rating: 4.8, reviews: 122, badge: 'sale', image: engineOil },
  { id: 4, slug: 'coolant', category: 'fluids', brands: ['mitsubishi', 'renault'], price: 619.99, oldPrice: 699.99, rating: 4.3, reviews: 37, badge: 'sale', image: coolant },
  { id: 39, slug: 'oil-change-kit', category: 'fluids', brands: ['toyota', 'honda', 'nissan', 'hyundai'], price: 1599.99, oldPrice: 1849.99, rating: 4.7, reviews: 84, badge: 'sale', image: oilChangeKit },
  { id: 40, slug: 'transmission-fluid', category: 'fluids', brands: ['toyota', 'nissan', 'mitsubishi', 'kia'], price: 1049.99, rating: 4.5, reviews: 27, badge: 'inStock', image: transmissionFluid },

  // Cooling system
  { id: 23, slug: 'radiator-fan', category: 'cooling', brands: ['bmw'], price: 3149.99, oldPrice: 3599.99, rating: 4.8, reviews: 66, badge: 'sale', image: radiatorFan },
  { id: 29, slug: 'water-pump', category: 'cooling', brands: ['peugeot'], price: 1199.99, rating: 4.3, reviews: 24, badge: 'inStock', image: waterPump },

  // Electrical
  { id: 17, slug: 'spark-plugs', category: 'electrical', brands: ['ford', 'chevrolet', 'toyota'], price: 449.99, rating: 4.5, reviews: 53, badge: 'inStock', image: sparkPlugs },
  { id: 37, slug: 'obd-scanner', category: 'electrical', brands: [], price: 1899.99, oldPrice: 2299.99, rating: 4.7, reviews: 96, badge: 'sale', image: obdScanner },
  { id: 54, slug: 'alternator', category: 'electrical', brands: ['toyota', 'hyundai', 'kia'], price: 3799.99, rating: 4.6, reviews: 23, badge: 'inStock', image: alternator },

  // Batteries
  { id: 5, slug: 'car-battery', category: 'batteries', brands: ['subaru', 'toyota', 'honda', 'nissan', 'hyundai', 'kia'], price: 2499.99, rating: 4.7, reviews: 89, badge: 'inStock', image: carBattery },
  { id: 6, slug: 'truck-battery', category: 'batteries', brands: ['subaru', 'ford', 'chevrolet'], price: 4349.99, rating: 4.6, reviews: 48, badge: 'fewLeft', image: truckBattery },
  { id: 38, slug: 'jumper-cables', category: 'batteries', brands: [], price: 549.99, rating: 4.6, reviews: 74, badge: 'inStock', image: jumperCables },

  // Lighting
  { id: 7, slug: 'led-headlights', category: 'lighting', brands: ['subaru', 'toyota', 'honda', 'bmw'], price: 489.99, rating: 4.9, reviews: 76, badge: 'bestSeller', image: ledHeadlights },
  { id: 8, slug: 'fog-lights', category: 'lighting', brands: ['bmw', 'mercedes', 'volkswagen'], price: 774.99, rating: 4.4, reviews: 53, badge: 'inStock', image: fogLights },
  { id: 50, slug: 'projector-headlight', category: 'lighting', brands: ['bmw'], price: 4799.99, rating: 4.6, reviews: 12, badge: 'new', image: projectorHeadlight },

  // Tires & wheels
  { id: 35, slug: 'tire', category: 'tires', brands: ['toyota', 'hyundai', 'kia', 'nissan', 'chevrolet'], price: 3899.99, rating: 4.7, reviews: 131, badge: 'bestSeller', image: tire },
  { id: 36, slug: 'alloy-wheel', category: 'tires', brands: ['volkswagen', 'audi', 'mercedes'], price: 5499.99, rating: 4.8, reviews: 28, badge: 'new', image: alloyWheel },

  // Car care
  { id: 9, slug: 'cleaning-kit', category: 'carcare', brands: ['volkswagen'], price: 679.99, rating: 4.8, reviews: 112, badge: 'bestSeller', image: cleaningKit },
  { id: 10, slug: 'wheel-cleaner', category: 'carcare', brands: ['peugeot'], price: 224.99, rating: 4.6, reviews: 87, badge: 'inStock', image: wheelCleaner },
  { id: 41, slug: 'microfiber-towels', category: 'carcare', brands: [], price: 279.99, rating: 4.8, reviews: 143, badge: 'inStock', image: microfiberTowels },
  { id: 42, slug: 'car-wax', category: 'carcare', brands: [], price: 449.99, rating: 4.6, reviews: 58, badge: 'inStock', image: carWax },
  { id: 43, slug: 'snow-foam-shampoo', category: 'carcare', brands: [], price: 349.99, rating: 4.7, reviews: 69, badge: 'new', image: snowFoamShampoo },

  // Accessories
  { id: 11, slug: 'floor-mats', category: 'accessories', brands: ['toyota', 'honda', 'ford'], price: 899.99, rating: 4.7, reviews: 156, badge: 'inStock', image: floorMats },
  { id: 12, slug: 'phone-mount', category: 'accessories', brands: [], price: 299.99, oldPrice: 349.99, rating: 4.5, reviews: 203, badge: 'sale', image: phoneMount },
  { id: 34, slug: 'dashcam', category: 'accessories', brands: ['subaru', 'ford', 'toyota'], price: 1149.99, rating: 4.6, reviews: 44, badge: 'inStock', image: dashcam },
  { id: 44, slug: 'wiper-blades', category: 'accessories', brands: ['toyota', 'hyundai', 'kia', 'renault', 'peugeot'], price: 399.99, rating: 4.5, reviews: 92, badge: 'inStock', image: wiperBlades },
  { id: 45, slug: 'seat-covers', category: 'accessories', brands: ['toyota', 'hyundai', 'kia', 'nissan'], price: 2499.99, rating: 4.6, reviews: 47, badge: 'inStock', image: seatCovers },
  { id: 46, slug: 'steering-wheel-cover', category: 'accessories', brands: [], price: 349.99, rating: 4.4, reviews: 65, badge: 'inStock', image: steeringWheelCover },
  { id: 47, slug: 'air-freshener', category: 'accessories', brands: [], price: 149.99, rating: 4.3, reviews: 118, badge: 'inStock', image: airFreshener },

  // Safety & emergency
  { id: 51, slug: 'fire-extinguisher', category: 'safety', brands: [], price: 449.99, rating: 4.8, reviews: 54, badge: 'inStock', image: fireExtinguisher },
  { id: 52, slug: 'first-aid-kit', category: 'safety', brands: [], price: 399.99, rating: 4.7, reviews: 38, badge: 'inStock', image: firstAidKit },
];

/** Products shown in the home page carousel (groups of four). */
export const FEATURED_PRODUCT_SETS = [
  [5, 35, 37, 21],
  [13, 1, 29, 7],
  [34, 43, 16, 45],
];

const productsById = new Map(PRODUCTS.map((product) => [product.id, product]));

export const getProductById = (id) => productsById.get(Number(id));

/** Highest catalogue price rounded up to the next 1,000 – used as the price filter ceiling. */
export const MAX_PRODUCT_PRICE = Math.ceil(Math.max(...PRODUCTS.map((p) => p.price)) / 1000) * 1000;
