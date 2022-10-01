import "./styles.css";
import data from "./data";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count, 0);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 10) {
      amount = 10;
    }

    setList(data.slice(0, amount));
    console.log(amount);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs</label>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button>Generate Text</button>
      </form>
      {list.map((item, index) => (
        <article key={index}>
          <p>{item}</p>
        </article>
      ))}
    </div>
  );
}
