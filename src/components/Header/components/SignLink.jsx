import s from "../../layouts/AuthLayout/AuthLayout.module.css";
import {NavLink} from "react-router-dom";


const SignLink = ({link, text}) => {
    return <div className={s.textCenter2}>
        <NavLink to={link} className={s.signUp}>
            {text}
        </NavLink>
    </div>
}

export default SignLink;
