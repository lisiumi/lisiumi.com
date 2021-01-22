import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/react";

const Footer = ({ gridArea }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const siteTitle = data.site.siteMetadata.title;

  return (
    <footer
      css={css`
        grid-area: ${gridArea};
        text-align: center;

        @supports not (display: grid) {
          position: relative;
          top: -460px;
          height: fit-content;
          @media (max-height: 420px) and (orientation: landscape) {
            top: -320px;
          }
        }
      `}
    >
      <hr />
      <p>
        &copy; {new Date().getFullYear()} {siteTitle}. All rights reserved.
        <br />
        {/* TODO: link to opt-out page */}
        This site uses Google Analytics. You can opt out at any time.
      </p>
    </footer>
  );
};

export default Footer;
