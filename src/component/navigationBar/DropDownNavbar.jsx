import { NavLink } from "react-router-dom";

const DropDownNavbar = props => {
  return (
    <li>
      <NavLink to={props.path}>
        <a className="block px-4 py-2 hover:bg-neutral-600">{props.label}</a>
      </NavLink>
    </li>
  );
};

export default DropDownNavbar;
