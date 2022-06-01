import s from "./Profile.module.css";
import Post from "./NewPost/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./NewPost/NewPost";
import { useSelector } from "react-redux";

const Profile = (props) => {
  const { post, description, username, email } = useSelector((state) => ({
    post: state.profileReducer.post,
    description: state.profileReducer.description,
    username: state.usersReducer.user?.username,
    email: state.usersReducer.user?.email,
  }));
  console.log("username", username);

  let postElements = post?.map((p, index) => (
    <Post
      key={index}
      index={index}
      message={p.message}
      likeCount={p.likeCount}
    />
  ));

  let descriptionElements = description?.map((d) => (
    <ProfileInfo key={d.id} description={d.description} />
  ));

  return (
    <div className={s.content}>
      {username}
      {email}
      {descriptionElements}
      <NewPost />
      {postElements}
    </div>
  );
};
export default Profile;
