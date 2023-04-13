import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import image from "../assets/home.jpg";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
            <motion.div
                style={{
                    height: "70vh",
                }}
                animate={{
                    translateY: "20px",
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >
                <Image
                    w={"full"}
                    h={"full"}
                    objectFit={"fill"}
                    src={image}
                    filter={"grayscale(1)"}
                />
            </motion.div>

            <Text
                fontSize={"6xl"}
                textAlign={"center"}
                fontWeight={"thin"}
                color={"whiteAlpha.700"}
                mt={"-1"}
            >
                Crypto
            </Text>
        </Box>
    );
};

export default Home;