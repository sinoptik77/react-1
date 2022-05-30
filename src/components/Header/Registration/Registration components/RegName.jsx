import s from "../Registration.module.css";


const RegName = () => {
    return <div className={s.divInput}>
        <input className={s.input} onBlur={() => console.log('blur')} placeholder='username or email'/>
        <span className={s.focusInput}>
                    </span>
    </div>
}

export default RegName;