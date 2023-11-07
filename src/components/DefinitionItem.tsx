import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

function DefinitionItem({ term, children }: Props) {
  if (!children || (Array.isArray(children) && children.length === 0)) return null;

  return (
    <Box>
      <Heading as='dt' fontSize='md' color='gray.600'>
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default DefinitionItem;
