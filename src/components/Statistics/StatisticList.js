import Statistics from './Statistics'

export default function StatisticsList({ data }) {
    return (
        <section style={{
    width: '500px',
    height: '250px',
    display: 'block',
    margin: '0 auto',
      }}>
            <h2 style={{
    display: 'flex',
    justifyContent: 'center',

            }}>Upload stats</h2>
        <ul style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        listStyle: 'none',
        color: '#010101',
        padding: '0'
      }}>
            {data.map(item => (
                <Statistics
             key={item.id}
               label={item.label}
               percentage={item.percentage} />
       ))  
}
            </ul>
            </section>)
    
}
