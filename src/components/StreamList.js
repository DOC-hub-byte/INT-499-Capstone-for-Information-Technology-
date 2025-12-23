import React, { useState } from "react";

function StreamList() {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (editingId !== null) {
      setItems(
        items.map((item) =>
          item.id === editingId ? { ...item, text: title } : item
        )
      );
      setEditingId(null);
    } else {
      setItems([
        ...items,
        { id: Date.now(), text: title, completed: false }
      ]);
    }

    setTitle(""); // clear input after submit
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setTitle(item.text);
    setEditingId(item.id);
  };

  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  return (
    <div className="page">
      <h1>StreamList</h1>
      <p>Enter a movie or TV show you want to stream:</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
        <button type="submit">
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      <ul className="stream-list">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.completed ? "completed" : ""}
          >
            <span onClick={() => toggleComplete(item.id)}>
              {item.text}
            </span>

            <div className="icons">
              <span
                className="material-icons"
                onClick={() => handleEdit(item)}
              >
                edit
              </span>
              <span
                className="material-icons"
                onClick={() => handleDelete(item.id)}
              >
                delete
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
