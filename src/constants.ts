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
    id: '0',
    image: 'https://i.ibb.co/9knMNHNv/carport-2.jpg',
    title: 'Custom Steel Carport',
    category: 'Carports',
  },
  {
    id: '1',
    image: 'https://i.ibb.co/0jhZ5dwK/Whats-App-Image-2026-06-08-at-18-20-01-2.jpg',
    title: 'Double Residential Carport',
    category: 'Carports',
  },
  {
    id: '2',
    image: 'https://i.ibb.co/9HF67MG3/Whats-App-Image-2026-06-08-at-18-20-01-1.jpg',
    title: 'Roofing & Maintenance',
    category: 'Roofing',
  },
  {
    id: '3',
    image: 'https://i.ibb.co/hJW429rm/Whats-App-Image-2026-06-08-at-18-20-01.jpg',
    title: 'Modern Steel Structure',
    category: 'Steel Structures',
  },
  {
    id: '4',
    image: 'https://i.ibb.co/b5VTMBJc/Whats-App-Image-2026-06-08-at-18-20-00-1.jpg',
    title: 'Professional Painting',
    category: 'Painting',
  },
  {
    id: '5',
    image: 'https://i.ibb.co/rRKL1K1m/Whats-App-Image-2026-06-08-at-18-20-00.jpg',
    title: 'Steel Framework',
    category: 'Carports',
  },
  {
    id: '6',
    image: 'https://i.ibb.co/rRFmXx6p/Whats-App-Image-2026-06-08-at-18-19-59-1.jpg',
    title: 'Shadeport Installation',
    category: 'Shadeports',
  },
  {
    id: '7',
    image: 'https://i.ibb.co/b5BVNjDV/Whats-App-Image-2026-06-08-at-18-19-59.jpg',
    title: 'Industrial Steel Support',
    category: 'Steel Structures',
  },
  {
    id: '8',
    image: 'https://i.ibb.co/ksVTDTXd/Whats-App-Image-2026-06-08-at-18-19-57-1.jpg',
    title: 'Commercial Shadeport',
    category: 'Shadeports',
  },
  {
    id: '9',
    image: 'https://i.ibb.co/yBXpwCnH/Whats-App-Image-2026-06-08-at-18-19-57.jpg',
    title: 'Triple Bay Carport',
    category: 'Carports',
  },
  {
    id: '10',
    image: 'https://i.ibb.co/5hYHd5gD/Whats-App-Image-2026-06-08-at-18-19-56-1.jpg',
    title: 'Galvanized Steel Carport',
    category: 'Carports',
  },
  {
    id: '11',
    image: 'https://i.ibb.co/7xmC9ZZ2/Whats-App-Image-2026-06-08-at-18-19-56.jpg',
    title: 'Residential Protection',
    category: 'Carports',
  },
];

export const WHY_CHOOSE_US = [
  'Quality Workmanship',
  'Affordable Pricing',
  'Reliable Service',
  'Experienced Team',
  'Free Quotations',
  'Customer Satisfaction Guaranteed',
];
