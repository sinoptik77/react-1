import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const NavItem = (props) => {
    return (
      <div>
        <NavLink
          to={props.linkId}
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          {props.linkName}
        </NavLink>
      </div>
    );
  };
  return (
    <header className={s.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" />
      <div>
        <NavItem linkId="/signin" linkName="Sign in" />
      </div>
    </header>
  );
};
export default Header;
