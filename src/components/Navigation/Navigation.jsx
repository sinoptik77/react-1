import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return <div>
        <NavLink to={"" + props.linkId} className={(navData) => (navData.isActive ? s.active : s.item)}>{props.linkName}</NavLink>
    </div>
}
const Navigation = (props) => {
    return <nav className={s.navigation}>
        <NavItem linkId="/profile" linkName="Profile"/>
        <NavItem linkId="/dialogs" linkName="Dialogs"/>
        <NavItem linkId="/news" linkName="News"/>
        <NavItem linkId="/music" linkName="Music"/>
        <NavItem linkId="/settings" linkName="Settings"/>
    </nav>
}
export default Navigation;