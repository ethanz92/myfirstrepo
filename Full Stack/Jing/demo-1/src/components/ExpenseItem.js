import "../css/ExpenseItem.css";

function ExpenseItem() {
  const date = new Date();

  const month = date.toLocaleDateString("en-AU", {});

  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">Month</div>
        <div className="expense-date__year">Year</div>
        <div className="expense-date__day">Day</div>
      </div>
      <div className="expense-item__description">
        <h2>Title</h2>
        <div className="expense-item__price">Amount</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
