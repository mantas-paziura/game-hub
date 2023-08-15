import { GameQuery } from '../App';
import useData from './useData';
import { Platform } from './usePlatforms';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  rating_top: number;
  parent_platforms: { platform: Platform }[];
}

export interface Order {
  label: string;
  field: 'added' | 'created' | 'name' | 'released' | 'rating';
  reverse: boolean;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.order && (gameQuery.order?.reverse ? '-' : '') + gameQuery.order?.field,
        search: gameQuery.searchText || null,
      },
    },
    [gameQuery],
  );

export default useGames;
