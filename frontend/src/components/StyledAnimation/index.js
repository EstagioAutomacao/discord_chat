import React, { useRef, useEffect } from "react";

import { StyledDiv } from "./styles";

const StyledAnimation = () => {
  const divRef = useRef(null);
  useEffect(() => {}, []);

  return <StyledDiv ref={divRef} />;
};

export default StyledAnimation;
