
import FriendList from './FriendList'

export default function FriendListItem({ friends }) {
    return (
        <ul>
            {friends.map(friend => (
                <FriendList
             key={friend.id}
               avatar={friend.avatar}
               name={friend.name}
               isOnline={friend.isOnline}  />
       ))  
}
        </ul>)
    
}
