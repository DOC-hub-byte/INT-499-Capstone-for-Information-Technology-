import React, { useState } from "react";

function StreamList() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User entered:", title);
    setTitle("");
  };

  return (
    <div className="page">
      <h1>StreamList</h1>
      <p>Enter a movie or tv show you want to stream:</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default StreamList;
