import { Box } from './Box';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Transaction } from './TransactionHistory/TransactionHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        background="#e7ecf2"
      >
        <Profile key={user.tag} user={user} />
        <Statistics key="Upload-stats" title="Upload stats" data={data} />
        <FriendList key="Friend-list" friends={friends} />
        <Transaction key="Transaction" transactions={transactions} />
      </Box>
    </>
  );
};
