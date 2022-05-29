import s from "./NewPost.module.css";
import React, {memo} from "react";
import {addPostActionCreator, postOnChangeActionCreator} from "../../../../redux/profileReducer";
import {useDispatch, useSelector} from "react-redux";


const NewPost = () => {

    const dispatch = useDispatch()

    const {newPostText} = useSelector(state => ({
        newPostText: state.profileReducer.newPostText,
    }))

    let addPost = () => {
        dispatch(addPostActionCreator());
    }

    let postOnChange = (event) => {
        let text = event.target.value;
        let action = postOnChangeActionCreator(text);
        dispatch(action);
    }

    return <div className={s.newPost}>
        <div>My posts</div>
        <textarea onChange={postOnChange} value={newPostText}/>
        <button className={s.button} onClick={addPost}>Add Post</button>
    </div>
}

export default memo(NewPost);