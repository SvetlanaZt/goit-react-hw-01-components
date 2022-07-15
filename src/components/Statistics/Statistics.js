import StatisticsList from './StatisticList';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>
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
