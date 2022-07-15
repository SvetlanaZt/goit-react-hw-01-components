import TransactionHistoryItem from './TransactionHistoryItem';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {transactions.map(transaction => (
        <tbody key={transaction.id} className={css.tableItems}>
          <TransactionHistoryItem
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        </tbody>
      ))}
    </table>
  );
}
