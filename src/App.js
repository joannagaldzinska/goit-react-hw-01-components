import Users from "./components/User/User";
import user from "./components/User/user.json"
// import Stats from "./components/Statistics/Stats";
import statisticalData from "./components/Statistics/statistical-data.json";
import StatsList from "./components/Statistics/StatsList";
import Section from "./components/Statistics/Section"
import FriendsList from "./components/Friends/FriendsList"
import friends from "./components/Friends/friends.json";
import TransactionHistory from "./components/Transactions/TransactionHistory"
import transactions from "./components/Transactions/transactions.json"

export default function App() {
    return <div>

        <Users 
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    views={user.stats.views}
    likes={user.stats.likes}
    followers={user.stats.followers}
/>

        <Section title="Upload stats">
            <StatsList items={statisticalData}/>
        </Section>

        <FriendsList friends={friends} />

        <TransactionHistory items={transactions}
        />
        
    </div>
}