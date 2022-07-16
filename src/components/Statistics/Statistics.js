import StatisticsList from './StatisticList';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.section}>
      {title && <h2>{title}</h2>}
      <ul className={css.list}>
        {stats.map(item => (
          <li className={css.item} key={item.id}>
            <StatisticsList label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
