import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
  maxLength: number;
}

function ExpandableText({ children, maxLength }: Props) {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxLength) {
    return <Text>{children}</Text>;
  }

  const summary = isExpanded ? children : children.substring(0, maxLength) + '...';

  return (
    <Text>
      {summary + ' '}
      <Button
        size='xs'
        fontWeight='bold'
        colorScheme='yellow'
        onClick={() => setExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </Button>
    </Text>
  );
}

export default ExpandableText;
