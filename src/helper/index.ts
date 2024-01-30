import { PRODUCTS } from '@/constants';
import type { ProductProps } from '@/types';

export const getProductByHandle = (
  handle: string,
): ProductProps | undefined => {
  return PRODUCTS.find((product) => product.handle === handle);
};
