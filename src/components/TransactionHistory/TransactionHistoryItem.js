import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistoryItem(props) {
  const { type, amount, currency } = props;
  return (
    <tr>
      <td className={css.tableItem}>{type}</td>
      <td className={css.tableItem}>{amount}</td>
      <td className={css.tableItem}>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
