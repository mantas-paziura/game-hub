import { Flex, IconButton, Image, Link, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from '../assets/logo.webp';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

function Navbar({ onSearch }: Props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex p='10px' align='center' gap={2}>
      <Link flexShrink='0' href='/'>
        <Image width='60px' src={logo} alt='Logo' />
      </Link>

      <SearchInput onSearch={onSearch} />

      <IconButton
        variant='ghost'
        aria-label='Change color mode'
        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
}
export default Navbar;
