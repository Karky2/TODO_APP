import React ,{useState}from "react";
import  TaskForm from "./components/TaskForm";
import  TaskList from "./components/TaskList.jsx";
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (name) => {
    const newTask = {
      id: Date.now(),
      name,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newName) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, name: newName } : task
      )
    );
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const clearCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "incomplete") {
      return !task.completed;
    }
    return true;
  });

  return (
    <div>
      <h1>ToDo List</h1>
      <TaskForm onAddTask={addTask} />
      <div>
        <label>Filter: </label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onEdit={editTask}
        onToggle={toggleTask}
      />
      <button onClick={clearCompletedTasks} className="complete">Clear Completed Tasks</button>
    </div>
  );
}

export default App;