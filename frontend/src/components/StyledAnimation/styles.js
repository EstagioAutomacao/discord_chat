import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: transparent;
  z-index: 0;
  overflow: hidden;
  ::before {
    top: -45%;
    left: 0;
    content: "";
    position: absolute;
    width: 60%;
    height: 150%;
    background-image: linear-gradient(
      90deg,
      rgba(47, 49, 54, 1) 0%,
      rgba(46, 47, 52, 1) 100%
    );
    border-bottom-right-radius: 70%;
    border-top-right-radius: 25%;
  }
`;
