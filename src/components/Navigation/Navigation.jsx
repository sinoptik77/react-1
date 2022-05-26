import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";


const Navigation = (props) => {
    const NavItem = (props) => {
        return <div>
            <NavLink to={"" + props.linkId} className={(navData) => (navData.isActive ? s.active : s.item)}>{props.linkName}</NavLink>
        </div>
    }
    return <nav className={s.navigation}>
        <NavItem linkId="/profile" linkName="Profile"/>
        <NavItem linkId="/dialogs" linkName="Dialogs"/>
        <NavItem linkId="/news" linkName="News"/>
        <NavItem linkId="/settings" linkName="Settings"/>
    </nav>
}
export default Navigation;