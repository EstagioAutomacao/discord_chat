import React, { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";
import { v4 as uuid } from "uuid";
import colors from "./colors";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function App() {
  const userID = uuid();
  const color = colors[getRandomNumber(0, 19)];
  const [user, setUser] = useState({ userID: userID, userName: "", color });
  function handleUser(value) {
    setUser((prevState) => ({ ...prevState, userName: value }));
  }
  return (
    <div className="App">
      <Routes user={user} setUser={handleUser} />
      <GlobalStyles />
    </div>
  );
}

export default App;
