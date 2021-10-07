import "./App.css";
import { AddNewTransaction } from "./components/AddNewTransaction";
import { Balance } from "./components/Balance";
import { CardExpenses } from "./components/CardExpenses";
import { Header } from "./components/Header";
import { TransactionList } from "./components/TransactionList";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <CardExpenses />
        <TransactionList />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
