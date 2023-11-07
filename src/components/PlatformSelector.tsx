import { CheckIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store';

function PlatformSelector() {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} fontWeight='normal' rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {selectedPlatformId && (
          <MenuItem onClick={() => setPlatformId(undefined)}>All platforms</MenuItem>
        )}
        {data?.results.map((platform) => {
          const isSelected = selectedPlatformId === platform.id;
          return (
            <MenuItem
              key={platform.id}
              onClick={() => setPlatformId(isSelected ? undefined : platform.id)}
            >
              {platform.name}
              {isSelected && <CheckIcon ml={2} color='green.400' />}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
export default PlatformSelector;
