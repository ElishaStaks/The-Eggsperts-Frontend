export interface ProductProps {
  handle: string;
  name: string;
  image: string;
  description?: string;
  type: string;
  variants: ProductVariantProps[];
}

export interface ProductVariantProps {
  name: string;
  price: number;
}

export interface ProductListProps {
  filters: string[];
  onFilterIconClick: () => void;
}

export interface MapProps {
  lat: number;
  lng: number;
}

export type FilterProps = {
  onFilterChange: (selectedFilters: string[]) => void;
};

export type FilterType = {
  name: string;
  options: { name: string }[];
};

export type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  border?: boolean;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
};
