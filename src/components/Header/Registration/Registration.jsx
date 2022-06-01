import s from "./Registration.module.css";
import SignInForm from "./RegistrationComponents/SignInForm";
import RegText from "./RegistrationComponents/RegText";
import RegSocial from "./RegistrationComponents/RegSocial";
import SignUpLink from "./RegistrationComponents/SignUpLink";
import { useLocation } from "react-router-dom";

const Registration = (props) => {
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  const isRegistration = pathname.includes("signup");
  return (
    <div className={s.containerLogin}>
      <div className={s.logBar}>
        <span className={s.logFormTitle}>Sign in</span>
        {isRegistration ? "pososi" : <SignInForm />}
        <RegText />
        <RegSocial />
        <SignUpLink />
      </div>
    </div>
  );
};

export default Registration;
