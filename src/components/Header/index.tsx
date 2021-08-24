import { Box, Flex, Spacer, useColorMode } from "@chakra-ui/react";
import { Logo } from "../ui/Logo/index";
import { LangSelect } from "../ui/LangSelect/index";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align="center">
      <Logo logo={colorMode === "light" ? "minsky_b.svg" : "minsky_w.svg"}/>
      <Spacer />
      <Box>
        <LangSelect langs={["ES", "ESP"]} />
      </Box>
    </Flex>
  );
};

export { Header };
