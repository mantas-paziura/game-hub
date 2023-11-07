import { Box, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenshots from '../components/GameScreenshots';
import GameTrailer from '../components/GameTrailer';
import useGame from '../hooks/useGame';

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner mt={4} size='lg' />;

  if (error || !game) throw error;

  return (
    <SimpleGrid my={2} spacingX={5} columns={{ base: 1, md: 2 }}>
      <Box>
        <Heading mb={2}>{game?.name}</Heading>
        <ExpandableText maxLength={300}>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </Box>
      <Box>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </Box>
    </SimpleGrid>
  );
}

export default GameDetailPage;
