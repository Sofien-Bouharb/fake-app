import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, toggleTask } from "./features/tasks/tasksSlice";

function App() {
  const [input, setInput] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch(addTask(input));
    setInput("");
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>
              {task.text} ({task.completed ? "Completed" : "To Do"})
            </span>

            <button onClick={() => dispatch(toggleTask(task.id))}>
              Change State
            </button>

            <button onClick={() => dispatch(deleteTask(task.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
