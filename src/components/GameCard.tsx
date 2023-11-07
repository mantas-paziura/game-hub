import { Box, Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Game from '../entities/Game';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';
import RatingImage from './RatingImage';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card
      overflow='hidden'
      _hover={{ transform: 'scale(1.03)', transition: 'transform .15s ease-in' }}
    >
      <Image
        src={getCroppedImageUrl(game.background_image)}
        fit='cover'
        objectPosition='top'
        aspectRatio={16 / 9}
        alt={game.name}
      />
      <CardBody>
        <HStack justify='space-between' spacing={3} mb={3}>
          {game.parent_platforms && (
            <PlatformIconList platforms={game.parent_platforms?.map((p) => p.platform)} />
          )}
          <CriticScore score={game.metacritic} />
        </HStack>

        <Link to={`/games/${game.slug}`}>
          <Heading
            as='h2'
            fontSize='2xl'
            whiteSpace='nowrap'
            mt={3}
            _hover={{ opacity: 0.4, transition: 'opacity .15s ease-in' }}
          >
            <Box display='inline' whiteSpace='normal'>
              {game.name}
            </Box>
            &nbsp;
            <RatingImage rating={game.rating_top} />
          </Heading>
        </Link>
      </CardBody>
    </Card>
  );
}
export default GameCard;
