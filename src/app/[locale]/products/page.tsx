'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import ProductFilter from '@/components/ProductFilter';
import ProductList from '@/components/ProductList';
import { useBodyOverflow } from '@/hooks/BodyOverflow';

const Products = () => {
  const [filters, setFilters] = useState<string[]>([]);
  const [showSidebar, setShowSidebar] = useState(false);

  useBodyOverflow(showSidebar);

  const handleFilterChange = (selectedFilters: string[]) => {
    setFilters(selectedFilters);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <section className="product-section-wrapper">
      <div className="product-wrapper">
        <div className="z-20 flex w-full flex-col lg:w-[100%]">
          <div className="relative">
            {/* Responsive sidebar for filters */}
            {showSidebar && (
              <div className="product-mobile-wrapper">
                <ProductFilter onFilterChange={handleFilterChange} />
                <div className="flex flex-1 justify-center">
                  <Button
                    className="w-button mt-4"
                    href="/products"
                    type="button"
                    title="Cancel"
                    variant="btn_dark_green"
                    onClick={toggleSidebar}
                  />
                </div>
              </div>
            )}
            {/* Display main filter component on lg screens */}
            <div className="flex">
              <div className="hidden lg:flex" style={{ minWidth: '300px' }}>
                <ProductFilter onFilterChange={handleFilterChange} />
              </div>
              <ProductList
                filters={filters}
                onFilterIconClick={toggleSidebar}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
