import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";

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

const Index = (props) => {
  return (
    <Wrapper>
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
        {props.children}
      </main>
      <Footer gridArea="footer" />
    </Wrapper>
  );
};

export default Index;
