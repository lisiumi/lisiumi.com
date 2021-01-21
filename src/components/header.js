import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/react";

const Header = ({ gridArea }) => {
  const data = useStaticQuery(graphql`
    query {
      siteLogo: file(relativePath: { eq: "lisiumi-logo-transparent.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <header
      css={css`
        grid-area: ${gridArea};
      `}
    >
      <div>
        <a href="/#">
          <Img fixed={data.siteLogo.childImageSharp.fixed} alt="Lisiumi logo" />
        </a>
      </div>

      <nav>
        <ul>
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#why">Why Lisiumi</a>
          </li>
          <li>
            <a href="/#services">What We Do</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
