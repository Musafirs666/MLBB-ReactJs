import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const LoginNavbar = () => {
  const authContext = useContext(AuthContext);

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    authContext.setIsLoggedIn(false);
  };

  return isLoggedIn ? (
    <NavLink to="login">
      <button onClick={handleLogout}>Logout</button>
    </NavLink>
  ) : (
    <NavLink to="login">
      <div className="cursor-pointer ml-2">
        <img src="/img/login.png" alt="Login Icon" />
      </div>
    </NavLink>
  );
};

export default LoginNavbar;
