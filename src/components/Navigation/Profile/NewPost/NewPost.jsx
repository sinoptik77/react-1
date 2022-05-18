import s from "./NewPost.module.css";

const NewPost = (props) => {
    return <div className={s.newPost}>
        <div>My posts</div>
        <textarea></textarea>
        <button>Add Post</button>
    </div>
}

export default NewPost;