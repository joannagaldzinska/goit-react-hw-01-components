import Friend from "./Friend";

export default function FriendsList(props) {
    const {friends} = props;
    return(
        <ul>
            {friends.map(friend => (
                <li key={friend.id}>
                    <Friend
                    name={friend.name}
                    avatar={friend.avatar}
                    isOnline={friend.isOnline} />
                </li>
            ))}
        </ul>
    )
}