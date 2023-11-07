import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import Game from '../entities/Game';
import APIClient from '../services/api-client';
import useGameQueryStore from '../store';

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          page: pageParam,
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering:
            gameQuery.order && (gameQuery.order?.reverse ? '-' : '') + gameQuery.order?.field,
          search: gameQuery.searchText || null,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  });
};

export default useGames;
