import { Text } from '@chakra-ui/react';
import useGameQueryStore from '../store';

function NoSearchResults() {
  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);
  return <Text my={6}>Sorry, we couldn't find any results for '{searchText}'</Text>;
}
export default NoSearchResults;
