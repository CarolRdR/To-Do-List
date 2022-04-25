import React, { useState } from "react";
import "./toDoForm.css";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (ev) => {
    setUserInput(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-task"
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter new task..."
      />
      <button className="button-add">Add to List</button>
    </form>
  );
};

export default ToDoForm;
