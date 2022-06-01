import s from "./Post.module.css";
import { useDispatch } from "react-redux";
import { addLikeActionCreator } from "../../../../../redux/profileReducer";
import { ReactComponent as Like } from "../../../../../like.svg";

const Post = (props) => {
  const dispatch = useDispatch();

  let addLikeClick = () => {
    dispatch(addLikeActionCreator(props.index));
  };

  return (
    <div className={s.item}>
      <img src="https://mena.org.ua/wp-content/uploads/2014/03/avatar.png" />
      <div>{props.message}</div>
      <div className={s.like}>
        <Like
          className={
            s.likeButton + " " + (props.likeCount ? s.likeButtonActive : "")
          }
          onClick={addLikeClick}
        />
      </div>
    </div>
  );
};
export default Post;
