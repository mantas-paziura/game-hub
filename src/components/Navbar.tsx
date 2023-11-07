import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Image, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import useGameQueryStore from '../store';
import SearchInput from './SearchInput';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const setSearchText = useGameQueryStore((store) => store.setSearchText);

  return (
    <Box as='nav' p={{ base: 3, lg: 5 }}>
      <Flex align='center' gap={2}>
        <Link to='/' style={{ flexShrink: 0 }} onClick={() => setSearchText('')}>
          <Image width='60px' src={logo} alt='Logo' />
        </Link>

        <SearchInput />

        <IconButton
          variant='ghost'
          aria-label='Change color mode'
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
        />
      </Flex>
    </Box>
  );
}
export default Navbar;
