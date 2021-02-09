import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;
  grid-template-areas:
    "SL SN CI CI"
    "SL CL CD UL"
    "SL UI CD UL";
  height: 100vh;
  @media (max-width: 1050px) {
    grid-template-columns: 71px auto 200px;
    grid-template-areas:
      "SL CI CI"
      "SL CD UL"
      "SL CD UL";
  }
`;
