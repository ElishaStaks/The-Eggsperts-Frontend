/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import Button from '@/components/Button';
import { useBodyOverflow } from '@/hooks/BodyOverflow';

import type { ProductModalProps, ProductVariantProps } from '../types';

const ProductModal: React.FC<ProductModalProps> = ({
  open,
  product,
  onClose,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<
    ProductVariantProps | undefined
  >(product?.variants[0]);
  const [containerDimensions, setContainerDimensions] = useState({
    scrollWidth: 0,
    clientWidth: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  // Use the custom hook to manage body overflow
  useBodyOverflow(open);

  const handleVariantClick = (variant: ProductVariantProps) => {
    setSelectedVariant(variant);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const width = containerDimensions.clientWidth;
      const newPosition =
        direction === 'left'
          ? containerRef.current.scrollLeft - width
          : containerRef.current.scrollLeft + width;

      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const updateContainerDimensions = () => {
      if (containerRef.current) {
        setContainerDimensions({
          scrollWidth: containerRef.current.scrollWidth,
          clientWidth: containerRef.current.clientWidth,
        });
      }
    };

    // Update dimensions on mount
    updateContainerDimensions();

    // Update dimensions on resize
    window.addEventListener('resize', updateContainerDimensions);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', updateContainerDimensions);
    };
  }, []);

  const renderVariants = () => {
    return (
      <div
        ref={containerRef}
        id="variantsContainer"
        className="flex overflow-x-hidden"
        style={{ WebkitOverflowScrolling: 'touch' }}
        onWheel={(e) => {
          e.preventDefault();
          if (containerRef.current) {
            containerRef.current.scrollLeft += e.deltaY;
          }
        }}
      >
        {product?.variants.map((variant: ProductVariantProps) => (
          <div
            key={variant.name}
            onClick={() => handleVariantClick(variant)}
            className="flex cursor-pointer items-center justify-center"
          >
            <span
              className={`break-word product-modal-variant-name ${
                variant === selectedVariant
                  ? 'text-yellow-500'
                  : 'text-gray-700'
              }`}
            >
              {variant.name}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const renderArrowButton = (direction: 'left' | 'right') => {
    return (
      <button
        type="button"
        className={`absolute h-full ${
          direction === 'left' ? 'left-0' : 'right-0'
        } top-1/2 -translate-y-1/2 bg-black bg-opacity-50 px-2 py-1`}
        onClick={() => handleScroll(direction)}
      >
        {direction === 'left' ? (
          <Image
            src="/assets/svgs/left_arrow.svg"
            alt="left_arrow"
            width={24}
            height={24}
          />
        ) : (
          <Image
            src="/assets/svgs/right_arrow.svg"
            alt="right_arrow"
            width={24}
            height={24}
          />
        )}
      </button>
    );
  };

  if (!product) {
    return null;
  }

  return (
    <>
      {open && (
        <div className="product-modal-bg bg-black bg-opacity-50">
          <div className="product-modal-wrapper">
            <Image
              src={product.image}
              alt={product.name}
              className="product-modal-image"
              width={2000}
              height={2000}
              loading="lazy"
            />
            <h2 className="product-modal-product-name">{product.name}</h2>
            <p className="product-modal-description">{product.description}</p>
            <h3 className="product-modal-variant-size">
              Size: {selectedVariant?.name}
            </h3>
            <div className="product-modal-variants-wrapper">
              {renderVariants()}
              {containerDimensions.scrollWidth >
                containerDimensions.clientWidth && (
                <>
                  {renderArrowButton('left')}
                  {renderArrowButton('right')}
                </>
              )}
            </div>
            <p className="product-modal-variant-price">
              {product.type === 'Honey' &&
                `$${selectedVariant?.price?.toFixed(2)}`}
            </p>
            <div className="product-modal-buttons-wrapper">
              <Button
                type="button"
                title="Contact Us"
                variant="btn_yellow"
                className="mb-2 w-full px-4 py-2 sm:mb-0 sm:mr-2"
                href="/#contact"
              />
              <Button
                type="button"
                title="Cancel"
                variant="btn_dark_green"
                className="px-4 py-2"
                onClick={onClose}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductModal;
