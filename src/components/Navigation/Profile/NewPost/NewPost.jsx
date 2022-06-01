import s from "./NewPost.module.css";
import React, { memo } from "react";
import {
  addPostActionCreator,
  postOnChangeActionCreator,
} from "../../../../redux/profileReducer";
import { useDispatch, useSelector } from "react-redux";

const NewPost = () => {
  const dispatch = useDispatch();

  const { newPostText } = useSelector((state) => ({
    newPostText: state.profileReducer.newPostText,
  }));

  const addPost = () => {
    dispatch(addPostActionCreator());
  };

  const postOnChange = (event) => {
    const text = event.target.value;
    const action = postOnChangeActionCreator(text);
    dispatch(action);
  };

  return (
    <div className={s.newPost}>
      <div className={s.text}>My posts</div>
      <div className={s.textArea}>
        <textarea
          className={s.textAreaStyle}
          onChange={postOnChange}
          value={newPostText}
          placeholder="New post"
        />
      </div>
      <button className={s.button} onClick={addPost}>
        Add Post
      </button>
    </div>
  );
};

export default memo(NewPost);
