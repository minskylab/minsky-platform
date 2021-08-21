import { Box, Container, Flex } from "@chakra-ui/react";
import { Header } from "components/Header";
import { Content } from "components/Content";
import { Menu } from "components/Menu";

const HomePageContent = () => {
  let menu = [
    ["Nosotros", "Filosofía", "Tecnología"],
    ["Tecnología", "Equipo", "Contactos"],
  ];

  return (
    <Container maxW="container.lg" h="100vh">
      <Box padding="4" w="100%" h="100vh">
        <Header />
        <Flex
          align="center"
          mx="auto"
          height="calc(100% - 100px)"
          w={["100%", "100%", "80%", "75%"]}
        >
          <Content />
        </Flex>
        <Menu options={menu} />
      </Box>
    </Container>
  );
};

export { HomePageContent };
