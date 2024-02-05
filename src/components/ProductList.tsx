import Image from 'next/image';
import { useState } from 'react';

import { PRODUCTS } from '../constants';
import type { ProductListProps } from '../types';
import Button from './Button';
import ProductCard from './ProductCard';

const productsPerPage = 15;
const productsPerLoadMore = 5;

const ProductList: React.FC<ProductListProps> = ({
  filters,
  onFilterIconClick,
}) => {
  const [displayedProducts, setDisplayedProducts] = useState(productsPerPage);

  const filteredProducts =
    filters.length > 0
      ? PRODUCTS.filter((product) => filters.includes(product.type))
      : PRODUCTS;

  const visibleProducts = filteredProducts.slice(0, displayedProducts);

  const handleLoadMore = () => {
    setDisplayedProducts((prev) => prev + productsPerLoadMore);
  };

  return (
    <div>
      <div className="product-list-available-text-wrapper">
        <div className="lg:hidden">
          <Image
            src="/assets/svgs/filter.svg"
            alt="The eggsperts yellow filter icon for mobile"
            width={50}
            height={50}
            onClick={onFilterIconClick}
          />
        </div>
        <p className="text-gray-700">
          {filteredProducts.length} products available
        </p>
        {/* Display filter icon for small and medium screens */}
      </div>

      <div className="product-list-card-wrapper">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.handle}
            handle={product.handle}
            name={product.name}
            image={product.image}
            type={product.type}
            variants={product.variants}
          />
        ))}
      </div>

      {displayedProducts < filteredProducts.length && (
        <>
          <div className="product-list-viewed-wrapper">
            <p>
              You have viewed {displayedProducts} of {filteredProducts.length}{' '}
              products
            </p>
          </div>
          <div className="product-list-load-button-wrapper">
            <Button
              type="button"
              title="Load More"
              variant="btn_dark_green"
              onClick={handleLoadMore}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
