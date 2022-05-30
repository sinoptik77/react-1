import s from "../Registration.module.css";


const RegPassword = () => {
    return <div className={s.divInput}>
        <input className={s.inputPassword} onBlur={() => console.log('blur')} placeholder='password'/>
        <span className={s.focusInput}>
                    </span>
    </div>
}

export default RegPassword;