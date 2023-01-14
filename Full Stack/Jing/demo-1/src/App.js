import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const initialExpenses = [
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

  const [expenses, setExpenses] = useState(initialExpenses);

console.log('expenses', expenses);

  const onAddNewExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    //async 这两行会同时进行所以clg出来只有3个
    console.log(expenses);
  };

  return (
    <div className="App">
      <NewExpense addNewExpense={onAddNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
