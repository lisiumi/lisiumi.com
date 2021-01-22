import React from "react";
import { css } from "@emotion/react";
import { Watch } from "scrollmonitor-react";

const AnimatedParagraph = ({
  animationCSS = "",
  children,
  color = "black",
  gridArea = "",
  isInViewport,
  textShadow = "none",
}) => (
  <p
    css={css`
      color: ${color};
      grid-area: ${gridArea};
      opacity: 0;
      text-shadow: ${textShadow};
      ${isInViewport && animationCSS};
    `}
  >
    {children}
  </p>
);

export default Watch(AnimatedParagraph);
