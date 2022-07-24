import React, { useState } from "react";
import { useList } from "../../hooks/useList";

function TodoList() {
  const tasks = useList([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    tasks.push(newTask);
    setNewTask("");
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit">Create Task</button>
      </form>
      {tasks.isEmpty() ? (
        <p>Empty list</p>
      ) : (
        <ul>
          {tasks.value.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                onClick={() => tasks.remove(index)}
                defaultChecked={false}
              />
              {task}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
