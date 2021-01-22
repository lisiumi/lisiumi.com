import React from "react";
import { css } from "@emotion/react";
import { Watch } from "scrollmonitor-react";

const AnimatedHeading = ({ animationCSS = "", children, isInViewport }) => (
  <span
    css={css`
      ${isInViewport && animationCSS};
      opacity: 0;
    `}
  >
    {children}
  </span>
);

export default Watch(AnimatedHeading);
