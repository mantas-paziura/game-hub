import { HStack, Icon } from '@chakra-ui/react';
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiAtari, SiCommodore, SiNintendo, SiSega } from 'react-icons/si';
import { GiConsoleController } from 'react-icons/gi';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { Platform } from '../hooks/usePlatforms';

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendo,
    atari: SiAtari,
    'commodore-amiga': SiCommodore,
    sega: SiSega,
    '3do': GiConsoleController,
    'neo-geo': GiConsoleController,
    web: BsGlobe,
  };

  return (
    <HStack wrap='wrap'>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  );
}
export default PlatformIconList;
