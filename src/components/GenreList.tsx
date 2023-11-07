import { HStack, Heading, Image, Link, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';
import ErrorAlert from './ErrorAlert';
import GenreListSkeleton from './GenreListSkeleton';

function GenreList() {
  const { data, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return <ErrorAlert message={error.message} />;

  return (
    <>
      <Heading as='h2' fontSize='2xl' mb={4}>
        Genres
      </Heading>

      {isLoading && <GenreListSkeleton skeletonsAmount={10} />}

      <List spacing={3}>
        {data?.results.map((genre) => (
          <ListItem key={genre.id}>
            <Link onClick={() => setGenreId(genre.id)}>
              <HStack spacing={3}>
                <Image
                  fit='cover'
                  boxSize={8}
                  borderRadius='md'
                  src={getCroppedImageUrl(genre.image_background)}
                  alt={genre.name}
                />
                <Text fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'}>
                  {genre.name}
                </Text>
              </HStack>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default GenreList;
