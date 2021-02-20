import Transactions from "./Transactions";
import s from "./Transactions.module.css";

export default function TransactionHistory(props) {
    const {items} = props;

    return(

        <table className={s.table}>
  <thead>
    <tr>
      <th className={s.top}>Type</th>
      <th className={s.top}>Amount</th>
      <th className={s.top}>Currency</th>
    </tr>
  </thead>
        <tbody>
        {items.map(transaction => (
            <Transactions 
            
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
            />
        ))}
        </tbody>
        </table>
    )

}