import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const color = score > 75 ? 'green' : score > 60 ? 'orange' : 'gray';

  return (
    <Badge colorScheme={color} fontSize='sm' px={2} ml={2} borderRadius='md'>
      {score}
    </Badge>
  );
}
export default CriticScore;
