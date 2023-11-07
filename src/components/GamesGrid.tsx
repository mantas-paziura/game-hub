import { SimpleGrid } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from '../hooks/useGames';
import useGameQueryStore from '../store';
import ErrorAlert from './ErrorAlert';
import GameCard from './GameCard';
import GameCardSkeletons from './GameCardSkeletons';
import NoSearchResults from './NoSearchResults';

function GamesGrid() {
  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);
  const { data, error, fetchNextPage, hasNextPage, isFetching } = useGames();
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  if (error) {
    return <ErrorAlert message={error.message} />;
  }

  if (!isFetching && (searchText || '').length > 0 && fetchedGamesCount === 0)
    return <NoSearchResults />;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={<></>}
      style={{ overflow: 'visible' }}
    >
      <SimpleGrid mb={5} gap={5} columns={{ md: 2, lg: 3, xl: 4 }}>
        {data?.pages.map((page) => {
          return page.results.map((game) => <GameCard game={game} key={game.id} />);
        })}
        {isFetching && <GameCardSkeletons amount={8} />}
      </SimpleGrid>
    </InfiniteScroll>
  );
}

export default GamesGrid;
