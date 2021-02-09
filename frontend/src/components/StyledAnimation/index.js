import React, { useRef, useEffect } from "react";

import { StyledDiv } from "./styles";

const StyledAnimation = ({ animation }) => {
  const divRef = useRef(null);
  useEffect(() => {}, []);
  console.log(animation);
  return <StyledDiv ref={divRef} animation={animation} />;
};

export default StyledAnimation;
