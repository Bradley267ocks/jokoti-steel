export interface QuoteData {
  service: string;
  propertyType: string;
  dimensions: string;
  requirements: string;
  name: string;
  phone: string;
  email: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
}
