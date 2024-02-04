import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCatalog } from '../../../hooks';

import { ButtonPrimary } from '../..';
import { SearchInput } from './SearchInput';
import { PriceFilter } from './PriceFilter';

import makes from '../../../assets/data/makes.json';
import prices from '../../../assets/data/prices.json';

import { setFilters } from '../../../redux/catalog';
import type { AutoCompleteProps } from 'antd';
import type { AppDispatch } from '../../../redux';

const Filters: React.FC = () => {
  const [makesData, setMakesData] = useState<AutoCompleteProps['options']>([]);
  const [pricesData, setPricesData] = useState<AutoCompleteProps['options']>(
    []
  );
  const [searchValue, setSearchValue] = useState<string>('');
  const [priceValue, setPriceValue] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  const { filters } = useCatalog();

  useEffect(() => {
    setMakesData(
      makes.map(make => ({
        label: make.toLowerCase(),
        value: make.toLowerCase(),
      }))
    );

    setPricesData(
      prices.map(price => ({
        label: price,
        value: price,
      }))
    );
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      setFilters({
        ...filters,
        search: searchValue,
        rentalPrice: priceValue,
      })
    );
  };

  return (
    <form
      className="flex flex-col items-start mt-20 mb-32 justify-center md:flex-row md:mt-0 md:mb-0 md:items-end gap-4 h-12"
      onSubmit={handleSubmit}
    >
      <SearchInput
        placeholder="Enter the text"
        options={makesData}
        label="Car brand"
        className="w-56 h-12 block"
        onChange={(value: string) => setSearchValue(value)}
        onSearch={(value: string) => setSearchValue(value)}
        onClear={() => dispatch(setFilters({ ...filters, search: '' }))}
        value={searchValue}
      />
      <PriceFilter
        placeholder="To $"
        options={pricesData}
        label="Price/1 hour"
        className="w-32 h-12 block"
        onChange={(value: string) => setPriceValue(value)}
        onSearch={(value: string) => setPriceValue(value)}
        onClear={() => dispatch(setFilters({ ...filters, rentalPrice: 0 }))}
        value={priceValue}
      />

      <div className="w-32 h-12">
        <ButtonPrimary text="Search" htmlType="submit" />
      </div>
    </form>
  );
};

export default Filters;
