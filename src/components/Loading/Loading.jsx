import { Box, Container, Spinner } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Container
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      justifyItems={"center"}
    >
      <Box>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    </Container>
  );
};

export default Loading;
