import { Box, Container, Flex } from "@chakra-ui/react";
import { Header } from "components/Header";
import { Content } from "modules/Content";
import { Menu } from "components/Menu";
import { ThemeSwitcher } from "components/ui/themeSwitch";

const HomePageContent = () => {
  const menu = [
    ["Nosotros", "Filosofía", "Tecnología"],
    ["Tecnología", "Equipo", "Contactos"],
  ];

  const bgImg = "images/backgrounds/ac_1.png";

  return (
    <Box bgImage={bgImg} bgColor="rgba(0,0,0,0.7)" bgBlendMode="screen">
      <Container maxW="container.xl" h="100vh" bg="transparent" padding="4">
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
        <ThemeSwitcher />
      </Container>
    </Box>
  );
};

export { HomePageContent };
