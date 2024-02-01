import axios from 'axios';
import { operationWrapper } from '../../helpers';

const BASE_URL = 'https://65baefd5b4d53c066553b5e4.mockapi.io';

const getCatalog = operationWrapper('catalog/getCatalog', async () => {
  const response = await axios.get(`${BASE_URL}/advert`);

  return response.data;
});

export { getCatalog };
