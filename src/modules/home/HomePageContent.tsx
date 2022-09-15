import { Box, Container, Flex, useColorMode, chakra } from "@chakra-ui/react";
import { Header } from "components/Header";
import { Content } from "modules/Content";
import { Menu } from "components/Menu";
// import { useEffect, useState } from "react";
import Head from "next/head";
import YouTube from "react-youtube";

// const bgImage = (i: number, colorMode: "light" | "dark"): string => {
//   return colorMode === "light"
//     ? "url('images/backgrounds/ac_w_" + i + ".jpg')"
//     : "url('images/backgrounds/ac_b_" + i + ".png')";
// };

const VideoBg = chakra(YouTube);

const HomePageContent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // const [randomIndex, setRandomIndex] = useState(1);

  const menu = [
    ["Nosotros", "Filosofía", "Tecnología"],
    ["Servicios", "Equipo", "Contacto"],
  ];

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      color: "white",
      controls: 0,
      disablekb: 1,
      loop: 1,
      modestbranding: 1,
      listType: "playlist",
      list: "PLBM4KB51JM82rDde0AqEs5OufSo8sZ0dr",
    },
  };

  // useEffect(() => {
  //   setRandomIndex(Math.floor(Math.random() * 2) + 1);
  // }, []);

  return (
    <Box h="100vh">
      {/* <VideoBg videoId="poJJwoLIMss" opts={videoOptions} h="100vh" w="100%" pos="absolute" /> */}
      <Box
        pos="relative"
        bgColor={colorMode === "light" ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.8)"}
      >
        <Head>
          <title>Home - Minsky</title>
          <meta name="theme-color" content="#ffdf53" />
        </Head>
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
    </Box>
  );
};

export { HomePageContent };
