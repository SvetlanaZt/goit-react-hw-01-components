import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'


export default function TransactionHistory(props) {
    const { type, amount, currency } = props;
    return (
  <tbody className={css.tableItems }>
    <tr>
      <td className={css.tableItem }>{type}</td>
      <td className={css.tableItem }>{amount}</td>
      <td className={css.tableItem }>{currency}</td>
    </tr>
        </tbody>
            
    )
}

TransactionHistory.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}