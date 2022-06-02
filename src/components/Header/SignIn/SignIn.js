import s from "../../layouts/AuthLayout/AuthLayout.module.css";
import RegText from "../components/RegText";
import RegSocial from "../components/RegSocial";
import SignLink from "../components/SignLink";
import SignInForm from "../components/SignInForm";

const SignIn = () => {
  return (
    <>
      <span className={s.logFormTitle}>Sign in</span>
      <SignInForm />
      <RegText />
      <RegSocial />
      <SignLink link='/signup' text='Sign up'/>
    </>
  );
};

export { SignIn };
