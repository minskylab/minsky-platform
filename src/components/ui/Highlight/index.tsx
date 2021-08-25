import { Box } from "@chakra-ui/react";

type HighlightProps = {
  children: string;
};

const Highlight = ({ children }: HighlightProps) => {
  return (
    <Box as="span" bg={"yellow.300"} color={"black"} m="0 0.5rem" p="5px 7px" display="inline-flex">
      {children}
    </Box>
  );
};

export { Highlight };
