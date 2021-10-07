import React from "react";

export function AddNewTransaction() {
  return (
    <>
      <h3>Adicionar nova transação</h3>
      <form id="form">
        <div class="form-control">
          <label for="text">Descrição</label>
          <input type="text" id="text" placeholder="Escreva aqui..." />
        </div>
        <div class="form-control">
          <label for="amount">
            Quantia <br />
            (negativo - gastou, positivo - entrou grana)
          </label>
          <input type="number" id="amount" placeholder="Digite um valor..." />
        </div>
        <button class="btn">Adicionar</button>
      </form>
    </>
  );
}
