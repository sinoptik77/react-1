import s from "./Dialogs.module.css";
import React, { memo } from "react";
import {
  addMessageActionCreator,
  messageOnChangeActionCreator,
} from "../../../redux/dialogsReducer";
import { useDispatch, useSelector } from "react-redux";
import MessageItem from "./DialogsMessages/DialogsMessages";
import DialogItem from "./DialogsUsers/DialogsUsers";

const Dialogs = (props) => {
  const { dialogItem, messageItem, newMessageText } = useSelector((state) => ({
    dialogItem: state.dialogsReducer.dialogItem,
    messageItem: state.dialogsReducer.messageItem,
    newMessageText: state.dialogsReducer.newMessageText,
  }));

  const dispatch = useDispatch();

  let addMessage = () => {
    dispatch(addMessageActionCreator());
  };

  let messageOnChange = (event) => {
    let text = event.target.value;
    let action = messageOnChangeActionCreator(text);
    dispatch(action);
  };

  let dialogsElements = dialogItem?.map((d) => (
    <DialogItem key={d.id} id={d.id} name={d.name} />
  ));
  let messagesElements = messageItem?.map((m) => (
    <MessageItem key={m.id} message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>{dialogsElements}</div>
      <div className={s.messageItem}>
        {messagesElements}
        <textarea onChange={messageOnChange} value={newMessageText} />
        <button className={s.button} onClick={addMessage}>
          Add Message
        </button>
      </div>
    </div>
  );
};

export default memo(Dialogs);
