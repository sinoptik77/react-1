import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div>
        <NavLink to={'/dialogs/' + props.id}
                 className={(dialog) => (dialog.isActive ? s.active : s.item)}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div className= {s.item}>
        <div>{props.message}</div>
    </div>
}
const Dialogs = (props) => {
    return <div className={s.dialogs}>
        <div className={s.dialogItem}>
            <DialogItem id='1' name='Nastya'/>
            <DialogItem id='2' name='Vlad'/>
            <DialogItem id='3' name='Zhenya'/>
            <DialogItem id='4' name='Misha'/>
            <DialogItem id='5' name='Sasha'/>
        </div>
        <div className={s.messageItem}>
            <Message message='Yo'/>
            <Message message='Hi, how a u?'/>
            <Message message='Wasup?'/>
        </div>
    </div>
}

export default Dialogs;