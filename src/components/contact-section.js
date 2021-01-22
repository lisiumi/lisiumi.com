import React from "react";
import { css } from "@emotion/react";

const ContactSection = () => {
  return (
    <section
      css={css`
        margin: 2rem auto;
        max-width: 1024px;
      `}
      id="contact"
    >
      <h2>Contact</h2>
      <p>
        Please email{" "}
        <a href="mailto:&#x63;&#x6F;&#x6D;&#x70;&#x61;&#x6E;&#x79;&#x40;&#x6C;&#x69;&#x73;&#x69;&#x75;&#x6D;&#x69;&#x2E;&#x63;&#x6F;&#x6D;">
          &#x63;&#x6F;&#x6D;&#x70;&#x61;&#x6E;&#x79;&#x40;&#x6C;&#x69;&#x73;&#x69;&#x75;&#x6D;&#x69;&#x2E;&#x63;&#x6F;&#x6D;
        </a>
        .
      </p>
    </section>
  );
};

export default ContactSection;
