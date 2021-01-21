import React from "react";
import { css } from "@emotion/react";

const Header = ({ gridArea }) => (
  <header
    css={css`
      grid-area: ${gridArea};
    `}
  >
    <h1>Header</h1>
  </header>
);

export default Header;
