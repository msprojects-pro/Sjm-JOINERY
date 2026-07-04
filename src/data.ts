/**
 * SJM Joinery - Premium Business Data & Content
 */
import { ServiceItem, GalleryItem, TestimonialItem } from './types';

export const BUSINESS_INFO = {
  name: 'SJM Joinery',
  tagline: 'Time-served joiner crafting bespoke furniture and home improvements.',
  description: 'Covering Hull & East Yorkshire. Specialising in high-quality bespoke joinery and home improvements.',
  location: 'Hull, East Yorkshire, United Kingdom',
  phone: '+44 7944 350735',
  phoneDisplay: '07944 350735',
  email: 'info@sjmjoineryhull.co.uk', // Professional email placeholder
  instagram: 'sjm_joinery',
  instagramUrl: 'https://instagram.com/sjm_joinery',
  hours: 'Mon - Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 2:00 PM',
  experience: 'Time-Served Craftsman'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'bespoke-furniture',
    title: 'Bespoke Furniture & Joinery',
    shortDescription: 'Custom solid wood pieces individually designed and handcrafted for your home.',
    description: 'We design and craft bespoke, beautiful, and functional freestanding furniture that fits your space, style, and functional needs. Every piece is handcrafted using traditional joinery methods and premium grade timber.',
    iconName: 'Hammer',
    details: [
      'Solid oak dining tables & custom benches',
      'Handcrafted credenzas, consoles, and dressers',
      'Bespoke bookcases and shelving units',
      'Premium timber selection (Oak, Walnut, Ash, Pine)',
      'Traditional mortise and tenon joinery'
    ]
  },
  {
    id: 'kitchens-wardrobes',
    title: 'Kitchens & Built-in Wardrobes',
    shortDescription: 'Tailored fitted wardrobes and luxury kitchens designed around your daily life.',
    description: 'Maximise your space with luxury custom-designed kitchens and masterfully built-in wardrobes. From layout optimization to premium hardware integration, we deliver breathtaking results.',
    iconName: 'Layout',
    details: [
      'Full bespoke kitchen design & precision fitting',
      'Fitted master bedroom built-in wardrobes',
      'Walk-in wardrobes & integrated dressing rooms',
      'Premium soft-close mechanisms & intelligent storage',
      'Custom cabinet front styles and finishes'
    ]
  },
  {
    id: 'media-walls',
    title: 'Media Walls & Feature Walls',
    shortDescription: 'Stunning accent installations combining audio-visual systems with luxury joinery.',
    description: 'Transform your living room with a premium media or feature wall. We integrate sound systems, ambient LED lighting, and fireplaces into elegant panelled frameworks for a modern visual focus.',
    iconName: 'Tv',
    details: [
      'Custom TV recessing with hidden cable management',
      'Integrated floating shelves & display cabinetry',
      'Slat-wall panelling & dynamic LED lighting backdrops',
      'Bio-ethanol or electric fireplace integration',
      'Sleek, modern minimalist finishes'
    ]
  },
  {
    id: 'staircases',
    title: 'Staircases & Banisters',
    shortDescription: 'Architectural stairs and elegant balustrades crafted to make a bold statement.',
    description: 'A staircase is a central focal point of any home. We specialise in full staircase renovations, replacing worn parts with luxury oak, sleek metal spindles, or contemporary glass balustrades.',
    iconName: 'TrendingUp',
    details: [
      'Complete staircase renovations and replacements',
      'Oak, ash, and softwood timber elements',
      'Contemporary glass panel balustrades for open light',
      'Bespoke crafted banisters and under-stair storage',
      'Expert structural carpentry'
    ]
  },
  {
    id: 'doors-windows',
    title: 'Doors, Windows & Panelling',
    shortDescription: 'High-quality internal and external door hanging, casement windows, and wall panelling.',
    description: 'Add depth, insulation, and architectural character to your property. We hang premium internal/external doors, install custom casing, and craft classic Shaker or Georgian wall panelling.',
    iconName: 'DoorClosed',
    details: [
      'Internal & external door hanging and custom thresholds',
      'Traditional Shaker, Georgian, or Edwardian wall panelling',
      'Custom window frame restoration and fitting',
      'Premium lock, hinge, and handle ironmongery',
      'Crisp, masterfully aligned trim and architraves'
    ]
  },
  {
    id: 'custom-storage',
    title: 'Custom Storage Solutions',
    shortDescription: 'Smart, space-saving joinery engineered to fit awkward alcoves and spaces.',
    description: 'No space is too awkward. We engineer bespoke storage solutions for under-stairs configurations, sloped loft ceilings, and alcoves that standard flat-pack furniture cannot fit.',
    iconName: 'Grid',
    details: [
      'Under-stairs multi-drawer storage pull-outs',
      'Alcove shelving units with integrated cupboards',
      'Loft conversion fitted wardrobes for sloped ceilings',
      'Boot room seating lockers and utility cabinets',
      'Custom heavy-duty garage & workshop shelving'
    ]
  },
  {
    id: 'home-improvements',
    title: 'Home Improvements & Renovations',
    shortDescription: 'Comprehensive home upgrades completed to an impeccable professional standard.',
    description: 'From luxury flooring installations to full room restorations, we manage premium home improvement projects. We provide complete joinery support for refurbishments across East Yorkshire.',
    iconName: 'Home',
    details: [
      'Premium solid wood & luxury laminate flooring',
      'Skirting board, architrave, and ceiling trim replacements',
      'Loft boarding, hatches, and timber ladder installations',
      'Full room or commercial space fit-outs',
      'Liaising with property developers and architects'
    ]
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-kitchen',
    title: 'Bespoke Premium Kitchen',
    category: 'Kitchens',
    imageUrl: '/images/sjm_hero_kitchen.jpg',
    description: 'Luxury dark-oak cabinet fronts, solid white countertops, and custom built-in appliances with warm hidden lighting.'
  },
  {
    id: 'gal-media',
    title: 'Minimalist Media Feature Wall',
    category: 'Media Walls',
    imageUrl: '/images/sjm_media_wall.jpg',
    description: 'A custom black-stained wood feature wall with backlit LED shelving, floating lower cabinets, and seamless TV mount.'
  },
  {
    id: 'gal-staircase',
    title: 'Oak & Glass Staircase Refurbishment',
    category: 'Staircases',
    imageUrl: '/images/sjm_staircase.jpg',
    description: 'Full timber transformation utilising premium solid oak steps and handrails paired with modern tempered glass panels.'
  },
  {
    id: 'gal-wardrobe',
    title: 'Bespoke Fitted Bedroom Wardrobes',
    category: 'Built-in Storage',
    imageUrl: '/images/sjm_wardrobes.jpg',
    description: 'Sleek floor-to-ceiling built-in master wardrobes with integrated soft-close drawers and custom interior organizers.'
  },
  {
    id: 'gal-table',
    title: 'Handcrafted Oak Dining Table',
    category: 'Bespoke Furniture',
    imageUrl: '/images/sjm_furniture.jpg',
    description: 'A gorgeous, heavy-duty custom dining table built from local solid English oak, finished in natural protective oils.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'James Harrison',
    location: 'Swanland, East Yorkshire',
    quote: 'SJM Joinery did an absolutely outstanding job on our custom media wall and under-stairs storage. The attention to detail is remarkable, and the finish is impeccable. Truly a time-served professional who takes immense pride in his work.',
    rating: 5,
    date: 'May 2026',
    projectType: 'Media Wall & Storage'
  },
  {
    id: 'test-2',
    name: 'Sarah Thompson',
    location: 'Beverley, East Yorkshire',
    quote: 'We had SJM Joinery replace our entire staircase with solid oak and modern glass panels. It has completely transformed our hallway. Elegant, sturdy, and completed exactly on budget. We could not be happier!',
    rating: 5,
    date: 'April 2026',
    projectType: 'Staircase Renovation'
  },
  {
    id: 'test-3',
    name: 'Mark & Emily Croft',
    location: 'Anlaby, Hull',
    quote: 'From the first consultation to the final cleanup, SJM Joinery was professional, polite, and clean. He designed and built custom wardrobes in our bedroom with awkward sloped ceilings. They fit beautifully and look stunning.',
    rating: 5,
    date: 'June 2026',
    projectType: 'Fitted Bedroom Wardrobes'
  },
  {
    id: 'test-4',
    name: 'Rebecca Davies',
    location: 'Cottingham, Hull',
    quote: 'He crafted a bespoke solid oak dining table for us that is now the centerpiece of our home. It feels incredibly solid and beautifully finished. SJM Joinery is definitely our go-to joiner for all home improvements.',
    rating: 5,
    date: 'March 2026',
    projectType: 'Bespoke Oak Table'
  }
];
