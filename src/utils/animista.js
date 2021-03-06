/* ----------------------------------------------
 * Generated by Animista on 2018-6-11 16:48:35
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

import { css, keyframes } from "@emotion/react";

const flipInHorBottomAnimation = keyframes`
  0% {
    transform: rotateX(80deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0);
    opacity: 1;
  }
`;

export const flipInHorBottom = css`
  animation: ${flipInHorBottomAnimation} 0.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const slideInFwdCenterAnimation = keyframes`
  0% {
    transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
`;

export const slideInFwdCenter = css`
  animation: ${slideInFwdCenterAnimation} 0.4s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const slideInLeftAnimation = css`
  0% {
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideInLeft = css`
  animation: ${slideInLeftAnimation} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
`;

const slideInRightAnimation = keyframes`
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideInRight = css`
  animation: ${slideInRightAnimation} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
`;

const textFocusInAnimation = keyframes`
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`;

export const textFocusIn = css`
  animation: ${textFocusInAnimation} 1s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
`;

const trackingInContractAnimation = keyframes`
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
`;

export const trackingInContract = css`
  animation: ${trackingInContractAnimation} 0.8s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;

const trackingInContractBckAnimation = keyframes`
  0% {
    letter-spacing: 1em;
    transform: translateZ(400px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
`;

export const trackingInContractBck = css`
  animation: ${trackingInContractBckAnimation} 1s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;

const trackingInContractBckBottomAnimation = keyframes`
  0% {
    letter-spacing: 1em;
    transform: translateZ(400px) translateY(300px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
`;

export const trackingInContractBckBottom = css`
  animation: ${trackingInContractBckBottomAnimation} 1s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;

const trackingInContractBckTopAnimation = keyframes`
  0% {
    letter-spacing: 1em;
    transform: translateZ(400px) translateY(-300px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
`;

export const trackingInContractBckTop = css`
  animation: ${trackingInContractBckTopAnimation} 1s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;

const trackingInExpandAnimation = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

export const trackingInExpand = css`
  animation: ${trackingInExpandAnimation} 0.7s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;
