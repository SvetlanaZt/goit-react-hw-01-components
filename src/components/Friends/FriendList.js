import FriendListItem from './FriendListItem';
import css from './Friends.module.css';

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <li className={css.items} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
