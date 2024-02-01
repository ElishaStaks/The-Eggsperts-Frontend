/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import Image from 'next/image';
import React from 'react';

import type { ProductProps } from '../types';

const ProductCard: React.FC<ProductProps> = ({
  handle,
  name,
  image,
  type,
  variants,
  onClick,
}) => {
  const getFirstVariantPrice = (): string => {
    if (variants && variants.length > 0) {
      return `$${variants[0]?.price.toFixed(2)}`;
    }
    return '$0.00'; // Default price if no variants
  };

  return (
    <div className="product-card-wrapper" onClick={() => onClick?.(handle)}>
      <div className="product-card-sub-wrapper">
        <div className="product-card-image-wrapper">
          <Image
            src={image}
            alt={name}
            className="product-card-image"
            width={2000}
            height={2000}
            loading="eager"
          />
        </div>
        <div className="product-card-content-wrapper">
          <h3
            className={`product-card-name ${type === 'Eggs' && 'text-center'}`}
          >
            {name}
          </h3>
          {type === 'Honey' && (
            <p className="product-card-price">{getFirstVariantPrice()}</p>
          )}
          <div className="grow" />
          <div className="product-card-contact">Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
