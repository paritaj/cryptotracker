import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
    Container,
    Heading,
    HStack,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

const Exchanges = () => {
    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`);
                setExchanges(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchExchanges();
    }, []);

    if (error)
        return <ErrorComponent message={"Error While Fetching Exchanges"} />;

    return (
        <Container maxW={"container.xl"} backgroundImage={"url('https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png')"}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                        {exchanges.map((i) => (
                            <ExchangeCard
                                key={i.id}
                                name={i.name}
                                img={i.image}
                                rank={i.trust_score_rank}
                                url={i.url}
                            />
                        ))}
                    </HStack>
                </>
            )}
        </Container>
    );
};

const ExchangeCard = ({ name, img, rank, url }) => (
    <a href={url} target={"blank"}>
        <VStack

            w={"52"}
            shadow={"lg"}
            p={"8"}
            borderRadius={"lg"}
            transition={"all 0.3s"}
            m={"4"}
            backgroundImage={"url('https://media.istockphoto.com/id/1183546775/vector/seamless-vector-abstract-background-horizontally-and-vertically-repeatable.jpg?s=612x612&w=0&k=20&c=YuuRFgV7Zr9IEvsk3Z4wTCUPTMwYP-08IUmvUgb5J2U=')"}

            css={{
                "&:hover": {
                    transform: "scale(1.1)",
                },
            }}
        >
            <Image
                src={img}
                w={"10"}
                h={"10"}
                objectFit={"contain"}
                alt={"Exchange"}
            />
            <Heading size={"md"} noOfLines={1}>
                {rank}
            </Heading>

            <Text noOfLines={1}>{name}</Text>
        </VStack>
    </a >
);

export default Exchanges;