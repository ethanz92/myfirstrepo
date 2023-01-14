import "../css/ExpenseItem.css";
import { useState } from 'react';

function ExpenseItem(props) {
  const date = props.date;
  const month = date.toLocaleDateString("en-AU", { month: "long" });
  const day = date.toLocaleDateString("en-AU", { day: "2-digit" });
  const year = date.getFullYear();
  const [title, setTitle] = useState(props.title);

  // function onButtonClickHandler(e) {
  //   setTitle("updated title");
  //   console.log(e);
  // }

  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <button onClick={onButtonClickHandler}>Update Title</button> */}
    </div>
  );
}

export default ExpenseItem;
