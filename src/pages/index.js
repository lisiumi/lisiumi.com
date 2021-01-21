import * as React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import ABlank from "../components/a-blank";

const IndexPage = ({ data }) => {
  return (
    <>
      <section id="home">
        <Img fluid={data.aboutImage.childImageSharp.fluid} />

        <div>
          <h2>
            Static Sites,
            <br />
            Dynamic Powers.
          </h2>
          <p>
            Are you tired of slow websites that take half a minute to load on
            mobile devices? Are you worried about your website getting hacked?
            Do you suspect you’re paying too much for hosting and maintenance?
            If you answered “yes” to any of the above questions, you’ll love
            Lisiumi’s static websites.
          </p>
        </div>
      </section>

      <section id="why">
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

      <section id="services">
        <div>
          <h2>What We Do</h2>

          <Img fluid={data.gatsbyLogo.childImageSharp.fluid} />

          <h3>Static Website Development</h3>
          <p>
            <ABlank href="https://www.gatsbyjs.com/">Gatsby</ABlank> has emerged
            as one of the most popular static site generators. It can fetch data
            from a variety of sources, including Medium and WordPress. We built
            our own site using Gatsby and recommend it to most clients.
          </p>

          <Img fluid={data.wordpressLogo.childImageSharp.fluid} />

          <h3>WordPress Development</h3>
          <p>
            <ABlank href="https://wordpress.org/">WordPress</ABlank> powers 30%
            of all websites and online stores. Its greatest strengths include an
            intuitive user interface and a mature ecosystem. If you prefer an
            established content managing platform, WordPress is your best
            choice.
          </p>

          <Img fluid={data.fullstackImage.childImageSharp.fluid} />

          <h3>Full-Stack Web Application Development</h3>
          <p>
            If you need more functionality and versatility than what Gatsby and
            WordPress have to offer, a full-stack application may be right for
            you. At Lisiumi, we currently specialise in React, Node.js, Express,
            and MongoDB.
          </p>
        </div>
      </section>

      <section id="contact">
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
