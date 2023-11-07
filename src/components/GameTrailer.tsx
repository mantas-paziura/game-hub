import { AspectRatio } from '@chakra-ui/react';
import useTrailers from '../hooks/useTrailers';

interface Props {
  gameId: number;
}

function GameTrailer({ gameId }: Props) {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];
  return first ? (
    <AspectRatio ratio={16 / 9} my={3}>
      <video src={first?.data[480]} poster={first?.preview} controls style={{ borderRadius: 4 }} />
    </AspectRatio>
  ) : null;
}

export default GameTrailer;
