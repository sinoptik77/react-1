import s from './Post.module.css';

const Post = (props) => {
    return <div className= {s.item}>
        <img src='https://mena.org.ua/wp-content/uploads/2014/03/avatar.png'/>
        <div>{props.message}</div>
    </div>
}
export default Post;