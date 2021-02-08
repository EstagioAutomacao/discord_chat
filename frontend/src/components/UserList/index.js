import React, { useContext } from "react";

import { UsersContext } from "../../UsersContext";

import { Container, Role, User, Avatar } from "./styles";
const UserRow = (props) => {
  const { nickname, isBot, color } = props;
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong style={{ color: color ? color : "#ffffff", fontWeight: 500 }}>
        {nickname}
      </strong>
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
        <UserRow key={user.id} nickname={user.username} color={user.color} />
      ))}

      <Role>Offline - 1</Role>
      <UserRow nickname="Bot-Audio" isBot />
    </Container>
  );
};

export default UserList;
