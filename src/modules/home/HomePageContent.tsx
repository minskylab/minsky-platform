import { Box, Container } from "@chakra-ui/react";
import { Header } from "components/Header";
import { Content } from "components/Content";

const HomePageContent = () => {
  return (
    <Container maxW="container.lg">
      <Box padding="4" w={"100%"}>
        <Header />
        <Content />
      </Box>
    </Container>
  );
};

export { HomePageContent };
