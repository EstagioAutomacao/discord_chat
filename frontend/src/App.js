import React, { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";

function App() {
  const [user, setUser] = useState({ userId: "", userName: "", color: "" });

  function handleUser(name, value, clear = false) {
    if (clear) {
      setUser((prevState) => ({
        ...prevState,
        userId: "",
        userName: "",
        color: "",
      }));
      return;
    }
    setUser((prevState) => ({ ...prevState, [name]: value }));
  }
  return (
    <div className="App">
      <Routes user={user} setUser={handleUser} />
      <GlobalStyles />
    </div>
  );
}

export default App;
