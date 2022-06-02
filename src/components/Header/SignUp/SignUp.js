import SignUpForm from "../components/SignUpForm";
import RegText from "../components/RegText";
import RegSocial from "../components/RegSocial";
import s from "../../layouts/AuthLayout/AuthLayout.module.css";
import SignLink from "../components/SignLink";

const SignUp = () => {
  return (
    <>
      <span className={s.logFormTitle}>Sign up</span>
      <SignUpForm />
      <RegText />
      <RegSocial containerClassName={s.socialClubSignUp} />
      <SignLink link='/signin' text='Sign in'/>
    </>
  );
};

export { SignUp };
