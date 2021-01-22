import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { css } from "@emotion/react";
import Img from "gatsby-image";
import ABlank from "../components/a-blank";
import AnimatedHeading from "../components/animated-heading";
import AnimatedParagraph from "../components/animated-paragraph";
import { textFocusIn } from "../utils/animista";

const ServicesSection = () => {
  const data = useStaticQuery(graphql`
    query {
      gatsbyLogo: file(
        relativePath: { eq: "gatsby-logo-monogram-square.png" }
      ) {
        childImageSharp {
          fixed(width: 400, height: 386) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      wordpressLogo: file(
        relativePath: { eq: "WordPress-logotype-alternative-white.png" }
      ) {
        childImageSharp {
          fixed(width: 400, height: 216) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      fullstackImage: file(relativePath: { eq: "full-stack-venn.png" }) {
        childImageSharp {
          fixed(width: 400, height: 376) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <section
      css={css`
        background-color: black;
        color: #facb23;
      `}
      id="services"
    >
      <div
        css={css`
          margin: 0 auto;
          max-width: 1024px;
          padding: 80px 0;

          & a {
            color: #facb23;
          }

          & p {
            color: white;
          }

          @media (min-width: 500px) {
            @supports (display: grid) {
              display: grid;
              grid-gap: 40px;
              grid-template-areas:
                "heading0 heading0 heading0"
                "img1 img2 img3"
                "heading1 heading2 heading3"
                "paragraph1 paragraph2 paragraph3";

              & > * {
                align-self: center;
              }
            }
          }
        `}
      >
        <h2
          css={css`
            grid-area: heading0;
          `}
        >
          What We Do
        </h2>

        <Img
          css={css`
            grid-area: img1;
            margin: 60px auto;
          `}
          imgStyle={{ width: "80%", height: "80%" }}
          fixed={data.gatsbyLogo.childImageSharp.fixed}
        />

        <h3
          css={css`
            grid-area: heading1;
          `}
        >
          <AnimatedHeading animationCSS={textFocusIn}>
            Static Website Development
          </AnimatedHeading>
        </h3>
        <AnimatedParagraph animationCSS={textFocusIn} gridArea="paragraph1">
          <ABlank href="https://www.gatsbyjs.com/">Gatsby</ABlank> has emerged
          as one of the most popular static site generators. It can fetch data
          from a variety of sources, including Medium and WordPress. We built
          our own site using Gatsby and recommend it to most clients.
        </AnimatedParagraph>

        <Img
          css={css`
            grid-area: img2;
            margin: 60px auto;
          `}
          imgStyle={{ width: "80%", height: "80%" }}
          fixed={data.wordpressLogo.childImageSharp.fixed}
        />

        <h3
          css={css`
            grid-area: heading2;
          `}
        >
          <AnimatedHeading animationCSS={textFocusIn}>
            WordPress Development
          </AnimatedHeading>
        </h3>
        <AnimatedParagraph animationCSS={textFocusIn} gridArea="paragraph2">
          <ABlank href="https://wordpress.org/">WordPress</ABlank> powers 30% of
          all websites and online stores. Its greatest strengths include an
          intuitive user interface and a mature ecosystem. If you prefer an
          established content managing platform, WordPress is your best choice.
        </AnimatedParagraph>

        <Img
          css={css`
            grid-area: img3;
            margin: 60px auto;
          `}
          imgStyle={{ width: "80%", height: "80%" }}
          fixed={data.fullstackImage.childImageSharp.fixed}
        />

        <h3
          css={css`
            grid-area: heading3;
          `}
        >
          <AnimatedHeading animationCSS={textFocusIn}>
            Full-Stack Web Application Development
          </AnimatedHeading>
        </h3>
        <AnimatedParagraph animationCSS={textFocusIn} gridArea="paragraph3">
          If you need more functionality and versatility than what Gatsby and
          WordPress have to offer, a full-stack application may be right for
          you. At Lisiumi, we currently specialise in React, Node.js, Express,
          and MongoDB.
        </AnimatedParagraph>
      </div>
    </section>
  );
};

export default ServicesSection;
