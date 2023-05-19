import React ,{useState}from "react";
import { AiOutlinePlus} from "react-icons/ai";
import './styles.css'
function TaskForm({ onAddTask }) {
    const [taskName, setTaskName] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (taskName.trim() !== "") {
        onAddTask(taskName);
        setTaskName("");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={taskName}
          className="task"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit" className="submit"><AiOutlinePlus/></button>
      </form>
    );
  }
  export default TaskForm