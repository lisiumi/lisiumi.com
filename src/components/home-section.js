import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { css } from "@emotion/react";
import Img from "gatsby-image";
import AnimatedHeading from "../components/animated-heading";
import AnimatedParagraph from "../components/animated-paragraph";
import { textFocusIn, trackingInExpand } from "../utils/animista";

const HomeSection = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(
        relativePath: { eq: "book-computer-design-326424.jpg" }
      ) {
        childImageSharp {
          fluid(maxHeight: 600, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <section
      css={css`
        @supports (display: grid) {
          display: grid;
          grid-template: 50px auto 50px / 20px auto 20px;
        }
      `}
      id="home"
    >
      <Img
        imgStyle={{ height: "650px" }}
        style={{
          gridColumn: "1 / 4",
          gridRow: "1 / 4",
          height: "650px",
        }}
        fluid={data.aboutImage.childImageSharp.fluid}
      />

      <div
        css={css`
          @supports not (display: grid) {
            position: relative;
            top: -560px;
            @media (max-height: 420px) and (orientation: landscape) {
              top: -460px;
            }
          }

          @supports (display: grid) {
            grid-column: 2 / 3;
            grid-row: 2 / 3;
            place-self: center;
          }
          margin: 0 auto;
          max-width: 1024px;
          z-index: 10;
        `}
      >
        <h1
          css={css`
            color: #facb23;
            font-size: 3rem;
            font-weight: 900;
            text-shadow: 1px 1px 2px black;
          `}
        >
          <AnimatedHeading animationCSS={trackingInExpand}>
            Static Sites,
          </AnimatedHeading>
          <br />
          <AnimatedHeading animationCSS={trackingInExpand}>
            Dynamic Powers.
          </AnimatedHeading>
        </h1>
        <AnimatedParagraph
          animationCSS={textFocusIn}
          color="white"
          textShadow="1px 1px 2px black"
        >
          Are you tired of slow websites that take half a minute to load on
          mobile devices? Are you worried about your website getting hacked? Do
          you suspect you’re paying too much for hosting and maintenance? If you
          answered “yes” to any of the above questions, you’ll love Lisiumi’s
          static websites.
        </AnimatedParagraph>
      </div>
    </section>
  );
};

export default HomeSection;
