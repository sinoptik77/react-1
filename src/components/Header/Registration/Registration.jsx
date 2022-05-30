import s from './Registration.module.css'
import {NavLink} from "react-router-dom";
import RegName from "./Registration components/RegName";
import RegPassword from "./Registration components/RegPassword";
import SignInButton from "./Registration components/SignInButton";
import RegText from "./Registration components/RegText";
import RegSocial from "./Registration components/RegSocial";
import SignUpLink from "./Registration components/SignUpLink";

const Registration = (props) => {



    return (
        <div className={s.containerLogin}>
            <div className={s.logBar}>
                <form className={s.logForm}>
                <span className={s.logFormTitle}>
                    Sign in
                </span>
                    <RegName/>
                    <RegPassword/>
                    <SignInButton/>
                    <RegText/>
                    <RegSocial/>
                    <SignUpLink/>
                </form>
            </div>
        </div>
    )
}

export default Registration;