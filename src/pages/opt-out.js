import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import { Helmet } from "react-helmet";
import ABlank from "../components/a-blank";

const OptOut = () => (
  <div
    css={css`
      padding: 20px;
    `}
  >
    <Helmet>
      <title>Opt Out</title>
      <meta name="description" content="Opt Out Page" />
    </Helmet>

    <h1>Analytics Disabled</h1>
    <p>
      Your choice has been saved. However, if you clear this site’s browser
      cookies, you’ll have to opt out again.
    </p>
    <p>
      To make your choice permanent, install the{" "}
      <ABlank href="https://tools.google.com/dlpage/gaoptout">
        Google Analytics Opt-out Browser Add-on
      </ABlank>
      .
    </p>
    <p>
      <Link to="/">« Go back</Link>
    </p>
  </div>
);

export default OptOut;
