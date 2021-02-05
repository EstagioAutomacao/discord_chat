import React from "react";

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from "./styles";
const UserInfo = (props) => {
  const { user, setUser } = props;
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>{user.userName}</strong>
          <span>#{user.UserID.slice(0, 4)}</span>
        </UserData>
      </Profile>
      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
