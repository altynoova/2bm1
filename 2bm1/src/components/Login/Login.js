import React, { useContext } from "react";
import AppContext from "../../Context";
import "./login.css";

function Login() {
    const {loginRequest} = useContext(AppContext)
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, pass } = document.forms[0];
    const data = {
        userName: username.value,
        passwords: pass.value
    }
    loginRequest(data)
  };

  return (
    <section className="expand">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input
              type="text"
              name="username"
              required
              placeholder="username"
            />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input
              type="password"
              name="pass"
              required
              placeholder="password"
            />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
