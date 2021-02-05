import React from "react";
import { Button } from "./styles";
import Logo from "../../assets/logo.svg";
const ServerButton = (props) => {
  const { selected, isHome, hasNotifications, mentions } = props;
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome && <img src={Logo} alt="Home" />}
    </Button>
  );
};

export default ServerButton;
