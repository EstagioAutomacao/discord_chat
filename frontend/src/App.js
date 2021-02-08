import React, { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";
import { v4 as uuid } from "uuid";

function App() {
  const userID = uuid();
  const [user, setUser] = useState({ userID: userID, userName: "" });
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
