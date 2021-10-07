import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>História</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction
            title={transaction.text}
            value={transaction.amount}
            id={transaction.id}
            key={transaction.id}
          />
        ))}
      </ul>
    </>
  );
}
