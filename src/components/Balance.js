import { useSelector } from "react-redux";
import { numberWithCommas } from "../utils/thousandSeparator";

export default function Balance() {
  const { transactions } = useSelector((state) => state.transaction);
  const calculation = () => {
    let income = 0;
    transactions.forEach(transaction => {
        const {type , amount} = transaction;
        if(type === "income") {
            income += amount;
        }else {
            income -= amount;
        }
    });

    return numberWithCommas(income);
  }
  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳</span>
        <span>{transactions.length > 0 ? calculation() : 0}</span>
      </h3>
    </div>
  );
}
