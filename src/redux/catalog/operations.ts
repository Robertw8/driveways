import axios from 'axios';
import { operationWrapper } from '../../helpers';
import { createAction } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65baefd5b4d53c066553b5e4.mockapi.io/api';

interface GetCatalogArgs {
  search?: string;
}

const getCatalog = operationWrapper(
  'catalog/getCatalog',
  async ({ search }: GetCatalogArgs) => {
    const response = await axios.get(`/cars`, {
      params: {
        page: 1,
        limit: 12,
        search,
      },
    });

    return response.data;
  }
);

interface GetCatalogByPageArgs {
  page: number;
  search?: string;
}

const getCatalogByPage = operationWrapper(
  'catalog/getCatalogByPage',
  async ({ page = 2, search }: GetCatalogByPageArgs) => {
    const response = await axios.get(`/cars`, {
      params: {
        page,
        limit: 12,
        search,
      },
    });

    return response.data;
  }
);

const setFilters = createAction<{ [key: string]: string | number }>(
  'catalog/setFilters'
);

const setPaginationEnabled = createAction<boolean>(
  'catalog/setPaginationEnabled'
);

export { getCatalog, getCatalogByPage, setFilters, setPaginationEnabled };
