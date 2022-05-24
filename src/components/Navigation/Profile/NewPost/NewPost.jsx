import s from "./NewPost.module.css";
import React, {memo} from "react";
import {addPostActionCreator,postOnChangeActionCreator} from "../../../../redux/profileReducer";


const NewPost = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let postOnChange = (event) => {
        let text = event.target.value;
        let action = postOnChangeActionCreator(text);
        props.dispatch(action);
    }

    return <div className={s.newPost}>
        <div>My posts</div>
        <textarea onChange={postOnChange} value={props.newPostText}/>
        <button onClick={addPost}>Add Post</button>
    </div>
}

export default memo(NewPost);