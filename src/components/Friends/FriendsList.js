import Friend from "./Friend";
import s from "./Friends.module.css";

export default function FriendsList(props) {
    const {friends} = props;
    return(
        <ul className={s.list}>
            {friends.map(friend => (
                    <Friend
                    key={friend.id}
                    name={friend.name}
                    avatar={friend.avatar}
                    isOnline={friend.isOnline} />
            ))}
        </ul>
    )
}