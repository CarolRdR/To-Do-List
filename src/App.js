import "./App.css";
import Header from "./components/Header.js";
import ToDoList from "./components/toDoList.js";
import ToDoForm from "./components/toDoForm.js";
import data from "./data.json";
import React, { useState } from "react";

function App() {
  const [toDoList, setToDoList] = useState(data);

  const addTask = (newTask) => {
    let add = [...toDoList];
    add = [...add, { id: toDoList.length + 1, task: newTask, complete: false }];
    setToDoList(add);
  };

  const handleToggle = (id) => {
    let toggle = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(toggle);
  };

  const handleDelete = () => {
    let deleted = toDoList.filter((task) => {
      return !task.complete;
    });

    setToDoList(deleted);
  };

  return (
    <div className="App">
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
