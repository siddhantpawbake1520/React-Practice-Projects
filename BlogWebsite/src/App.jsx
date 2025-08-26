import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./features/authSlice";
import { Footer, Header } from "./component";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // ✅ Call Appwrite to check if session exists
    authService.getCurrentUser()
      .then((userData) => {
            console.log("Current User from Appwrite:", userData)
        if (userData) {
          // store full user object in redux
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch(() => {
        // In case of error, clear session
        dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-400">
        <h1 className="text-xl font-bold">Checking session...</h1>
      </div>
    );
  }

return (
  <div className="min-h-screen flex flex-col justify-between bg-gray-400">
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

}

export default App;
