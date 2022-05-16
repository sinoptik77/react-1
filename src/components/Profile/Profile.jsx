import classes from './Profile.module.css';
import Post from "./Post/Post";

const Profile = () => {
    return <div className= {classes.content}>
        <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
        <div>ava + description</div>
        <div>My posts</div>
        <div>New posts</div>
        <Post message='Hi, how a u?'/>
        <Post message="It's my first message"/>
    </div>
}
export default Profile;