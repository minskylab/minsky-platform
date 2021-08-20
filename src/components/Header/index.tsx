import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Logo } from "../ui/Logo/index";
import { LangSelect } from "../ui/LangSelect/index";

const Header = () => {
  return (
    <Flex align="center">
      <Logo />
      <Spacer />
      <Box>
        <LangSelect langs={["a", "b"]}/>
      </Box>
    </Flex>
  );
};

export { Header };
