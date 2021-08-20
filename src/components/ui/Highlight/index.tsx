import { css } from "@emotion/css";

type HighlightProps = {
  text: string;
  color: string;
  bg: string;
};

const Highlight = ({ text, color, bg }: HighlightProps) => {
  return (
    <span
      className={css`
        padding: 5px;
        background-color: ${bg};
        color: ${color};
        margin: 0 0.5rem;
        display: inline-flex;
      `}
    >
      {text}
    </span>
  );
};

export { Highlight };
