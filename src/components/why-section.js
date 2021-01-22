import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { css } from "@emotion/react";
import Img from "gatsby-image";
import ABlank from "../components/a-blank";
import AnimatedHeading from "../components/animated-heading";
import AnimatedParagraph from "../components/animated-paragraph";
import {
  textFocusIn,
  trackingInContractBckTop,
  trackingInContractBck,
  trackingInContractBckBottom,
} from "../utils/animista";

const WhySection = () => {
  const data = useStaticQuery(graphql`
    query {
      uxImage: file(relativePath: { eq: "blur-business-computer-230544.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 440, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      techImage: file(
        relativePath: { eq: "coding-computer-hacker-97077.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 440, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      serviceImage: file(
        relativePath: { eq: "mike-wilson-96168-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 440) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
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
        <h3>
          <AnimatedHeading animationCSS={trackingInContractBckTop}>
            Technology
          </AnimatedHeading>
        </h3>
        <AnimatedParagraph animationCSS={textFocusIn}>
          Lisiumi’s sites are blazing fast because pages are pre-assembled and
          served over a <abbr title="Content Delivery Network">CDN</abbr>. Our
          sites are secure thanks to minimal attack surface areas and specialist
          third-party services. The end result is a bundle of static files that
          can be hosted anywhere, without the need for complex server
          configurations. Still wondering whether static sites are for you? Here
          are{" "}
          <ABlank href="https://www.netlify.com/blog/2016/05/18/9-reasons-your-site-should-be-static/">
            9 reasons your site should be static
          </ABlank>
          .
        </AnimatedParagraph>
      </div>

      <div>
        <Img fluid={data.uxImage.childImageSharp.fluid} />
        <h3>
          <AnimatedHeading animationCSS={trackingInContractBck}>
            Design
          </AnimatedHeading>
        </h3>
        <AnimatedParagraph animationCSS={textFocusIn}>
          Developing a strong user interface is essential if you’re looking to
          attract interest and attention with your target audience. At Lisiumi,
          our UI & UX design services can play an integral role in successfully
          promoting you and your organisation. From the initial design concept
          to the final outcome, we work diligently towards bringing your vision
          to life in the most professional manner.
        </AnimatedParagraph>
      </div>

      <div>
        <Img fluid={data.serviceImage.childImageSharp.fluid} />
        <h3>
          <AnimatedHeading animationCSS={trackingInContractBckBottom}>
            Service
          </AnimatedHeading>
        </h3>
        <AnimatedParagraph animationCSS={textFocusIn}>
          At Lisiumi, we understand the importance of service. That’s why we’re
          always working to ensure our clients’ needs get the attention they
          deserve. By choosing to work with us, you can expect proactive,
          solution-oriented service that will leave a lasting impression.
        </AnimatedParagraph>
      </div>
    </section>
  );
};

export default WhySection;
