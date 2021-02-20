import s from "./Transactions.module.css";

export default function Transactions(props) {
    const {id, type, amount, currency} = props;

    return(

    <tr key={id}>
      <td className={s.box}>{type}</td>
      <td className={s.box}>{amount}</td>
      <td className={s.box}>{currency}</td>
    </tr>

    )
}