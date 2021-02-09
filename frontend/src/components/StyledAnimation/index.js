import React, { useRef, useEffect } from "react";

import { StyledDiv } from "./styles";

const StyledAnimation = ({ animation }) => {
  const divRef = useRef(null);
  useEffect(() => {}, []);
  return <StyledDiv ref={divRef} animation={animation} />;
};

export default StyledAnimation;
