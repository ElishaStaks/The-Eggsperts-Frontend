/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';

import Button from '@/components/Button';
import { getProductByHandle } from '@/helper';
import type { ProductVariantProps } from '@/types';

const Product = () => {
  const { handle } = useParams();
  const router = useRouter();

  // Fetch product data based on the slug
  const product = getProductByHandle(handle as string);
  const [selectedVariant, setSelectedVariant] = useState<
    ProductVariantProps | undefined
  >(product?.variants[0]);

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleVariantClick = (variant: ProductVariantProps) => {
    setSelectedVariant(variant);
  };

  const handleGoBackClick = () => {
    router.push(`/products`);
  };

  return (
    <section className="relative mx-auto bg-gray-100">
      <div className="max-container padding-container py-4 md:py-[2.5rem] lg:py-[3.5rem]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2 lg:gap-12 2xl:gap-16">
          <div className="col-span-1">
            <h2 className="mb-4 text-2xl font-bold md:hidden md:text-3xl lg:hidden lg:text-4xl">
              {product.name}
            </h2>
            <Image
              src={product.image}
              alt={product.handle}
              width={200}
              height={200}
              className="w-full rounded-sm object-cover object-center"
              loading="eager"
              sizes="(max-width: 640px) 40vw, (max-width: 768px) 60vw, 1200px"
            />
          </div>
          <div className="col-span-1">
            <h2 className="mb-4 hidden text-2xl font-bold md:block md:text-3xl lg:block lg:text-4xl">
              {product.name}
            </h2>
            <p className="mb-4 text-gray-600">{product.description}</p>
            <h3 className="mb-2 text-lg font-semibold md:text-xl lg:text-2xl">
              Size: {selectedVariant?.name}
            </h3>
            <div className="mb-6">
              {product.variants.map((variant: ProductVariantProps) => (
                <div
                  key={variant.name}
                  onClick={() => handleVariantClick(variant)}
                  className="mb-2 mr-2 inline-block cursor-pointer rounded-full border-2 border-gray-600 p-2"
                >
                  <span
                    className={`${
                      variant === selectedVariant
                        ? 'font-bold text-yellow-500'
                        : 'text-gray-700'
                    }`}
                  >
                    {variant.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="mb-4 text-lg font-semibold text-gray-600 md:text-xl lg:text-2xl">
              {product.type === 'Honey' &&
                `$${selectedVariant?.price?.toFixed(2)}`}
            </p>
            <div className="flex flex-col space-y-3">
              <Button
                type="button"
                title="Contact Us"
                variant="btn_yellow"
                className="w-full"
                href="/#contact"
              />
              <Button
                type="button"
                title="Go Back"
                variant="btn_dark_green"
                onClick={handleGoBackClick}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
