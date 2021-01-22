import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { css } from "@emotion/react";
import { injectGlobal } from "@emotion/css";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";

var scroll;
if (typeof window !== "undefined") {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  scroll = require("smooth-scroll")('a[href*="#"]', {
    header: "header",
    topOnEmptyHash: true,
    easing: "easeInOutCubic",
  });
}

injectGlobal`
  * {
    box-sizing: border-box;
  }

  section {
    text-align:center;
  }

  section:not(:last-child) {
    margin-bottom:50px;
  }

  section p {
    margin: auto 0.5rem;
  }
`;

const Wrapper = styled.div`
  label: grid-wrapper;

  @supports (display: grid) {
    display: grid;
    grid-template-areas:
      "header"
      "content"
      "footer";
  }
`;

const Index = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta
          name="description"
          content="Web development agency specialising in GatsbyJS and React."
        />
        <meta name="theme-color" content="#393939" />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Helmet>

      <Header gridArea="header" />

      <main
        css={css`
          grid-area: content;

          @supports not (display: grid) {
            section:not(:first-of-type) {
              position: relative;
              top: -460px;
              @media (max-height: 420px) and (orientation: landscape) {
                top: -320px;
              }
            }
          }

          @supports (padding: max(0px)) {
            p {
              padding-left: max(12px, env(safe-area-inset-left));
              padding-right: max(12px, env(safe-area-inset-right));
            }
          }
        `}
      >
        {children}
      </main>

      <Footer gridArea="footer" />
    </Wrapper>
  );
};

export default Index;
