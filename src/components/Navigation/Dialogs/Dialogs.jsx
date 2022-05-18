import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    const DialogItem = (props) => {
        return <div>
            <NavLink to={'/dialogs/' + props.id}
                     className={(dialog) => (dialog.isActive ? s.active : s.item)}>{props.name}</NavLink>
        </div>
    }

    const MessageItem = (props) => {
        return <div className={s.item}>
            <div>{props.message}</div>
        </div>
    }
    let dialogsElements = props.dialogItem.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messagesElements = props.messageItem.map(m => <MessageItem message={m.message}/>)
    return <div className={s.dialogs}>
        <div className={s.dialogItem}>
            {dialogsElements}
        </div>
        <div className={s.messageItem}>
            {messagesElements}
        </div>
    </div>
}

export default Dialogs;