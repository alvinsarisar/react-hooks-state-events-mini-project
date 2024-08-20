import React from "react";

function Task({ text, category, handleDelete }) {
  function handleDeleteTask() {
    handleDelete(text); // Passing the task text or id for deletion
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteTask}>
        X
      </button>
    </div>
  );
}

export default Task;
