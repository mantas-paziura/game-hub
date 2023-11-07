import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Layout from './Layout';

function ErrorPage() {
  const error = useRouteError();
  const errorMessage = isRouteErrorResponse(error)
    ? 'this page does not exist'
    : 'an unexpected error has occurred';

  return (
    <Layout>
      <Box p={5}>
        <Heading>Oops...</Heading>
        <Text mt={2}>Sorry, {errorMessage}.</Text>
      </Box>
    </Layout>
  );
}

export default ErrorPage;
