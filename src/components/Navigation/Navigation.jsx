import s from './Navigation.module.css';

const Navigation = () => {
    return <nav className={s.navigation}>
        <div>
            <a href='my-profile' className={s.item}>Profile</a>
        </div>
        <div>
            <a href='my-messages' className={s.item}>Messages</a>
        </div>
        <div>
            <a href='news' className={s.item}>News</a>
        </div>
        <div>
            <a href='my-music' className={s.item}>Music</a>
        </div>
        <div>
            <a href='settings' className={s.item}>Settings</a>
        </div>
    </nav>
}
export default Navigation;