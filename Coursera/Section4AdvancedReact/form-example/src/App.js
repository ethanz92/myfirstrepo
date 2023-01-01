import "./App.css";
import { useState } from "react";

function App() {
  const [score, setScore] = useState("10"); //默认值10分
  const [comment, setComment] = useState(""); //默认值空字符串

  const handleSubmit = (e) => {
    e.preventDefault(); //禁止自动刷新
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the experience was poor");
      return;
    }
    console.log("Form submitted!");
    setComment(""); //good practice to reset to default state
    setScore("10"); //good practice to reset to default state
  };

  return (
    /* 在form这里添加onSubmit handler */
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className="Field">
            <label>Score: {score}⭐️ </label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) =>
                setScore(e.target.value)
              } /* onChange实时更新score */
            />
          </div>
          <div className="Field">
            <label>Comment: </label>
            <textarea
              value={comment}
              onChange={(e) =>
                setComment(e.target.value)
              } /* onChange实时更新comment */
            />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
