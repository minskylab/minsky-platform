import { Box, useColorMode, Icon, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
    // backgroundColor={colorMode === "light" ? "gray.100" : "gray.700"}
    // display="flex"
    // alignItems="center"
    // p={2}
    // ml={3}
    // borderRadius={5}
    // right={0}
    // onClick={toggleColorMode}
    >
      <IconButton
        colorScheme="yellow"
        // bgColor="primary"
        onClick={toggleColorMode}
        aria-label="Change color mode"
        icon={<Icon as={colorMode === "light" ? MoonIcon : SunIcon} />}
      />
    </Box>
  );
};

export { ThemeSwitcher };
