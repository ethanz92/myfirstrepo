import { useState, useEffect } from "react";
import "./App.css";

function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: "", by: "" });
  const [toggle, setToggle] = useState(false);

  const changeHandler = (e) => {
    //update formData when user makes inputs
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    //add input data to allGoals array and reset the form
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });
    if (!toggle) setToggle(!toggle);
  };

  useEffect(() => {
    document.title = toggle ? "Goals entered" : "Please enter goals";
  }, [toggle]);

  return (
    <div>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="goal"
          placeholder="Goal"
          value={formData.goal}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="by"
          placeholder="By..."
          value={formData.by}
          onChange={changeHandler}
        />
        <button>Submit Goal</button>
      </form>
    </div>
  );
}

function ListOfGoals(props) {
  //display a list of goals after clicking submit
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is to {g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const [allGoals, updateAllGoals] = useState([]);

  const addGoal = (goal) => {
    updateAllGoals([...allGoals, goal]);
  };

  return (
    <div className="App">
      <GoalForm onAdd={addGoal} allGoals={allGoals} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}
