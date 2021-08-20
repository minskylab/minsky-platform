import { Colors, extendTheme, ThemeConfig, withDefaultColorScheme } from "@chakra-ui/react";
import { GlobalStyles } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const colors: Colors = {
  primary: {
    100: "#F2D96D",
    200: "#FFDF53",
    300: "#FFDB40",
  },
  secondary: "#FEE7AF",
};

const fonts = {
  body: "Karla, Open Sans, system-ui, sans-serif",
  heading: "Rubik",
  mono: "Menlo, monospace",
};

const styles: GlobalStyles = {
  global: () => ({
    "html, body": {
      backgroundColor: "dark",
    },
  }),
};

const customTheme = extendTheme(
  { colors, config, styles, fonts },
  withDefaultColorScheme({
    colorScheme: "primary",
    components: ["Button", "Badge"],
  })
);

export { customTheme };
