import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

interface Props {
  amount: number;
}

function GameCardSkeletons({ amount }: Props) {
  const skeletons = [...Array(amount).keys()];

  return skeletons.map((n) => (
    <Card key={n} overflow='hidden'>
      <Skeleton aspectRatio={16 / 9} />
      <CardBody>
        <SkeletonText noOfLines={4} spacing='4' skeletonHeight='2' />
      </CardBody>
    </Card>
  ));
}
export default GameCardSkeletons;
