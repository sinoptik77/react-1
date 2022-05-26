import s from "../Dialogs.module.css";

const MessageItem = (props) => {
    return <div className={s.item}>
        <div>{props.message}</div>
    </div>
}

export default MessageItem