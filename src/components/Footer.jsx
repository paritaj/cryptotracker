import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return (
        <Box
            bgColor={"blackAlpha.900"}
            color={"whiteAlpha.700"}
            minH={"30"}
            px={"16"}
            py={["16", "8"]}
            css={{
                "&": {
                    borderTop: "1px solid blue",
                    color: "blue",
                },
            }}
        >
            <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
                <VStack w={"full"} alignItems={["center"]}>

                    <Text
                        fontSize={"sm"}
                        letterSpacing={"widest"}
                        textAlign={["center", "center"]}
                    >
                        Copyright ⓒ 2023
                    </Text>
                </VStack>


            </Stack>
        </Box>
    );
};

export default Footer;