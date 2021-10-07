import "./App.css";
import { AddNewTransaction } from "./components/AddNewTransaction";
import { Balance } from "./components/Balance";
import { CardExpenses } from "./components/CardExpenses";
import { Header } from "./components/Header";
import { TransactionList } from "./components/TransactionList";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <CardExpenses />
        <TransactionList />
        <AddNewTransaction />
      </div>
    </>
  );
}

export default App;
