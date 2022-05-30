import s from "../Registration.module.css";


const SignInButton = () => {
    return <div className={s.containerButton}>
        <button className={s.signButton}>
            Sign in
        </button>
    </div>
}

export default SignInButton;