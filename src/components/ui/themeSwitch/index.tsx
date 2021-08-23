import { Box, useColorMode, Icon } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      backgroundColor={colorMode === "light" ? "gray.100" : "gray.700"}
      display="flex"
      alignItems="center"
      p={2}
      mr={4}
      mb={4}
      borderRadius={5}
      right={0}
      pos="absolute"
      onClick={toggleColorMode}
    >
      <Icon as={colorMode === "light" ? MoonIcon : SunIcon} />
    </Box>
  );
};

export { ThemeSwitcher };
