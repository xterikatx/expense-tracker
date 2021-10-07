import React from "react";

export function TransactionList() {
  return (
    <>
      <h3>História</h3>
      <ul id="list" class="list">
        <li class="minus">
          Dinheiro <span>-R$400</span>
          <button class="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
}

