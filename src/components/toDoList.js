import React from "react";
import Task from "./task.js";
import "./toDoList.css";

const ToDoList = ({ toDoList, handleToggle, handleDelete }) => {
  return (
    <div className="todo-list">
      {toDoList.map((toDo) => {
        return (
          <Task
            toDo={toDo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        );
      })}
      <button className="button-clear-done" onClick={handleDelete}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
