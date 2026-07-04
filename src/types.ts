/**
 * SJM Joinery Type Definitions
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  iconName: string; // Used to dynamically map Lucide icons
  details: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  date: string;
  projectType: string;
}

export interface QuoteRequest {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  details: string;
  location: string;
}

export interface ContactMessage {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
