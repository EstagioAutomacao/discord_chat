import styled from "styled-components";
import { AlternateEmail } from "styled-icons/material";
import { Close } from "styled-icons/material";
export const Container = styled.div`
  grid-area: CD;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--primary);
`;
export const Messages = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;
export const InputWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
`;
export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 10px 0 57px;
  border-radius: 7px;
  background-color: var(--chat-input);
  position: relative;
  color: var(--white);
  &::placeholder {
    color: var(--gray);
  }
  ~ svg {
    position: relative;
    top: -34px;
    left: 14px;
    transition: 180ms ease-in-out;
  }
`;
export const InputIcon = styled(AlternateEmail)`
  width: 24px;
  height: 24px;
  color: var(--gray);
`;

export const LogoutButton = styled.button`
  width: 100%;
  position: absolute;
  top: 6px;
  right: 15px;
  z-index: 1000;
  background-color: #7289da;
  /* color: var(--white); */
  /* font-size: 16px; */
  /* line-height: 24px; */
  /* margin-bottom: 8px; */
  height: auto;
  max-width: 34px;
  padding: 4px;
  box-sizing: border-box;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;

export const CloseIcon = styled(Close)`
  width: 24px;
  height: 24px;
  color: var(--white);
`;
