import s from './Registration.module.css'
import {NavLink} from "react-router-dom";

const Registration = (props) => {
    return (
        <div className={s.containerLogin}>
            <div className={s.logBar}>
                <form className={s.logForm}>
                <span className={s.logFormTitle}>
                    Sign in
                </span>
                    <div className={s.divInput}>
                        <input className={s.input} placeholder='username or email'/>
                        <span className={s.focusInput}>
                    </span>
                        {/*<span className={s.hideValidate}/>*/}
                    </div>
                    <div className={s.divInput}>
                        <input className={s.input} placeholder='password'/>
                        <span className={s.focusInput}>

                    </span>
                    </div>
                    <div className={s.containerButton}>
                        <button className={s.signButton}>
                            Sign in
                        </button>
                    </div>
                    <div className={s.textCenter}>
                    <span className={s.text1}>
                        Or login with
                    </span>
                    </div>
                    <div className={s.socialClub}>
                        <a href="src/components/Header/Registration/Registration#" className={s.socialItem}>
                            <img src='https://umi.ru/images/blog/icon14-min.jpg'/>
                        </a>
                        <a href="src/components/Header/Registration/Registration#" className={s.socialItem}>
                            <img src='https://cdn-icons-png.flaticon.com/512/2875/2875404.png'/>
                        </a>
                    </div>
                    <div className={s.textCenter2}>
                        <NavLink to='/profile' className={s.signUp}>
                            Sign up
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration;