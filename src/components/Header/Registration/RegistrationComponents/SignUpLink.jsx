import s from "../Registration.module.css";
import {NavLink} from "react-router-dom";


const SignUpLink = () => {
    return <div className={s.textCenter2}>
        <NavLink to='/signup' className={s.signUp}>
            Sign up
        </NavLink>
    </div>
}

export default SignUpLink;