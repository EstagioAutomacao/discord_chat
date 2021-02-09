import styled, { keyframes } from "styled-components";

const animationDiv = keyframes`
  0% {
    border-bottom-right-radius: 70%;
    border-top-right-radius: 25%;
    width: 50%;
    height: 120%;
  }  
  25% {
    border-bottom-right-radius: 70%;
    border-top-right-radius: 25%;
    width: 40%;
    height: 80%;
  }  
  50% {
    border-bottom-right-radius: 100%;
    border-top-right-radius: 20%;
    width: 30%;
    height: 60%;
    /* z-index: 100; */
  }  
  75% {
    border-bottom-right-radius: 60%;
    border-top-right-radius: 15%;
    width: 70%;
    height: 120%;
    /* z-index: 100; */
  }  
  100% {
    border-bottom-right-radius: 0%;
    border-top-right-radius: 0%;
    width: 100%;
    height: 150%;
    z-index: 50;
  }  
`;

export const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: transparent;
  overflow: hidden;
  ::before {
    z-index: 0;
    top: -45%;
    left: 0;
    content: "";
    position: absolute;
    height: 150%;
    background-image: linear-gradient(
      90deg,
      rgba(47, 49, 54, 1) 0%,
      rgba(46, 47, 52, 1) 100%
    );
    width: ${({ animation }) => (animation ? "100%" : "60%")};
    border-bottom-right-radius: ${({ animation }) => (animation ? "0" : "70%")};
    border-top-right-radius: ${({ animation }) => (animation ? "0" : "25%")};
    @media (max-width: 715px) {
      width: 100%;
    }
    animation: ${({ animation }) => (animation ? animationDiv : "")} 1.5s linear
      1;
  }
`;
