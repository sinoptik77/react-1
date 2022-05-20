import s from "./NewPost.module.css";
import React from "react";

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return <div className={s.newPost}>
        <div>My posts</div>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add Post</button>
    </div>
}

export default NewPost;