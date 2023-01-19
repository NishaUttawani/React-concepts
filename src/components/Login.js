import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

export default function Login() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  const login = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      <div>
        UserName:{" "}
        <input
          type="email"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
