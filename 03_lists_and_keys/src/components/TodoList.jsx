import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a project" },
  ]);
  const [count, setCount] = useState(0);

  const addTask = () => {
    const newTask = { id: Date.now(), text: "New Task" + count };
    setCount(count + 1);
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    const getTask = tasks.filter((task) => task.id !== id);
    setTasks(getTask);
  };

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text} <button onClick={() => removeTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
