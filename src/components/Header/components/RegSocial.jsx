import s from "../../layouts/AuthLayout/AuthLayout.module.css";
import clsx from "clsx";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const RegSocial = ({containerClassName}) => {
    return <div className={clsx(s.socialClub, containerClassName)}>
        <a className={s.socialItem}>
            <FacebookIcon/>
        </a>
        <a className={s.socialItem}>
            <GoogleIcon/>
        </a>
    </div>
}

export default RegSocial;
