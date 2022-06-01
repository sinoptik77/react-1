import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";


const Navigation = (props) => {
    const NavItem = (props) => {
        return <div>
            <NavLink to={props.linkId}
                     className={(navData) => (navData.isActive ? s.active : s.item)}>{props.linkName}</NavLink>
        </div>
    }
    return <nav className={s.navigation}>
        <div className={s.nav}>
            <NavItem linkId="/profile" linkName="Profile"/>
        </div>
        {/*<div className={s.nav}>*/}
        {/*    <NavItem linkId="/dialogs" linkName="Dialogs"/>*/}
        {/*</div>*/}
        <div className={s.nav}>
            <NavItem linkId="/news" linkName="News"/>
        </div>
        <div className={s.nav}>
            <NavItem linkId="/settings" linkName="Settings"/>
        </div>
    </nav>
}
export default Navigation;
