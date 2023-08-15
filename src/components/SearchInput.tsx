import { useRef } from 'react';
import { InputGroup, InputLeftElement, Input, InputRightElement, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { BsSearch } from 'react-icons/bs';

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const searchRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<number>();

  const handleInput = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (searchRef.current) onSearch(searchRef.current.value);
    }, 500);
  };

  const handleClear = () => {
    if (searchRef.current) searchRef.current.value = '';
    onSearch('');
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents='none' children={<BsSearch />} />
      <Input ref={searchRef} variant='filled' rounded='xl' placeholder='Search games...' onInput={handleInput} />
      {searchRef.current?.value && (
        <InputRightElement>
          <IconButton variant='ghost' aria-label='Clear search' size='sm' icon={<CloseIcon />} onClick={handleClear} />
        </InputRightElement>
      )}
    </InputGroup>
  );
}
export default SearchInput;
