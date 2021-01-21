import React from "react";

const ABlank = ({ children, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default ABlank;
