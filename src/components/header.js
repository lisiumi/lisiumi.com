import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/react";

const Header = ({ gridArea }) => {
  const data = useStaticQuery(graphql`
    query {
      siteLogo: file(relativePath: { eq: "lisiumi-logo-transparent.png" }) {
        childImageSharp {
          fixed(width: 329, height: 82) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const dimensions = css`
    max-height: 82px;
    max-width: 329px;
    min-height: 30px;
    min-width: 120px;
  `;

  return (
    <header
      css={css`
        background-color: rgba(250, 203, 35, 0.95);
        box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.2);

        @supports (display: grid) {
          display: grid;
          grid-area: ${gridArea};
          grid-template-areas:
            "logo"
            "nav";
        }

        padding: 20px;

        @supports (padding: max(0px)) {
          padding-left: max(12px, env(safe-area-inset-left));
          padding-right: max(12px, env(safe-area-inset-right));
        }

        @supports (position: sticky) {
          position: sticky;
          top: -50px;

          @media (max-height: 480px) and (orientation: portrait) {
            padding: 20px 0;
            top: -60px;
          }
        }

        z-index: 100;

        & > * {
          align-self: center;
        }

        @media (min-width: 426px) {
          div:first-of-type {
            margin-right: 20px;
          }
          @supports (display: grid) {
            grid-template-areas: "logo nav";
          }
          top: 0;
        }

        @media (max-height: 420px) and (orientation: landscape) {
          padding: 10px;
        }
      `}
    >
      <div
        css={css`
          ${dimensions};
          grid-area: "logo";
          label: logo-wrapper;

          @supports not (display: grid) {
            @media (min-width: 426px) {
              float: left;
            }
          }

          @media (max-width: 425px) {
            max-height: 40px;
            max-width: 160px;
            margin: 0 auto 20px auto;
          }
        `}
      >
        <a href="/#">
          <Img
            css={css`
              ${dimensions};

              @media (max-width: 425px) {
                max-height: 40px;
                max-width: 160px;
              }
            `}
            fixed={data.siteLogo.childImageSharp.fixed}
            alt="Lisiumi logo"
          />
        </a>
      </div>

      <nav
        css={css`
          align-items: center;
          grid-area: "nav";
          @supports (display: flex) {
            display: flex;
            justify-content: center;
          }

          @media (min-width: 426px) {
            @supports (display: flex) {
              justify-content: flex-end;
            }
          }

          ul {
            font-size: 4vw;
            list-style: none;
            margin: auto 0 auto;

            @supports (display: flex) {
              display: flex;

              @media (min-width: 426px) {
                flex-wrap: wrap;
                justify-content: flex-end;
              }
            }

            @media (min-width: 491px) {
              font-size: 3vw;
            }

            @media (min-width: 769px) {
              font-size: 2.5vw;
            }

            @media (min-width: 1025px) {
              font-size: 2vw;
            }

            @media (min-width: 1201px) {
              font-size: 1.5vw;
            }
          }

          li {
            align-items: center;
            margin: 0;
          }

          li:not(:last-child) {
            margin-right: 20px;

            @media (min-width: 768px) {
              margin-right: 40px;
            }
          }

          a {
            color: black;
            text-decoration: none;
          }

          a:hover,
          a:active {
            border-bottom: 3px solid black;
          }
        `}
      >
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
