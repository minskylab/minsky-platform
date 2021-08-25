import { Box, Container, Flex, useColorMode } from "@chakra-ui/react";
import { Header } from "components/Header";
import { Content } from "modules/Content";
import { Menu } from "components/Menu";
import { ThemeSwitcher } from "components/ui/themeSwitch";

const HomePageContent = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const menu = [
    ["Nosotros", "Filosofía", "Tecnología"],
    ["Tecnología", "Equipo", "Contactos"],
  ];

  const bgImgRoute = "images/backgrounds/";

  const ranNum = Math.floor(Math.random() * 2) + 1;

  return (
    <Box
      bgImage={bgImgRoute + (colorMode === "light" ? ("ac_w_" + ranNum +".jpg") : ("ac_b_" + ranNum +".png"))}
      bgColor="rgba(0,0,0,0.7)"
      bgBlendMode="screen"
      
    >
      <Container maxW="container.xl" h="100vh" bg="transparent" padding="4" pos="relative">
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
