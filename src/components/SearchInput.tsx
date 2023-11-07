import { CloseIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import useGameQueryStore from '../store';

function SearchInput() {
  const navigate = useNavigate();
  const searchText = useGameQueryStore((store) => store.gameQuery.searchText);
  const setSearchText = useGameQueryStore((store) => store.setSearchText);
  const [searchValue, setSearchValue] = useState('');
  const timerRef = useRef<number>();

  useEffect(() => {
    setSearchValue(searchText ?? '');
  }, [searchText]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    setSearchValue(searchText);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setSearchText(searchText);
      navigate('/');
    }, 500);
  };

  const handleClear = () => {
    setSearchValue('');
    setSearchText('');
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents='none' children={<BsSearch />} />
      <Input
        variant='filled'
        rounded='xl'
        placeholder='Search games...'
        value={searchValue}
        onChange={handleChange}
      />
      {searchValue && (
        <InputRightElement>
          <IconButton
            variant='ghost'
            aria-label='Clear search'
            size='sm'
            icon={<CloseIcon />}
            onClick={handleClear}
          />
        </InputRightElement>
      )}
    </InputGroup>
  );
}

export default SearchInput;
