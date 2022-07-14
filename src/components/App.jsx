import Profile from './Profile/Profile';
import user from '../path/user.json';

import StatisticsList from './Statistics/StatisticList'
import data from '../path/data.json'

import FriendListItem from './Friends/FriendListItem';
import friends from '../path/friends.json'

import TransactionHistoryItem from './TransactionHistory/TransactionHistoryItem';
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
        
      
  <StatisticsList data={data} />
      <FriendListItem friends={friends} />
      <TransactionHistoryItem transactions={transactions}/>
      
    </div>
  );
};


