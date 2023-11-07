import { Box, Container } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

interface Props {
  children?: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <Container maxW='8xl' p='0'>
      <Navbar />
      <Box mx={{ base: 4, lg: 6 }}>{children ?? <Outlet />}</Box>
    </Container>
  );
}

export default Layout;
