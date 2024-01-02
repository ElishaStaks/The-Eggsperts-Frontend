import type { FilterType, ProductCardProps } from '../types';

// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/#about', key: 'about', label: 'About' },
  { href: '/#contact', key: 'contact', label: 'Contact' },
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Locally sourced ingredients',
    icon: '/assets/svgs/farm.svg',
    variant: 'green',
    description:
      'From the farm to your table, enjoy the goodness of locally procured, premium-quality ingredients.',
  },
  {
    title: 'Farm fresh eggs',
    icon: '/assets/svgs/eggs.svg',
    variant: 'green',
    description:
      'Indulge in the richness of eggs laid with care, ensuring each bite is a wholesome delight.',
  },
  {
    title: 'Delicious and nutrious',
    icon: '/assets/svgs/honey_jar.svg',
    variant: 'green',
    description:
      'Explore our range of delicious honey, packed with natural sweetness and nutritional benefits.',
  },
];

// PRODUCT RANGE SECTION
export const PRODUCT_RANGE = [
  {
    title: 'Eggs',
    image: '/assets/shop/stall_3.jpeg',
    selectFilter: 'Eggs',
  },
  {
    title: 'Honey',
    image: '/assets/shop/stall_2.jpeg',
    selectFilter: 'Honey',
  },
];

export const PRODUCTS: ProductCardProps[] = [
  {
    name: '600 Caged Trays',
    image: '/products/empty.jpg',
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
    name: '700 Caged Trays',
    image: '/products/empty.jpg',
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
    name: '70+ Caged Trays',
    image: '/products/empty.jpg',
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
    name: '800 Caged Trays',
    image: '/products/empty.jpg',
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
    name: '700 Free Range Trays',
    image: '/products/empty.jpg',
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
    name: '75+ Free Range Trays',
    image: '/products/empty.jpg',
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
    name: '700 Caged Dozens',
    image: '/products/700_caged_doz.jpg',
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
    name: '800 Caged Dozens',
    image: '/products/empty.jpg',
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
    name: '600 Golden Yolk',
    image: '/products/700_golden_yolk.jpg',
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
    name: '700 Golden Yolk',
    image: '/products/700_golden_yolk.jpg',
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
    name: '850 Free Range',
    image: '/products/850_sunrise.jpg',
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
    name: 'Henzen',
    image: '/products/henzen.jpg',
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
    name: "Joanne's",
    image: '/products/joannes.jpg',
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
    name: 'Cracking Eggs',
    image: '/products/empty.jpg',
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
    name: 'Earth Eggs',
    image: '/products/earth_eggs.jpg',
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
    name: 'Honest Eggs',
    image: '/products/honest_eggs.jpeg',
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
    name: 'Kiss n Run',
    image: '/products/kiss_n_run.jpg',
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
    name: 'Chook At The Rooke',
    image: '/products/chooks_at_the_rooks.jpg',
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
    name: 'Smoked Eggs',
    image: '/products/smoked_eggs.jpg',
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
    name: 'Quail Eggs',
    image: '/products/empty.jpg',
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
    name: 'R.L Stevens Leatherwood',
    image: '/products/empty.jpg',
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
    name: 'Ambrosia Organic',
    image: '/products/empty.jpg',
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
    name: 'Berringa Eucalyptus',
    image: '/products/empty.jpg',
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
    name: 'My Dads Honey Organic',
    image: '/products/empty.jpg',
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
    name: 'Raw and Unfiltered',
    image: '/products/empty.jpg',
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
    name: 'Archibald',
    image: '/products/empty.jpg',
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
    name: 'Warral',
    image: '/products/empty.jpg',
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
    name: 'Robinsons',
    image: '/products/empty.jpg',
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
    name: 'Honey Pops',
    image: '/products/empty.jpg',
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
    name: 'Straws',
    image: '/products/empty.jpg',
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
    name: 'Dipper',
    image: '/products/empty.jpg',
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
    name: 'Manuka MGO 30+',
    image: '/products/empty.jpg',
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
    name: 'Manuka MGO 100+',
    image: '/products/empty.jpg',
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
    name: 'Manuka MGO 263+',
    image: '/products/empty.jpg',
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
    name: 'Manuka MGO 400+',
    image: '/products/empty.jpg',
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
    name: 'Manuka MGO 300+',
    image: '/products/empty.jpg',
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
    name: 'Manuka MGO 900+',
    image: '/products/empty.jpg',
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
    name: 'Marri Honey',
    image: '/products/empty.jpg',
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
    name: 'Walkabout',
    image: '/products/empty.jpg',
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
      { label: 'About The Eggsperts', href: '/#about' },
      { label: 'Contact Us', href: '/#contact' },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Get in touch',
  links: [
    { label: 'Phone', value: '0433 696 596', href: '' },
    { label: 'Email', value: 'Pmnortherntrades@gmail.com', href: '' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    { icon: '/assets/svgs/facebook.svg', href: '/' },
    { icon: '/assets/svgs/instagram.svg', href: '/' },
    { icon: '/assets/svgs/twitter.svg', href: '/' },
  ],
};
