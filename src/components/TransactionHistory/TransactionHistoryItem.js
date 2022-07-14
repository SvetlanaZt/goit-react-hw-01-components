
import TransactionHistory from './TransactionHistory'

export default function TransactionHistoryItem({ transactions }) {
    return (
        <table style={{
            margin: '0 auto',
      }}>
            <thead style={{
            backgroundColor:'lightblue',
      }}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
            {transactions.map(transaction => (
                <TransactionHistory
             key={transaction.id}
               type={transaction.type}
               amount={transaction.amount}
               currency={transaction.currency}  />
       ))  
}
        </table>)
    
}
