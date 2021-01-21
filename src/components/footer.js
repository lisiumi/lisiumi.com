import React from "react";
import { css } from "@emotion/react";

const Footer = ({ gridArea }) => (
  <footer
    css={css`
      grid-area: ${gridArea};
    `}
  >
    <h1>Footer</h1>
  </footer>
);

export default Footer;
