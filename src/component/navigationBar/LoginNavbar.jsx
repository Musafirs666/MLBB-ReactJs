import React from "react";
import { NavLink } from "react-router-dom";

const LoginNavbar = () => {
  return (
    <NavLink to={"login"}>
      <div className="cursor-pointer ml-2">
        <img src="/img/login.png" alt="Search Icon" />
      </div>
    </NavLink>
  );
};

export default LoginNavbar;
