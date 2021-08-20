import { Box } from "@chakra-ui/react";
import { css } from "@emotion/css";

type HighlightProps = {
  text: string;
  color: string;
  bg: string;
};

const Highlight = ({ text, color, bg }: HighlightProps) => {
  return (
    <Box
      as="span"
      bg={bg}
      color={color}
      m="0 0.5rem"
      p="5px 7px"
      className={css`
        display: inline-flex;
      `}
    >
      {text}
    </Box>
  );
};

export { Highlight };
