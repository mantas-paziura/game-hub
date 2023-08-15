import { Link, HStack, Image, Text, List, ListItem, Heading } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import ErrorAlert from './ErrorAlert';
import GenreListSkeleton from './GenreListSkeleton';

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, error, isLoading } = useGenres();

  if (error) return <ErrorAlert message={error} />;

  return (
    <>
      <Heading as='h2' fontSize='2xl' my={4}>
        Genres
      </Heading>

      {isLoading && <GenreListSkeleton skeletonsAmount={10} />}

      <List spacing={3}>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <Link onClick={() => onSelectGenre(genre)}>
              <HStack spacing={3}>
                <Image
                  fit='cover'
                  boxSize={8}
                  borderRadius='md'
                  src={getCroppedImageUrl(genre.image_background)}
                  alt={genre.name}
                />
                <Text fontWeight={selectedGenre === genre ? 'bold' : 'normal'}>{genre.name}</Text>
              </HStack>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default GenreList;
