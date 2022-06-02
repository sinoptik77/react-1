import s from "../../layouts/AuthLayout/AuthLayout.module.css";
import clsx from "clsx";

const RegSocial = ({containerClassName}) => {
    return <div className={clsx(s.socialClub, containerClassName)}>
        <a className={s.socialItem}>
            <img src='https://umi.ru/images/blog/icon14-min.jpg'/>
        </a>
        <a className={s.socialItem}>
            <img src='https://cdn-icons-png.flaticon.com/512/2875/2875404.png'/>
        </a>
    </div>
}

export default RegSocial;
