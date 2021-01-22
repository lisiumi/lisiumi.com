import * as React from "react";
import { css } from "@emotion/react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import ABlank from "../components/a-blank";

const IndexPage = ({ data }) => {
  return (
    <>
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
            Static Sites,
            <br />
            Dynamic Powers.
          </h1>
          <p
            css={css`
              color: white;
              text-shadow: 1px 1px 2px black;
            `}
          >
            Are you tired of slow websites that take half a minute to load on
            mobile devices? Are you worried about your website getting hacked?
            Do you suspect you’re paying too much for hosting and maintenance?
            If you answered “yes” to any of the above questions, you’ll love
            Lisiumi’s static websites.
          </p>
        </div>
      </section>

      <section
        css={css`
          @media (min-width: 500px) {
            margin: 50px auto 0 auto;
            max-width: 1024px;
          }
        `}
        id="why"
      >
        <h2>Why Lisiumi</h2>

        <div>
          <Img fluid={data.techImage.childImageSharp.fluid} />
          <h3>Technology</h3>
          <p>
            Lisiumi’s sites are blazing fast because pages are pre-assembled and
            served over a <abbr title="Content Delivery Network">CDN</abbr>. Our
            sites are secure thanks to minimal attack surface areas and
            specialist third-party services. The end result is a bundle of
            static files that can be hosted anywhere, without the need for
            complex server configurations. Still wondering whether static sites
            are for you? Here are{" "}
            <ABlank href="https://www.netlify.com/blog/2016/05/18/9-reasons-your-site-should-be-static/">
              9 reasons your site should be static
            </ABlank>
            .
          </p>
        </div>

        <div>
          <Img fluid={data.uxImage.childImageSharp.fluid} />
          <h3>Design</h3>
          <p>
            Developing a strong user interface is essential if you’re looking to
            attract interest and attention with your target audience. At
            Lisiumi, our UI & UX design services can play an integral role in
            successfully promoting you and your organisation. From the initial
            design concept to the final outcome, we work diligently towards
            bringing your vision to life in the most professional manner.
          </p>
        </div>

        <div>
          <Img fluid={data.serviceImage.childImageSharp.fluid} />
          <h3>Service</h3>
          <p>
            At Lisiumi, we understand the importance of service. That’s why
            we’re always working to ensure our clients’ needs get the attention
            they deserve. By choosing to work with us, you can expect proactive,
            solution-oriented service that will leave a lasting impression.
          </p>
        </div>
      </section>

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
            fluid={data.gatsbyLogo.childImageSharp.fluid}
          />

          <h3
            css={css`
              grid-area: heading1;
            `}
          >
            Static Website Development
          </h3>
          <p
            css={css`
              grid-area: paragraph1;
            `}
          >
            <ABlank href="https://www.gatsbyjs.com/">Gatsby</ABlank> has emerged
            as one of the most popular static site generators. It can fetch data
            from a variety of sources, including Medium and WordPress. We built
            our own site using Gatsby and recommend it to most clients.
          </p>

          <Img
            css={css`
              grid-area: img2;
              margin: 60px auto;
            `}
            fluid={data.wordpressLogo.childImageSharp.fluid}
          />

          <h3
            css={css`
              grid-area: heading2;
            `}
          >
            WordPress Development
          </h3>
          <p
            css={css`
              grid-area: paragraph2;
            `}
          >
            <ABlank href="https://wordpress.org/">WordPress</ABlank> powers 30%
            of all websites and online stores. Its greatest strengths include an
            intuitive user interface and a mature ecosystem. If you prefer an
            established content managing platform, WordPress is your best
            choice.
          </p>

          <Img
            css={css`
              grid-area: img3;
              margin: 60px auto;
            `}
            fluid={data.fullstackImage.childImageSharp.fluid}
          />

          <h3
            css={css`
              grid-area: heading3;
            `}
          >
            Full-Stack Web Application Development
          </h3>
          <p
            css={css`
              grid-area: paragraph3;
            `}
          >
            If you need more functionality and versatility than what Gatsby and
            WordPress have to offer, a full-stack application may be right for
            you. At Lisiumi, we currently specialise in React, Node.js, Express,
            and MongoDB.
          </p>
        </div>
      </section>

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
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    aboutImage: file(relativePath: { eq: "book-computer-design-326424.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 600, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    uxImage: file(relativePath: { eq: "blur-business-computer-230544.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024, maxHeight: 440, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    techImage: file(relativePath: { eq: "coding-computer-hacker-97077.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024, maxHeight: 440, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    serviceImage: file(relativePath: { eq: "mike-wilson-96168-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024, maxHeight: 440) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    gatsbyLogo: file(relativePath: { eq: "gatsby-logo-monogram-square.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    wordpressLogo: file(
      relativePath: { eq: "WordPress-logotype-alternative-white.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fullstackImage: file(relativePath: { eq: "full-stack-venn.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
