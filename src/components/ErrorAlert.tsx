import { Alert, AlertDescription, AlertIcon, AlertTitle, Box } from '@chakra-ui/react';

interface Props {
  message: string;
}

function ErrorAlert({ message }: Props) {
  return (
    <Alert status='error' borderRadius='md'>
      <AlertIcon />
      <Box>
        <AlertTitle>Oops!</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Box>
    </Alert>
  );
}
export default ErrorAlert;
