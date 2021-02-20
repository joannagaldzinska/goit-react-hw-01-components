import PropTypes from 'prop-types';
import defaultUserImage from '../User/default-user-image.png'
import s from "./Friends.module.css";

export default function Friend(props) {
    const {id, isOnline, name , avatar = defaultUserImage} = props;

    return (
        
    <li className={s.item}  key={id}>
        <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p className={s.name}>{name}</p>
    </li>
    )
}

Friend.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
}