import { Box, Text, Link } from "@chakra-ui/react";

type MenuProps = {
  options: string[][];
};

const Menu = ({ options }: MenuProps) => {
  return (
    <Box textAlign="left" pos="absolute" bottom={3}>
      {options.map((option, index) => (
        <Box mb={3} key={index}>
          {option.map((opt, i) => (
            <Link href={"#" + opt.toLowerCase()} key={i}>
              <Text fontSize="sm">{opt}</Text>
            </Link>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export { Menu };
