import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./auth";

export const RequireAuth = (props) => {
  const location = useLocation();
  const auth = useAuth();
  // const navigate = useNavigate();
  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return <>{props.children}</>;
};
