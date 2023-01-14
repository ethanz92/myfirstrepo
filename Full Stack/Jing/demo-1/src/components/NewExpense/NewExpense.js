import "../../css/NewExpense/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const onAddNewExpense = (newExpense) => {
    console.log("From NewExpense: ", newExpense);
    props.addNewExpense(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddNewExpense={onAddNewExpense} />
    </div>
  );
}

export default NewExpense;
