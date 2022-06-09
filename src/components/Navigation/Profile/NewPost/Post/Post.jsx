import s from './Post.module.css'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
import { addLikeActionCreator, deletePostActionCreator } from '../../../../../redux/profileReducer'
import { ReactComponent as Like } from '../../../../../like.svg'

const Post = (props) => {
  const dispatch = useDispatch()

  let addLikeClick = () => {
    dispatch(addLikeActionCreator(props.index))
  }

  let deletePost = () => {
    dispatch(deletePostActionCreator(props.index))
  }

  return (
    <div className={s.item}>
      <img src="https://mena.org.ua/wp-content/uploads/2014/03/avatar.png"/>
        <div>{props.message}</div>
        <div className={s.like}>
          <Like
            className={
              s.likeButton + ' ' + (props.likeCount ? s.likeButtonActive : '')
            }
            onClick={addLikeClick}
          />
        </div>
        <button className={s.deleteButton}>
          <DeleteIcon className={s.deleteButtonImage} onClick={deletePost}/>
        </button>
    </div>
);
};
export default Post;
