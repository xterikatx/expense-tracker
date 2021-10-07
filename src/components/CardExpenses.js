import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { helpersTransactions } from "../helpers";

export function CardExpenses() {
  const { transactions } = useContext(GlobalContext);
  const { income, expense } = helpersTransactions(transactions);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Renda</h4>
        <p id="money-plus" className="money plus">
          +R${income}
        </p>
      </div>
      <div>
        <h4>Despesa</h4>
        <p id="money-minus" className="money minus">
          -R${expense}
        </p>
      </div>
    </div>
  );
}
