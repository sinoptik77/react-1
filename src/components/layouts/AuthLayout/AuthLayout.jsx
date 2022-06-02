import s from "./AuthLayout.module.css";
import { useLocation } from "react-router-dom";
import { SignIn } from "../../Header/SignIn/SignIn";
import { SignUp } from "../../Header/SignUp/SignUp";

const AuthLayout = (props) => {
  const { pathname } = useLocation();
  const isRegistration = pathname.includes("signup");
  return (
    <div className={s.containerLogin}>
      <div className={s.logBar}>{isRegistration ? <SignUp /> : <SignIn />}</div>
    </div>
  );
};

export default AuthLayout;