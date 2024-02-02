import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCatalog } from '../../../hooks';

import { ButtonPrimary } from '../..';
import { SearchInput } from './SearchInput';

import makes from '../../../assets/data/makes.json';
import { setFilters } from '../../../redux/catalog';

import type { AutoCompleteProps } from 'antd';
import type { AppDispatch } from '../../../redux';

const Filters: React.FC = () => {
  const [makesData, setMakesData] = useState<AutoCompleteProps['options']>([]);
  const dispatch = useDispatch<AppDispatch>();
  const { filters } = useCatalog();

  useEffect(() => {
    setMakesData(
      makes.map(make => ({
        label: make.toLowerCase(),
        value: make.toLowerCase(),
      }))
    );
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.target.elements[0].value;
    const priceValue = e.target.elements[1].value;

    dispatch(
      setFilters({ ...filters, search: searchValue, rentalPrice: priceValue })
    );
  };

  return (
    <form
      className="flex justify-center items-end gap-4 h-12"
      onSubmit={handleSubmit}
    >
      <SearchInput
        placeholder="Enter the text"
        options={makesData}
        label="Car brand"
        className="w-56 h-12 block"
      />

      <SearchInput
        placeholder="To $"
        label="Price/1 hour"
        className="w-32 h-12 block"
      />

      <div className="w-32 h-12">
        <ButtonPrimary text="Search" htmlType="submit" className="capitalize" />
      </div>
    </form>
  );
};

export default Filters;
