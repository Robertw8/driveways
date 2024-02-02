import type { Car } from '../catalog';

interface FavoritesInitialState {
  cars: Car[];
  isLoading: boolean;
  error: string;
}

export type { FavoritesInitialState };
