import s from './Profile.module.css';
import Post from "./Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./NewPost/NewPost";

const Profile = () => {
    return <div className={s.content}>
        <ProfileInfo/>
        <NewPost/>
        <Post message="Hi, it's my first post!"/>
        <Post message="What a wonderful world"/>
    </div>
}
export default Profile;