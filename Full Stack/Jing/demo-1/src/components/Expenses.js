import "../css/Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const expenses = props.expenses;

  return (
    <div className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
