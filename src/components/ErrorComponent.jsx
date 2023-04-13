import { Alert, AlertIcon } from '@chakra-ui/react';
import React from 'react';

const ErrorComponent = ({ message }) => {
    return <Alert status={"error"} position={"fixed"} bottom={"50%"} alignItems={"center"} left={"30%"} right={"20%"} w={"auto"}>
        <AlertIcon />
        {message}
    </Alert>
};

export default ErrorComponent;