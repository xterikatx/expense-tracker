import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ title, value, id }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = value < 0 ? "-" : "+";
  return (
    <li className={value < 0 ? "minus" : "plus"}>
      {title}
      <span>
        {sign}R${Math.abs(value)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
    </li>
  );
}

export default Transaction;
