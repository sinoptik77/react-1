import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return <div className={s.profileItem}>
    <div className={s.profileInfo}>
      <div className={s.ava}>
        <div className={s.avaD}>
          <img src="https://mena.org.ua/wp-content/uploads/2014/03/avatar.png"/>
          <div className={s.description}>
            {props.description}
          </div>
        </div>
        {/*<form method="post" encType="multipart/form-data">
          <div>
            <label htmlFor="profile_pic">Choose file to upload</label>
            <input type="file" id="profile_pic" name="profile_pic"
                   accept=".jpg, .jpeg, .png"/>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>*/}
      </div>
    </div>
  </div>
}

export default ProfileInfo


