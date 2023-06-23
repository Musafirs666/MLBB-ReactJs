import { NavLink } from "react-router-dom";

const LogoNavbar = () => {
  return (
    <NavLink to={""}>
      <div className="">
        <img
          src="/img/logoml.jpg"
          className="w-11 h-11 rounded-md"
          alt="Logo"
        />
      </div>
    </NavLink>
  );
};

export default LogoNavbar;
