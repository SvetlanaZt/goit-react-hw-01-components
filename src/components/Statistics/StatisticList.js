import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function StatisticsList({ label, percentage }) {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </>
  );
}

StatisticsList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};
