import { Box, Flex, Spacer, useColorMode } from "@chakra-ui/react";
import { Logo } from "../ui/Logo/index";
import { LangSelect } from "../ui/LangSelect/index";
import { ThemeSwitcher } from "components/ui/themeSwitch";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align="center">
      <Logo logo={colorMode === "light" ? "minsky_b.svg" : "minsky_w.svg"} />
      <Spacer />
      <Flex align="flex-end" gridGap={4}>
        {/* <LangSelect langs={["ESPANOL", "INGLES"]} /> */}
        <ThemeSwitcher />
      </Flex>
    </Flex>
  );
};

export { Header };
