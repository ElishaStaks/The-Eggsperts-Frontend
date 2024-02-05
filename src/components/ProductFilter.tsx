/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import React, { useCallback, useEffect, useState } from 'react';

import { useFilterContext } from '@/contexts/FilterContext';

import { FILTER_TYPES } from '../constants';
import type { FilterProps } from '../types';

const ProductFilter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const {
    selectedFilters: contextSelectedFilters,
    updateFilters: updateContextFilters,
  } = useFilterContext();

  const [selectedFilters, setSelectedFilters] = useState<string[]>(
    contextSelectedFilters,
  );
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});
  const [maxHeight, setMaxHeight] = useState<{ [key: string]: string }>({});
  const contentRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {};
  // Check if window is defined before using it
  const searchParams =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams();

  useEffect(() => {
    // Initialize selected filters based on the filter value in the context
    setSelectedFilters(contextSelectedFilters);
    onFilterChange(contextSelectedFilters);
  }, [contextSelectedFilters]);

  useEffect(() => {
    // Update the URL with the new filters
    if (selectedFilters.length > 0) {
      searchParams.set('filter', selectedFilters.join(','));
    } else {
      searchParams.delete('filter');
    }

    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.pushState({}, '', newUrl);
  }, [selectedFilters]);

  useEffect(() => {
    Object.keys(contentRefs).forEach((filterName) => {
      const ref = contentRefs[filterName];
      if (ref?.current) {
        setMaxHeight((prev) => ({
          ...prev,
          [filterName]: isOpen[filterName]
            ? `${ref?.current!.scrollHeight}px`
            : '0',
        }));
      }
    });
  }, [isOpen]);

  const handleToggle = useCallback((filterName: string) => {
    setIsOpen((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  }, []);

  const handleFilterToggle = useCallback(
    (filterValue: string) => {
      const updatedFilters = selectedFilters.includes(filterValue)
        ? selectedFilters.filter((filter) => filter !== filterValue)
        : [...selectedFilters, filterValue];

      setSelectedFilters(updatedFilters);
      updateContextFilters(updatedFilters);
      onFilterChange(updatedFilters);
    },
    [selectedFilters, updateContextFilters],
  );

  return (
    <div className="product-filter-wrapper">
      <p className="product-filter-title">Filters By:</p>
      {FILTER_TYPES.map((filterType) => (
        <div className="product-filter-types-wrapper" key={filterType.name}>
          <div
            className="product-filter-type-wrapper"
            onClick={() => handleToggle(filterType.name)}
          >
            {filterType.name}
            {isOpen[filterType.name] ? (
              <span className="product-filter-type-text">&#9650;</span>
            ) : (
              <span className="product-filter-type-text">&#9660;</span>
            )}
          </div>
          <div
            ref={(ref) => {
              contentRefs[filterType.name] = { current: ref };
            }}
            className={`flex flex-col ${
              isOpen[filterType.name] ? '' : 'hidden'
            }`}
            style={{
              maxHeight: isOpen[filterType.name]
                ? maxHeight[filterType.name]
                : '0',
              overflow: 'hidden',
              transition: 'max-height 0.5s',
            }}
          >
            {filterType.options.map((option, index) => (
              <label
                key={option.name}
                className={`inline-flex items-center ${
                  index === filterType.options.length - 1 ? 'pb-4' : ''
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(option.name)}
                  onChange={() => handleFilterToggle(option.name)}
                  className="form-checkbox text-green-500"
                />
                <span className="product-filter-option-name">
                  {option.name}
                </span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductFilter;
