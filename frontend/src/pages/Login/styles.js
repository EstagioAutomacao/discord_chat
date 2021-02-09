import styled, { keyframes } from "styled-components";

import background from "../../assets/background-login.jpeg";

export const DivLoading = styled.div`
  position: absolute;
  transition-delay: 1.5s;
  z-index: ${({ animation }) => (animation ? 100 : -1)};
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: content-box;
  background-position: center;
  background-color: #234372;
  position: relative;
`;

export const StyledImg = styled.img`
  width: 100%;
  max-width: 130px;
  /* display: none; */
  height: auto;
  position: absolute;
  top: 24px;
  left: 24px;
  @media (max-width: 715px) {
    top: 24px;
    left: calc(50% - 65px);
  }
  /* z-index: 100; */
  display: ${({ animation }) => (animation ? "none" : "block")};
`;

const animationDivForm = keyframes`
  0% {margin-top: 10px;}
  20% {margin-top: 50px;}
  40% {margin-top: 80px;}
  60% {margin-top: 100px;}
  70% {margin-top: 130px;}
  80% {margin-top: 80px;}
  90% {margin-top: 40px;}
  95% {margin-top: 0px;}
  100% {margin-top: -15px;}
`;

export const FormContainer = styled.div`
  /* display: none; */
  position: absolute;
  z-index: 10;
  width: 100%;
  height: auto;
  max-width: 784px;
  background-color: var(--primary);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  @media (max-width: 715px) {
    max-width: 480px;
  }
  margin-top: ${({ animation }) => (animation ? "-50px" : 0)};
  visibility: ${({ animation }) => (animation ? "hidden" : "visible")};
  transition: visibility 1.2s, margin-top 1s linear;
  animation: ${({ animation }) => (animation ? animationDivForm : "")} 1.1s
    linear 1;
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h2`
  text-align: center;
  color: var(--white);
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 8px;
`;

export const SubTitle = styled.h3`
  text-align: center;
  color: var(--header-secondary);
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 20px;
`;

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1;
`;

export const DivQRCode = styled.div`
  width: 100%;
  max-width: 240px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1;
  @media (max-width: 715px) {
    display: none;
  }
`;

export const VerticalSeparator = styled.div`
  margin: 0 32px;
  @media (max-width: 715px) {
    display: none;
  }
`;

export const ImageCode = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  > img {
    position: absolute;
    width: 100%;
    height: auto;
    max-width: 50px;
  }
`;

export const Label = styled.label`
  color: var(--channels-default);
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  color: var(--text-normal);
  border-radius: 3px;
  transition: border-color 0.2s ease-in-out;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px;
  height: 40px;
  font-size: 16px;
  box-sizing: border-box;
  :hover {
    border-color: rgba(0, 0, 0, 0.7);
  }
  :focus {
    border-color: #7289da;
  }
`;

export const StyledLink = styled.a`
  color: #7289da;
  text-decoration: none;
  text-decoration-color: #7289da;
  font-size: 14px;
  font-weight: normal;
  margin-top: 8px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: #7289da;
  color: var(--white);
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  height: 44px;
  min-width: 130px;
  padding: 2px 16px;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;

export const DivCreateAccount = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Span = styled.span`
  margin-top: 8px;
  font-size: 14px;
  line-height: 16px;
  color: #72767d;
  padding-right: 4px;
`;
