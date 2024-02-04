/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useFilterContext } from '@/contexts/FilterContext';

import { PRODUCT_RANGE } from '../constants';

type ProductItem = {
  title: string;
  image: string;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const ProductItem = ({ title, image }: ProductItem) => {
  const { updateFilters } = useFilterContext();

  return (
    <li className="mx-2 my-4">
      <div
        className="product-item-wrapper"
        onClick={() => {
          updateFilters([title]);
        }}
      >
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
            loading="eager"
          />
        </div>
        <div className="product-item-title-wrapper">
          <h2 className="product-item-title">{title}</h2>
        </div>
      </div>
    </li>
  );
};

const ProductRange = () => {
  return (
    <section className="product-range-section-wrapper">
      <div className="max-container padding-container relative w-full justify-center">
        <div className="z-20 flex w-full flex-col lg:w-[100%]">
          <div className="relative">
            <Image
              src="/eggs_title_icon.png"
              alt="Basket of farm fresh eggs"
              width={50}
              height={50}
              className="title-icon left-[5px]"
              loading="eager"
            />
            <h2 className="bold-40 lg:bold-64">Our Product Range</h2>
          </div>
          <ul className="product-range-items-wrapper">
            {PRODUCT_RANGE.map((product) => (
              <Link key={product.title} href="/products?" className="w-button">
                <ProductItem title={product.title} image={product.image} />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
