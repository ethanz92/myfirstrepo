import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      date: new Date(2022, 12, 20),
      title: "Car Insurance",
      amount: "$1500",
    },
    {
      date: new Date(2022, 12, 25),
      title: "Toilet Paper",
      amount: "$1.5",
    },
    {
      date: new Date(2022, 12, 30),
      title: "Myki top up",
      amount: "$20",
    },
  ];

  const onAddNewExpense = newExpense => {
    console.log('From App: ', newExpense);
  }

  return (
    <div className="App">
      <NewExpense addNewExpense={onAddNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
