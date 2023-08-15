import useData from './useData';
import platforms from '../data/platforms';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  // true - loads static data
  // false - fetches data from the API
  const loadStaticData = false;

  if (loadStaticData) return { data: platforms, error: null, isLoading: false };
  return useData<Platform>('/platforms/lists/parents');
};

export default usePlatforms;
