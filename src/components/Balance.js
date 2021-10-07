import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { helpersTransactions } from "../helpers";
export function Balance() {
  const { transactions } = useContext(GlobalContext);
  const { total } = helpersTransactions(transactions);

  return (
    <div>
      <h4>Sua balança</h4>
      <h1 id="balance">R${total}</h1>
    </div>
  );
}
