import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  return (
    <Heading as='h1' size='2xl' mt={4} mb={6}>
      {gameQuery.platform?.name} {gameQuery.genre?.name} Games
    </Heading>
  );
}
export default GameHeading;
