import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AuthLayout({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.auth.status);

  // If the route needs authentication and user is not logged in → redirect to /login
  if (authentication && !authStatus) {
    return <Navigate to="/login" />;
  }

  // If the route does NOT need authentication (like /login, /signup)
  // but user is already logged in → redirect to home
  if (!authentication && authStatus) {
    return <Navigate to="/" />;
  }

  // Otherwise render the requested page
  return <>{children}</>;
}
