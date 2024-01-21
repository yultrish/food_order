// Login.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginAsync,
  selectLoading,
  selectError,
  selectIsAuthenticated,
} from "../redux/slices/users/userSlice";

const Log = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const history = useNavigate();

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to the home page or any other desired route
      history("/");
    }
  }, [isAuthenticated, history]);

  const handleLogin = () => {
    dispatch(loginAsync(credentials));
  };

  return (
    <div>
      <label>
        Email:
        <input
          type="text"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
      </label>
      <button onClick={handleLogin} disabled={loading === "pending"}>
        {loading === "pending" ? "Logging in..." : "Log In"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Log;
