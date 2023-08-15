import { Card, Skeleton, CardBody, SkeletonText } from '@chakra-ui/react';

function GameCardSkeleton() {
  return (
    <Card overflow='hidden'>
      <Skeleton aspectRatio={16 / 9} />
      <CardBody>
        <SkeletonText noOfLines={4} spacing='4' skeletonHeight='2' />
      </CardBody>
    </Card>
  );
}
export default GameCardSkeleton;
