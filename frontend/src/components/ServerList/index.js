import React from "react";
import ServerButton from "../ServerButton";
import { Container, Separator } from "./styles";

const ServerList = () => {
  return (
    <div>
      <Container>
        <ServerButton isHome />
        <Separator />
        <ServerButton />
        <ServerButton hasNotifications />
        <ServerButton mentions={3} />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton hasNotifications />
        <ServerButton />
        <ServerButton />
        <ServerButton mentions={8} />
        <ServerButton />
        <ServerButton />
      </Container>
    </div>
  );
};

export default ServerList;
