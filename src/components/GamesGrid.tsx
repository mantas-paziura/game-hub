import { Text, SimpleGrid } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import ErrorAlert from './ErrorAlert';

interface Props {
  gameQuery: GameQuery;
}

function GamesGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletonsAmount = 8;
  const skeletons = [...Array(skeletonsAmount).keys()];

  if (error) return <ErrorAlert message={error} />;

  if (!isLoading && gameQuery.searchText?.length > 0 && data.length === 0)
    return <Text my={6}>Sorry, we couldn't find any results for '{gameQuery.searchText}'</Text>;

  return (
    <SimpleGrid my={8} gap={5} columns={{ md: 2, lg: 3, xl: 4 }}>
      {isLoading && skeletons.map((n) => <GameCardSkeleton key={n} />)}

      {data.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </SimpleGrid>
  );
}
export default GamesGrid;
