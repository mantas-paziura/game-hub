import { Image, SimpleGrid } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';

interface Props {
  gameId: number;
}

function GameScreenshots({ gameId }: Props) {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  // const skeletons = [...Array(6).keys()];
  return (
    <SimpleGrid my={3} spacing={2} columns={{ base: 1, lg: 2 }}>
      {/* {isLoading && skeletons.map((n) => <Skeleton key={n} aspectRatio={16 / 9} />)} */}

      {data?.results.map((screenshot) => (
        <Image
          aspectRatio={16 / 9}
          key={screenshot.id}
          src={screenshot.image}
          fit='cover'
          borderRadius={4}
          alt={screenshot.id.toString()}
        />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
