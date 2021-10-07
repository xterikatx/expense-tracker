import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export function AddNewTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      id: new Date().getTime(),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Adicionar nova transação</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label for="text">Descrição</label>
          <input
            type="text"
            id="text"
            placeholder="Escreva aqui..."
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div className="form-control">
          <label for="amount">
            Quantia <br />
            (negativo - gastou, positivo - entrou grana)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Digite um valor..."
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <button className="btn">Adicionar</button>
      </form>
    </>
  );
}
