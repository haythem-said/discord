import React, { useState } from "react";
import "./Login.css";
import { auth, provider } from "./Firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="raw">
      <div className="login-page">
        <h2>Login Page</h2>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="input-field"
            />
          </div>
          <button type="button" onClick={handleLogin} className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
