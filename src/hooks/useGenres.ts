import useData from './useData';
import genres from '../data/genres';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => {
  // true - loads static data
  // false - fetches data from the API
  const loadStaticData = false;

  if (loadStaticData) return { data: genres, error: null, isLoading: false };
  return useData<Genre>('/genres');
};

export default useGenres;
