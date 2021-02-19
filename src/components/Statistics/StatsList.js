import Stats from "./Stats";


export default function StatsList ({ items }) {
    return (
      <ul>
            {items.map(item => (
            <li key={item.id}> 
            <Stats 
                label={item.label}
                percentage={item.percentage}
            />
        </li>
        ))}
      </ul>
    )
}
