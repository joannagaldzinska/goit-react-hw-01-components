import PropTypes from 'prop-types';
import defaultUserImage from './default-user-image.png';
import s from "./User.module.css";

export default function Users(props) {
    const { name, tag, location = 'not found', avatar = defaultUserImage, followers, likes, views} = props;
    return (
<div className={s.profile}>
  <div className={s.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={s.avatar}
    />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li className={s.stat}>
      <span className={s.label}>Followers</span>
      <span className={s.quantity}>{followers}</span>
    </li>
    <li className={s.stat}>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{views}</span>
    </li>
    <li className={s.stat}>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{likes}</span>
    </li>
  </ul>
</div>
    )
};

Users.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};