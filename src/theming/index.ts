import { Colors, extendTheme, ThemeConfig } from "@chakra-ui/react";
import { GlobalStyles } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors: Colors = {
  // primary: {
  //   100: "#F2D96D",
  //   200: "#FFDF53",
  //   300: "#FFDB40",
  // },

  yellow: {
    50: "#fffadb",
    100: "#fff1af",
    200: "#ffdd4d",
    300: "#ffdd4d",
    400: "#ffdd4d",
    500: "#e6ba07",
    600: "#b39100",
    700: "#806700",
    800: "#4d3e00",
    900: "#1c1500",
  },
  // secondary: "#FEE7AF",
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
  { colors, config, styles, fonts }
  // withDefaultColorScheme({
  //   colorScheme: "primary",
  //   components: ["Button", "Badge"],
  // })
);

export { customTheme };
