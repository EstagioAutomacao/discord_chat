import React, { useContext } from "react";

import { UsersContext } from "../../UsersContext";

import { Container, Role, User, Avatar } from "./styles";
const UserRow = (props) => {
  const { nickname, isBot } = props;
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};
const UserList = () => {
  const { users2 } = useContext(UsersContext);
  return (
    <Container>
      <Role>Disponível - {users2.length + 1} </Role>
      <UserRow nickname="Equipe Fake" isBot />
      {users2.map((user) => (
        <UserRow key={user.id} nickname={user.username} />
      ))}

      <Role>Offline - 1</Role>
      <UserRow nickname="Bot-Audio" isBot />
    </Container>
  );
};

export default UserList;
