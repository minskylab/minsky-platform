import { Box, Text, Link } from "@chakra-ui/react";

type MenuProps = {
  options: string[][];
};

const Menu = ({ options }: MenuProps) => {
  const mailTo = "mailto:hello@minsky.cc?subject=Quiero realizar un proyecto de Diseño/Desarrollo";
  return (
    <Box textAlign="left" pos="absolute" bottom={3}>
      {options.map((option, index) => (
        <Box mb={3} key={index}>
          {option.map((opt, i) => (
            <Link href={opt == "Contacto" ? mailTo : "#" + opt.toLowerCase()} key={i} cursor="pointer">
              <Text fontSize="sm">{opt}</Text>
            </Link>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export { Menu };
