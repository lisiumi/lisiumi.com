import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";

const Wrapper = styled.div`
  @supports (display: grid) {
    display: grid;
    grid-template-areas:
      "header"
      "content"
      "footer";
  }
`;

const Index = (props) => {
  return (
    <Wrapper>
      <Header gridArea="header" />
      <main
        css={css`
          grid-area: content;
        `}
      >
        {props.children}
      </main>
      <Footer gridArea="footer" />
    </Wrapper>
  );
};

export default Index;
