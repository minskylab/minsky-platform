import { Box, Container, Flex, useColorMode } from "@chakra-ui/react";
import { Header } from "components/Header";
import { Content } from "modules/Content";
import { Menu } from "components/Menu";
import { useEffect, useState } from "react";

const bgImage = (i: number, colorMode: "light" | "dark"): string => {
  return colorMode === "light"
    ? "url('images/backgrounds/ac_w_" + i + ".jpg')"
    : "url('images/backgrounds/ac_b_" + i + ".png')";
};

const HomePageContent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [randomIndex, setRandomIndex] = useState(1);

  const menu = [
    ["Nosotros", "Filosofía", "Tecnología"],
    ["Servicios", "Equipo", "Contactos"],
  ];

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * 2) + 1);
  }, []);

  return (
    <Box bgImage={bgImage(randomIndex, colorMode)} bgColor="rgba(0,0,0,0.7)" bgBlendMode="screen">
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
      </Container>
    </Box>
  );
};

export { HomePageContent };
