import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import GameHeading from '../components/GameHeading';
import GamesGrid from '../components/GamesGrid';
import GenreList from '../components/GenreList';
import OrderSelector from '../components/OrderSelector';
import PlatformSelector from '../components/PlatformSelector';

function HomePage() {
  return (
    <Grid
      templateAreas={{ base: `'main'`, lg: `'aside main'` }}
      gridTemplateColumns={{ base: '1fr', lg: '250px 1fr' }}
    >
      <Show above='lg'>
        <GridItem as='aside' area={'aside'} me={3} my={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem as='main' area={'main'}>
        <GameHeading />
        <HStack spacing={5} mb={8}>
          <OrderSelector />
          <PlatformSelector />
        </HStack>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
