import axios from 'axios';
import { operationWrapper } from '../../helpers';
import { createAction } from '@reduxjs/toolkit';

const BASE_URL = 'https://65baefd5b4d53c066553b5e4.mockapi.io';

interface GetCatalogArgs {
  search?: string;
  rentalPrice?: string;
}

const getCatalog = operationWrapper(
  'catalog/getCatalog',
  async ({ search, rentalPrice }: GetCatalogArgs) => {
    const response = await axios.get(`${BASE_URL}/advert`, {
      params: {
        page: 1,
        limit: 12,
        search,
        rentalPrice,
      },
    });

    console.log(response.data);
    return response.data;
  }
);

interface GetCatalogByPageArgs {
  page: number;
  search?: string;
  price?: string;
}

const getCatalogByPage = operationWrapper(
  'catalog/getCatalogByPage',
  async ({ page = 2, search, price }: GetCatalogByPageArgs) => {
    const response = await axios.get(`${BASE_URL}/advert`, {
      params: {
        page,
        limit: 12,
        search,
        price,
      },
    });

    return response.data;
  }
);

const setFilters = createAction<{ [key: string]: string | number }>(
  'catalog/setFilters'
);

export { getCatalog, getCatalogByPage, setFilters };
