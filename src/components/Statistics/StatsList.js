import Stats from "./Stats";
import s from './Stats.module.css'


export default function StatsList ({ items }) {
    return (
      <ul className={s.list}>
            {items.map(item => (
            <Stats 
                label={item.label}
                percentage={item.percentage}
            />
        ))}
      </ul>
    )
}

// const Statistics = ({stats}) => (
//   <ul className={styles.statList} >
//     {stats.map(stat => (
      
//       <li 
//       key={stat.id}
//       className={styles.item}
//       style={{ backgroundColor: getRandomColor() }}
//       >
//         <span className={styles.label}>{stat.label}</span>
//         <span className={styles.percentage}>{stat.percentage}</span>
//       </li>

//       ))}
    
//   </ul>
// );

// Statistics.propTypes = {
// stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
// };
