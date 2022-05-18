import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return <div className={s.profileItem}>
        <div>
            <img src='https://steamuserimages-a.akamaihd.net/ugc/910171378794638436/06020B12BDD813D5906D9FE38BA5C12B07BB4CF6/'/>
        </div>
        <div className={s.profileInfo}>
            <div className={s.ava}>
                <img src='https://mena.org.ua/wp-content/uploads/2014/03/avatar.png'/>
            </div>
            <div className={s.description}>
                {props.description}
            </div>
        </div>
    </div>
}

export default ProfileInfo;