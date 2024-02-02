import axios from 'axios';
import { operationWrapper } from '../../helpers';
import { createAction } from '@reduxjs/toolkit';

const BASE_URL = 'https://65baefd5b4d53c066553b5e4.mockapi.io';

interface GetCatalogArgs {
  page: number;
  search?: string;
  rentalPrice?: string;
}

const getCatalog = operationWrapper(
  'catalog/getCatalog',
  async ({ page, search, rentalPrice }: GetCatalogArgs) => {
    console.log(rentalPrice);
    const response = await axios.get(`${BASE_URL}/advert`, {
      params: {
        page,
        search,
        rentalPrice,
        limit: 12,
      },
    });

    console.log(response.data);
    return response.data;
  }
);

const setFilters = createAction<{ [key: string]: string | number }>(
  'catalog/setFilters'
);

export { getCatalog, setFilters };
