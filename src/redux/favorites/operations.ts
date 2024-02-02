import axios from 'axios';
import { operationWrapper } from '../../helpers';
import type { Car } from '../catalog';

axios.defaults.baseURL = 'https://65baefd5b4d53c066553b5e4.mockapi.io';

const getFavorites = operationWrapper('favorites/getFavorites', async () => {
  const response = await axios.get('/favorites');

  return response.data;
});

const addCarToFavorites = operationWrapper(
  'catalog/addCarToFavorites',
  async (car: Car) => {
    const response = await axios.post(`/favorites`, { ...car, id: 222 });

    return response.data;
  }
);

const deleteCarFromFavorites = operationWrapper(
  'catalog/deleteCarFromFavorites',
  async id => {
    const { data } = await axios.get('/favorites', { params: { car_id: id } });
    const response = await axios.delete(`/favorites/${data[0].id}`);

    return response.data;
  }
);

export { getFavorites, addCarToFavorites, deleteCarFromFavorites };
