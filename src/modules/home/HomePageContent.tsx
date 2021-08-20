import { Box, Container, Flex } from "@chakra-ui/react";
import { Header } from "components/Header";
import { Content } from "components/Content";

const HomePageContent = () => {
  return (
    <Container maxW="container.lg" h="100vh">
      <Box padding="4" w="100%" h="100vh">
        <Header />
        <Flex align="center" mx="auto" height="calc(100% - 50px)" w={3 / 4}>
          <Content />
        </Flex>
      </Box>
    </Container>
  );
};

export { HomePageContent };
