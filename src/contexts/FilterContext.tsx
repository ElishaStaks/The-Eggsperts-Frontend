'use client';

import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type FilterContextProps = {
  selectedFilters: string[];
  updateFilters: (filters: string[]) => void;
  resetFilters: () => void;
};

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

type FilterProviderProps = {
  children: ReactNode;
};

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const updateFilters = useCallback((filters: string[]) => {
    setSelectedFilters(filters);
  }, []);

  const resetFilters = useCallback(() => {
    setSelectedFilters([]);
  }, []);

  const contextValue = useMemo(
    () => ({
      selectedFilters,
      updateFilters,
      resetFilters,
    }),
    [selectedFilters, updateFilters, resetFilters],
  );

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
};
