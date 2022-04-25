import React from "react";
import "./task.css";

const Task = ({ toDo, handleToggle }) => {
  const handleClick = (ev) => {
    ev.preventDefault();
    handleToggle(ev.target.id);
  };
  return (
    <div
      id={toDo.id}
      key={toDo.id + toDo.task}
      name="toDo"
      value={toDo.id}
      onClick={handleClick}
      className={toDo.complete ? "task-done" : "toDo"}
    >
      {toDo.task}
    </div>
  );
};

export default Task;
