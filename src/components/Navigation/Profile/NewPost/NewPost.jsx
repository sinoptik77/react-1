import s from "./NewPost.module.css";
import React from "react";
import {addPostActionCreator, postOnChangeActionCreator} from "../../../../redux/state";


const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let postOnChange = () => {
        let text = newPostElement.current.value;
        let action = postOnChangeActionCreator(text);
        props.dispatch(action);
    }

    return <div className={s.newPost}>
        <div>My posts</div>
        <textarea onChange={postOnChange} ref={newPostElement} value={props.newPostText}/>
        <button onClick={addPost}>Add Post</button>
    </div>
}

export default NewPost;