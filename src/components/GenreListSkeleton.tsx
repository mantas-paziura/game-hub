import { List, ListItem, HStack, Skeleton } from '@chakra-ui/react';

interface Props {
  skeletonsAmount: number;
}

function GenreListSkeleton({ skeletonsAmount }: Props) {
  const skeletons = [...Array(skeletonsAmount).keys()];

  return (
    <List spacing={3}>
      {skeletons.map((n) => (
        <ListItem key={n}>
          <HStack spacing={3}>
            <Skeleton boxSize={8} borderRadius='md' />
            <Skeleton height={4} width='70%' />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
export default GenreListSkeleton;
