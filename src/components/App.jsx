import { GlobalStyle } from './GlobalStyle'
import { Box } from './Box'
import { Profile } from './Profile/Profile'
import { Statistics } from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'
import { Transaction } from './TransactionHistory/TransactionHistory'
import user from 'data/user.json'
import data from 'data/data.json'
import friends from 'data/friends.json'
import transactions from 'data/transactions.json'

export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
      <Profile key={user.tag} user={user}
      />
      </Box>  
      
    
    // 
//          <section class="statistics">
//    <h2 class="title">Upload stats</h2>
//    <ul class="stat-list">
//            {data.map((dat) => (
//         <Statistics key={dat.id} title="Upload stats" stats={dat} />))
//         }
//           </ul>
//       </section>

//       <ul class="friend-list">
//         {friends.map((friend) => (
//           <FriendList key={friend.id} list={friend} />
// ))}
//       </ul>
      
// <table class="transaction-history">
//   <thead>
//     <tr>
//       <th>Type</th>
//       <th>Amount</th>
//       <th>Currency</th>
//     </tr>
//   </thead>
//         <tbody>

//           {transactions.map((transaction) => (
//             <Transaction key={transaction.id} transaction={transaction} />
//       ))}

//   </tbody>
// </table>

    // </div>


  );
};
