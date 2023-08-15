import { Image, ImageProps } from '@chakra-ui/react';
import bullsEye from '../assets/bulls-eye.webp';
import thumsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';

interface Props {
  rating: number;
}

function RatingImage({ rating }: Props) {
  const ratingMap: { [key: number]: ImageProps } = {
    5: { src: bullsEye, alt: 'exceptional', boxSize: '7' },
    4: { src: thumsUp, alt: 'recommended', boxSize: '6' },
    3: { src: meh, alt: 'meh', boxSize: '6' },
  };

  if (!rating || rating < 3) return null;
  return (
    <Image ml={0.5} display='inline' verticalAlign='bottom' position='relative' top={-0.5} {...ratingMap[rating]} />
  );
}
export default RatingImage;
