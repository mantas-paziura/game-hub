import { SimpleGrid, Text } from '@chakra-ui/react';
import Game from '../entities/Game';
import CriticScore from './CriticScore';
import DefinitionItem from './DefinitionItem';

interface Props {
  game: Game;
}

function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid as='dl' columns={2} spacing={10} my={5}>
      <DefinitionItem term='Platforms'>
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term='Metascore'>
        {game.metacritic ? <CriticScore score={game.metacritic} /> : null}
      </DefinitionItem>

      <DefinitionItem term='Genres'>
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term='Publishers'>
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
}

export default GameAttributes;
