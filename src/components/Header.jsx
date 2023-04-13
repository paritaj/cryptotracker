import { HStack, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <HStack p={"4"} shadow={"base"} backgroundColor={"blackAlpha.900"}
            css={{
                "&": {
                    borderBottom: "1px solid blue",
                }
            }}
        >
            <Button variant={"unstyled"} color={"white"} padding={"10px"}
                css={{
                    "&:hover": {
                        transform: "scale(1.1)",
                        color: "blue",
                    },

                }}>
                <Link to="/">Home</Link>
            </Button>
            <Button variant={"unstyled"} color={"white"} padding={"10px"} css={{
                "&:hover": {
                    transform: "scale(1.1)",
                    color: "blue",
                },
            }}>
                <Link to="/exchanges">Exchanges</Link>
            </Button>
            <Button variant={"unstyled"} color={"white"} padding={"10px"} css={{
                "&:hover": {
                    transform: "scale(1.1)",
                    color: "blue",
                },
            }}>
                <Link to="/coins">Coins</Link>
            </Button>
        </HStack >
    );
};

export default Header