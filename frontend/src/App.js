import React, { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";
import { v4 as uuid } from "uuid";
function App() {
  const UserID = uuid();
  const [user, setUser] = useState({ UserID: UserID, userName: "" });
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
