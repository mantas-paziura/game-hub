import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { CheckIcon } from '@chakra-ui/icons';
import usePlatforms, { Platform } from '../hooks/usePlatforms';

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform | null) => void;
}

function PlatformSelector({ selectedPlatform, onSelectPlatform }: Props) {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} fontWeight='normal' rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {selectedPlatform && <MenuItem onClick={() => onSelectPlatform(null)}>All platforms</MenuItem>}
        {data.map((platform) => {
          const isSelected = selectedPlatform === platform;
          return (
            <MenuItem key={platform.id} onClick={() => onSelectPlatform(isSelected ? null : platform)}>
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
