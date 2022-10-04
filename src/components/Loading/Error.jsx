import { Container, Spinner } from "@chakra-ui/react";
import React from "react";

const Error = () => {
  return (
    <Container
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      justifyItems={"center"}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="red.500"
        size="xl"
      />
    </Container>
  );
};

export default Error;
