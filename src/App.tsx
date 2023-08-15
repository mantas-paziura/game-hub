import { useState } from 'react';
import { Container, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/usePlatforms';
import { Order } from './hooks/useGames';
import Navbar from './components/Navbar';
import GenreList from './components/GenreList';
import GamesGrid from './components/GamesGrid';
import PlatformSelector from './components/PlatformSelector';
import OrderSelector from './components/OrderSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: Order | null;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Container maxW='8xl' p='0'>
      <Grid
        templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}
        gridTemplateColumns={{ base: '1fr', lg: '250px 1fr' }}
      >
        <GridItem as='nav' area={'nav'}>
          <Navbar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
        </GridItem>

        <Show above='lg'>
          <GridItem as='aside' area={'aside'} p={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>

        <GridItem as='main' area={'main'} m={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5}>
            <OrderSelector
              selectedOrder={gameQuery.order}
              onSelectOrder={(order) => setGameQuery({ ...gameQuery, order })}
            />
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
            />
          </HStack>
          <GamesGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
