import { Box, Img } from "@chakra-ui/react";

type LogoProps = {
  logo: string;
};

const logoRoute = "images/logos/";

const Logo = ({logo}: LogoProps) => {
  return (
    <Box p="2">
      <Img src={logoRoute + logo} />
    </Box>
  );
};

export { Logo };
