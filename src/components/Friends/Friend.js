import PropTypes from 'prop-types';
import defaultUserImage from '../User/default-user-image.png'

export default function Friends(props) {
    const {isOnline, name , avatar = defaultUserImage} = props;

    return (
    <li className="item">
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
    </li>
    )
}

Friends.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    status: PropTypes.bool.isRequired,
}