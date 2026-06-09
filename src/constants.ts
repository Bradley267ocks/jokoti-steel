import { Service, GalleryItem, NavItem } from './types';

export const COMPANY_INFO = {
  name: 'Jokoti Steel Carports & Shadeports',
  phone: '061 823 0129',
  email: 'stewartjokoty87@gmail.com',
  location: 'Pretonia North, Akasia, Gauteng, South Africa',
  whatsapp: '061 823 0129',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'carports',
    title: 'Steel Carports',
    description: 'Custom-designed steel carports that provide durable protection for vehicles against sun, rain, and hail.',
    icon: 'Car',
  },
  {
    id: 'shadeports',
    title: 'Shadeports',
    description: 'Professional shadeport installations for homes, businesses, schools, and parking areas.',
    icon: 'Sun',
  },
  {
    id: 'roofing',
    title: 'Roofing Solutions',
    description: 'New roof installations, roof extensions, roof repairs, and steel roofing structures.',
    icon: 'Home',
  },
  {
    id: 'painting',
    title: 'Painting Services',
    description: 'Interior and exterior painting for residential and commercial properties.',
    icon: 'Paintbrush',
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: '1',
    image: '/src/assets/images/modern_steel_carport_1781019791518.png',
    title: 'Modern Double Carport',
    category: 'Carports',
  },
  {
    id: '2',
    image: '/src/assets/images/residential_shadeport_1781019806040.png',
    title: 'Residential Shadeport',
    category: 'Shadeports',
  },
  {
    id: '3',
    image: '/src/assets/images/steel_roofing_structure_1781019820664.png',
    title: 'Roof Structure Installation',
    category: 'Roofing',
  },
  // Add more placeholders or if I had more generated
];

export const WHY_CHOOSE_US = [
  'Quality Workmanship',
  'Affordable Pricing',
  'Reliable Service',
  'Experienced Team',
  'Free Quotations',
  'Customer Satisfaction Guaranteed',
];
