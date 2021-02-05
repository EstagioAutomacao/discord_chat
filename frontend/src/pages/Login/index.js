import React from "react";
import { useHistory } from "react-router-dom";
function Login(props) {
  const history = useHistory();
  const { user, setUser } = props;
  function handleName(e) {
    setUser(e.target.value);
  }
  function handleLogin(e) {
    e.preventDefault();
    history.push("/home");
  }
  return (
    <div>
      <form style={{ marginTop: 12 }} onSubmit={handleLogin}>
        <label>Nome:</label>
        <br />
        <input
          type="text"
          value={user.userName}
          placeholder="Seu nome..."
          onChange={handleName}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Login;
