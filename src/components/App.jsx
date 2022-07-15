import Profile from './Profile/Profile';
import user from '../path/user.json';

import Statistics from './Statistics/Statistics'
import data from '../path/data.json'

import FriendList from './Friends/FriendList';
import friends from '../path/friends.json'

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../path/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
        stats={user.stats}/>
        
      
      <Statistics title="Upload stats" stats={data} />
  <FriendList friends={friends} />
    <TransactionHistory transactions={transactions}/>
      
    </div>
  );
};


