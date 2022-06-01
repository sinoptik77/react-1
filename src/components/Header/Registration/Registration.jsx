import s from './Registration.module.css'
import RegForm from "./RegistrationComponents/RegForm";
import RegText from "./RegistrationComponents/RegText";
import RegSocial from "./RegistrationComponents/RegSocial";
import SignUpLink from "./RegistrationComponents/SignUpLink";


const Registration = (props) => {

    return (
        <div className={s.containerLogin}>
            <div className={s.logBar}>
                <span className={s.logFormTitle}>
                    Sign in
                </span>
                <RegForm/>
                <RegText/>
                <RegSocial/>
                <SignUpLink/>
            </div>
        </div>
    )
}

export default Registration;