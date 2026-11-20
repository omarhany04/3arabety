import { Tool, AlertTriangle, CheckCircle, Package, Truck, Droplet } from 'react-feather';

/**
 * The six service lines. Titles/descriptions are translated through
 * `serviceNames.<key>` and `home.services.items.<key>` in the locale files.
 */
export const SERVICES = [
  { key: 'mechanical', path: '/services/mechanical-repairs', Icon: Tool, color: 'blue' },
  { key: 'emergency', path: '/services/emergency-assistance', Icon: AlertTriangle, color: 'red' },
  { key: 'inspection', path: '/services/inspection-services', Icon: CheckCircle, color: 'green' },
  { key: 'specialty', path: '/services/specialty-services', Icon: Package, color: 'purple' },
  { key: 'towing', path: '/services/towing-service', Icon: Truck, color: 'yellow' },
  { key: 'carWash', path: '/services/car-wash-care', Icon: Droplet, color: 'blue' },
];

/** Full Tailwind class names per colour (dynamic class names are not picked up by Tailwind). */
export const SERVICE_COLORS = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
  red: { bg: 'bg-red-100', text: 'text-red-600' },
  green: { bg: 'bg-green-100', text: 'text-green-600' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
};
