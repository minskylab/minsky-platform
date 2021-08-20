import { Box, Img } from "@chakra-ui/react";
import logo from "../../../../public/images/logos/minsky.svg";

const Logo = () => {
  return (
    <Box p="2">
      <Img src={logo.src} />
    </Box>
  );
};

export { Logo };
