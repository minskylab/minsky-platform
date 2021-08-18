import { Box, Container } from "@chakra-ui/react";
import { Header } from "components/ui/Header";

const HomePageContent = () => {
  return (
    <Container maxW="container.lg">
      <Box padding="4" w={"100%"}>
        <Header />
      </Box>
    </Container>
  );
};

export { HomePageContent };
