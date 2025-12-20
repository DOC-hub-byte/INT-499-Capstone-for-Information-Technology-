import { useState } from "react";
import { streamListPlans } from "../data/plans";

function StreamList() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("StreamList item added:", item);
    setList([...list, item]);
    setItem("");
  };

  return (
    <div className="page">
      <h1>My StreamList</h1>
      <p>Create and manage your personal movie list.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie or show name"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />
        <button type="submit">Add to List</button>
      </form>

      <ul>
        {list.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>

      <h3>Available StreamList Plans</h3>
      <ul>
        {streamListPlans.map((plan, index) => (
          <li key={index}>
            {plan.name} – Lists: {plan.lists} – Sharing: {plan.sharing ? "Yes" : "No"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
