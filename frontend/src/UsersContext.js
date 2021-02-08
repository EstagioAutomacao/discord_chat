import { createContext, useState } from "react";

export const UsersContext = createContext([]);

export const UsersProvider = (props) => {
  const [users2, setUsers2] = useState([]);
  const user = {
    id: null,
    userName: "",
    room: "",
  };
  function handleUsers(users) {
    setUsers2(users);
  }
  return (
    <UsersContext.Provider value={{ users2, handleUsers }}>
      {props.children}
    </UsersContext.Provider>
  );
};
