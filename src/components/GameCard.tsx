import { Card, CardBody, Heading, Image, HStack, Box } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import RatingImage from './RatingImage';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card overflow='hidden'>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        fit='cover'
        objectPosition='top'
        aspectRatio={16 / 9}
        alt={game.name}
      />
      <CardBody>
        <HStack justify='space-between' mb={3}>
          {game.parent_platforms && <PlatformIconList platforms={game.parent_platforms?.map((p) => p.platform)} />}
          <CriticScore score={game.metacritic} />
        </HStack>

        <Heading as='h2' fontSize='2xl' whiteSpace='nowrap' mt={3}>
          <Box display='inline' whiteSpace='normal'>
            {game.name}
          </Box>
          &nbsp;
          <RatingImage rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
}
export default GameCard;
