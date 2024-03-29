import type { FeatureItem } from '@/components/Features';

import type { FilterType, ProductProps } from '../types';

// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/about', key: 'about', label: 'About Us' },
  { href: '/#contact', key: 'contact', label: 'Contact' },
];

// TEAM SECTION
export const TEAM = [
  {
    name: 'Daniel Perogannis',
    image: '/products/empty.webp',
  },
  {
    name: 'Sophie Perogannis',
    image: '/products/empty.webp',
  },
];

// MISSION VALUES SECTION
export const MISSION_VALUES = [
  {
    title: 'Commitment to Quality',
    icon: '/svgs/quality.svg',
    alt: 'The eggsperts and their commitment to quality badge icon',
    description:
      'Quality is at the heart of everything we do. From the selection of our suppliers to the careful handling of our products, we are dedicated to maintaining the highest standards throughout every step of the process. We believe that our customers deserve nothing less than the best.',
  },
  {
    title: 'Transparency and Integrity',
    icon: '/svgs/swords.svg',
    alt: 'The eggsperts and their transparency and integrity badge icon',
    description:
      "Transparency is a core value at The Eggsperts. We believe in providing our customers with complete information about our products, sourcing practices, and business operations. It's this commitment to openness and integrity that sets us apart and builds trust with our valued customers.",
  },
  {
    title: 'Customer Satisfaction',
    icon: '/svgs/happy.svg',
    alt: 'The eggsperts and their priority for customer satisfaction',
    description:
      'Our customers are at the center of everything we do. We value your feedback and continuously work towards enhancing your experience with The Eggsperts. Your satisfaction is our priority, and we are committed to ensuring that every interaction with us leaves you delighted.',
  },
];

// FEATURES SECTION
export const FEATURES: FeatureItem[] = [
  {
    title: 'Locally sourced ingredients',
    icon: '/svgs/farm.svg',
    alt: 'Locally sourced ingredients barn yard icon',
    description:
      'From the farm to your table, enjoy the goodness of locally procured, premium-quality ingredients.',
  },
  {
    title: 'Farm fresh eggs',
    icon: '/svgs/eggs.svg',
    alt: 'Farm fresh eggs icon',
    description:
      'Indulge in the richness of eggs laid with care, ensuring each bite is a wholesome delight.',
  },
  {
    title: 'Delicious and nutrious',
    icon: '/svgs/honey_jar.svg',
    alt: 'Sweet honey in a tub icon',
    description:
      'Explore our range of delicious honey, packed with natural sweetness and nutritional benefits.',
  },
];

export const IMAGES_GALLERY = [
  {
    image: '/egg_bowl_1.webp',
    key: 'image-1',
  },
  {
    image: '/egg_bowl_2.webp',
    key: 'image-2',
  },
  {
    image: '/egg_bowl_3.webp',
    key: 'image-2',
  },
  {
    image: '/egg_bowl_4.webp',
    key: 'image-2',
  },
];

// PRODUCT RANGE SECTION
export const PRODUCT_RANGE = [
  {
    title: 'Eggs',
    image: '/stall_3.webp',
    selectFilter: 'Eggs',
  },
  {
    title: 'Honey',
    image: '/stall_2.webp',
    selectFilter: 'Honey',
  },
];

export const PRODUCTS: ProductProps[] = [
  {
    handle: '600-caged-trays',
    name: '600 Caged Trays',
    image: '/products/600_cage_trays.webp',
    description: '180 large fresh caged eggs in filler trays.',
    type: 'Eggs',
    variants: [
      {
        name: '600g',
        price: 55,
      },
    ],
  },
  {
    handle: '700-caged-trays',
    name: '700 Caged Trays',
    image: '/products/700_cage_trays.webp',
    description: '180 extra large fresh caged eggs in filler trays.',
    type: 'Eggs',
    variants: [
      {
        name: '700g',
        price: 60,
      },
    ],
  },
  {
    handle: '70-plus-caged-trays',
    name: '70+ Caged Trays',
    image: '/products/empty.webp',
    description:
      '120 king size fresh caged eggs in filler trays. Stocking density for these eggs is 1500 hens per hectare.',
    type: 'Eggs',
    variants: [
      {
        name: 'King Size',
        price: 55,
      },
    ],
  },
  {
    handle: '800-caged-trays',
    name: '800 Caged Trays',
    image: '/products/800_cage_trays.webp',
    description: '180 jumbo fresh caged eggs in filler trays.',
    type: 'Eggs',
    variants: [
      {
        name: '800g',
        price: 67,
      },
    ],
  },
  {
    handle: '700-free-range-trays',
    name: '700 Free Range Trays',
    image: '/products/fr_trays.webp',
    description:
      '180 extra large fresh free range eggs in filler trays. Stocking density for these eggs is 1500 hens per hectare.',
    type: 'Eggs',
    variants: [
      {
        name: '700g',
        price: 73,
      },
    ],
  },
  {
    handle: '75-plus-free-range-trays',
    name: '75+ Free Range Trays',
    image: '/products/75+_trays.webp',
    description:
      '120 king size fresh free range eggs in filler trays. Stocking density for these eggs is 1500 hens per hectare.',
    type: 'Eggs',
    variants: [
      {
        name: 'King Size',
        price: 60,
      },
    ],
  },
  {
    handle: '700-caged-dozens',
    name: '700 Caged Dozens',
    image: '/products/700_cage_doz.webp',
    description: '180 extra large fresh caged eggs. 15 dozens per box.',
    type: 'Eggs',
    variants: [
      {
        name: '700g',
        price: 60,
      },
    ],
  },
  {
    handle: '700-golden-yolk-trays',
    name: '700 Golden Yolk Trays',
    image: '/products/700_gy_trays.webp',
    description: '180 extra large fresh free range eggs in filler trays.',
    type: 'Eggs',
    variants: [
      {
        name: '700g',
        price: 60,
      },
    ],
  },
  {
    handle: '800-caged-dozens',
    name: '800 Caged Dozens',
    image: '/products/800_cage_doz.webp',
    description: '180 jumbo fresh caged eggs. 15 dozens per box.',
    type: 'Eggs',
    variants: [
      {
        name: '800g',
        price: 67,
      },
    ],
  },
  {
    handle: '600-organic-trays',
    name: '600 Organic Trays',
    image: '/products/600_organic_trays.webp',
    description: '180 large fresh free range organic eggs.',
    type: 'Eggs',
    variants: [
      {
        name: '600g',
        price: 76,
      },
    ],
  },
  {
    handle: '600-golden-yolk-dozens',
    name: '600 Golden Yolk Dozens',
    image: '/products/600_golden_yolk.webp',
    description:
      '180 large fresh free range organic eggs. 15 dozens per box. Stocking density for these eggs is 1000 hens per hectare.',
    type: 'Eggs',
    variants: [
      {
        name: '600g',
        price: 67,
      },
    ],
  },
  {
    handle: '700-golden-yolk-dozens',
    name: '700 Golden Yolk Dozens',
    image: '/products/700_golden_yolk.webp',
    description:
      '180 extra large fresh free range eggs. 15 dozens per box. Stocking density for these eggs is 1000 hens per hectare.',
    type: 'Eggs',
    variants: [
      {
        name: '700g',
        price: 74,
      },
    ],
  },
  {
    handle: '850-free-range',
    name: '850 Free Range',
    image: '/products/850.webp',
    description:
      '144 king size fresh free range eggs. 12 dozens per box. Stocking density for these eggs is 1500 hens per hectare.',
    type: 'Eggs',
    variants: [
      {
        name: '850g',
        price: 67,
      },
    ],
  },
  {
    handle: 'henzen',
    name: 'Henzen',
    image: '/products/henzen.webp',
    description:
      '180 jumbo fresh free range organic eggs. 15 dozens per box. Stocking density for these eggs is 50 hens per hectare.',
    type: 'Eggs',
    variants: [
      {
        name: '800g',
        price: 128,
      },
    ],
  },
  {
    handle: 'joannes',
    name: "Joanne's",
    image: '/products/joannes.webp',
    description:
      '180 jumbo fresh grain fed, barn laid organic eggs. 15 dozens per box.',
    type: 'Eggs',
    variants: [
      {
        name: '800g',
        price: 55,
      },
    ],
  },
  {
    handle: 'cracking-eggs',
    name: 'Cracking Eggs',
    image: '/products/cracking.webp',
    description:
      '180 jumbo fresh free range eggs. 15 dozens per box. Stocking density for these eggs is 25 hens per hectare and are pastured raised.',
    type: 'Eggs',
    variants: [
      {
        name: '800g',
        price: 55,
      },
    ],
  },
  {
    handle: 'earth-eggs',
    name: 'Earth Eggs',
    image: '/products/earth.webp',
    description:
      '180 extra large fresh free range eggs. 15 dozens per box. Stocking density for these eggs is 145 hens per hectare. These eggs are pastured raised, soy free and hormone free eggs.',
    type: 'Eggs',
    variants: [
      {
        name: '700g',
        price: 115,
      },
    ],
  },
  {
    handle: 'honest-eggs',
    name: 'Honest Eggs',
    image: '/products/honest.webp',
    description:
      '180 jumbo fresh free range eggs. 15 dozens per box. Stocking density for these eggs is less than 30 hens per hectare and are pastured raised.',
    type: 'Eggs',
    variants: [
      {
        name: '800g',
        price: 145,
      },
    ],
  },
  {
    handle: 'kiss-n-run',
    name: 'Kiss n Run',
    image: '/products/kiss_n_run.webp',
    description:
      '180 jumbo fresh free range eggs. 15 dozens per box. Stocking density for these eggs is 30 hens per hectare and are pastured raised.',
    type: 'Eggs',
    variants: [
      {
        name: '800g',
        price: 130,
      },
    ],
  },
  {
    handle: 'chook-at-the-rooke',
    name: 'Chook At The Rooke',
    image: '/products/chooks_at_the_rooks.webp',
    description:
      '180 jumbo fresh free range eggs. 15 dozens per box. Stocking density for these eggs is 94 hens per hectare and are pastured raised.',
    type: 'Eggs',
    variants: [
      {
        name: '800g',
        price: 121,
      },
    ],
  },
  {
    handle: 'milawa',
    name: 'Milawa',
    image: '/products/800_milawa_doz.webp',
    description:
      '180 jumbo fresh organic free range eggs. 15 dozens per box. These eggs are pastured raised.',
    type: 'Eggs',
    variants: [
      {
        name: '800g',
        price: 121,
      },
    ],
  },
  {
    handle: 'smoked-eggs',
    name: 'Smoked Eggs',
    image: '/products/smoked_eggs.webp',
    description:
      '6 fresh free range smoked eggs. Half dozen pack. Stocking density for these eggs is 10,000 hens per hectare. Eggs have been smoked in a smoker.',
    type: 'Eggs',
    variants: [
      {
        name: '300g',
        price: 5,
      },
    ],
  },
  {
    handle: 'quail-eggs',
    name: 'Quail Eggs',
    image: '/products/empty.webp',
    description:
      '150 fresh free range quail eggs. 15 per punnet. Minimum of 10 punnets.',
    type: 'Eggs',
    variants: [
      {
        name: '300g',
        price: 47.5,
      },
    ],
  },
  {
    handle: 'rl-stevens-leatherwood',
    name: 'R.L Stevens Leatherwood',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: '500g',
        price: 11.5,
      },
      {
        name: '1kg',
        price: 22.0,
      },
      {
        name: '1.5kg',
        price: 28.0,
      },
      {
        name: '3kg',
        price: 55.0,
      },
      {
        name: 'Squeeze',
        price: 9.0,
      },
      {
        name: 'Twin',
        price: 8.0,
      },
    ],
  },
  {
    handle: 'ambrosia-organic',
    name: 'Ambrosia Organic',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: '500g',
        price: 13.5,
      },
      {
        name: '1kg',
        price: 16.0,
      },
    ],
  },
  {
    handle: 'berringa-eucalyptus',
    name: 'Berringa Eucalyptus',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: '1kg',
        price: 22.0,
      },
    ],
  },
  {
    handle: 'my-dads-honey-organic',
    name: 'My Dads Honey Organic',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: '500g',
        price: 12.5,
      },
      {
        name: '1kg',
        price: 18.0,
      },
    ],
  },
  {
    handle: 'raw-and-unfiltered',
    name: 'Raw and Unfiltered',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: '500g',
        price: 10.5,
      },
      {
        name: '1kg',
        price: 16.0,
      },
    ],
  },
  {
    handle: 'archibald',
    name: 'Archibald',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: 'Squeeze',
        price: 9.0,
      },
    ],
  },
  {
    handle: 'warral',
    name: 'Warral',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: '500g',
        price: 8.0,
      },
      {
        name: '1kg',
        price: 14.5,
      },
      {
        name: '3kg',
        price: 40,
      },
      {
        name: 'Squeeze',
        price: 8.0,
      },
    ],
  },
  {
    handle: 'robinsons',
    name: 'Robinsons',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: '1kg',
        price: 14.0,
      },
      {
        name: '3kg',
        price: 40,
      },
      {
        name: 'Squeeze',
        price: 8.0,
      },
    ],
  },
  {
    handle: 'honey-pops',
    name: 'Honey Pops',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: '1',
        price: 1.4,
      },
      {
        name: '5',
        price: 6.0,
      },
    ],
  },
  {
    handle: 'straws',
    name: 'Straws',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: '1',
        price: 0.4,
      },
      {
        name: '5',
        price: 2.0,
      },
    ],
  },
  {
    handle: 'dipper',
    name: 'Dipper',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: 'Dipper',
        price: 2.0,
      },
    ],
  },
  {
    handle: 'manuka-mgo-30-plus',
    name: 'Manuka MGO 30+',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: '1kg',
        price: 35.0,
      },
    ],
  },
  {
    handle: 'manuka-mgo-100-plus',
    name: 'Manuka MGO 100+',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: '500g',
        price: 25.5,
      },
      {
        name: 'Straws',
        price: 10.0,
      },
    ],
  },
  {
    handle: 'manuka-mgo-263-plus',
    name: 'Manuka MGO 263+',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: '500g',
        price: 40.0,
      },
    ],
  },
  {
    handle: 'manuka-mgo-400-plus',
    name: 'Manuka MGO 400+',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: '100g',
        price: 28.0,
      },
    ],
  },
  {
    handle: 'manuka-mgo-300-plus',
    name: 'Manuka MGO 300+',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: 'straws',
        price: 14.0,
      },
    ],
  },
  {
    handle: 'manuka-mgo-900-plus',
    name: 'Manuka MGO 900+',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: '500g',
        price: 140.0,
      },
    ],
  },
  {
    handle: 'marri-honey',
    name: 'Marri Honey',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: 'Jarrah',
        price: 24.0,
      },
      {
        name: 'Eucalyptus 500g',
        price: 9.0,
      },
      {
        name: 'Macadamia 500g',
        price: 9.0,
      },
      {
        name: 'Raw 500g',
        price: 9.0,
      },
      {
        name: 'Orange Blossom 1kg',
        price: 16.0,
      },
      {
        name: 'Eucalyptus 1kg',
        price: 16.0,
      },
      {
        name: 'Raw 1kg',
        price: 17.0,
      },
      {
        name: 'Christmas Malle',
        price: 16.0,
      },
      {
        name: 'Iron Bark 1kg',
        price: 16.0,
      },
      {
        name: 'Red Gum 1kg',
        price: 16.0,
      },
      {
        name: 'Orange Blossom 3kg',
        price: 15.0,
      },
      {
        name: 'Eucalyptus 3kg',
        price: 16.0,
      },
      {
        name: 'Raw 3kg',
        price: 17.0,
      },
      {
        name: 'Christmas Malle 3kg',
        price: 15.0,
      },
      {
        name: 'Red Gum 3kg',
        price: 15.0,
      },
    ],
  },
  {
    handle: 'walkabout',
    name: 'Walkabout',
    image: '/products/empty.webp',
    description: '',
    type: 'Honey',
    variants: [
      {
        name: 'Bloody Good',
        price: 10.0,
      },
      {
        name: 'Raw',
        price: 10.0,
      },
    ],
  },
];

// PRODUCT FILTER TYPES
export const FILTER_TYPES: FilterType[] = [
  {
    name: 'Product Types',
    options: [{ name: 'Eggs' }, { name: 'Honey' }],
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Products',
    links: [
      { label: 'Free Range', href: null },
      { label: 'Organic Free Range', href: null },
      { label: 'Cage', href: null },
      { label: 'Cage Free', href: null },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'About The Eggsperts', href: '/about' },
      { label: 'Contact Us', href: '/#contact' },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Get in touch',
  links: [
    {
      label: 'Location',
      value: 'Queen Victoria Market',
      href: '',
    },
    { label: 'Phone', value: '0433 696 596', href: '' },
    { label: 'Email', value: 'Pmnortherntrades@gmail.com', href: '' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    { icon: '/svgs/facebook.svg', href: '/' },
    { icon: '/svgs/instagram.svg', href: '/' },
    { icon: '/svgs/twitter.svg', href: '/' },
  ],
};
