import s from './Profile.module.css';
import Post from "./NewPost/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./NewPost/NewPost";

const Profile = (props) => {
    let postElements = props.post.map(p => <Post key={p.message} message={p.message} likeCount={p.likeCount}/>)
    let descriptionElements = props.description.map(d => <ProfileInfo description={d.description}/>)
    return <div className={s.content}>
        {descriptionElements}
        <NewPost dispatch={props.dispatch}
                 newPostText={props.newPostText}/>
        {postElements}
    </div>
}
export default Profile;