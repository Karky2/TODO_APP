import React from "react";
 import TaskItem from "./TaskItem";
 import {MdOutlineCancel} from 'react-icons/md'
 import './styles.css'
 function TaskList({ tasks, onDelete, onEdit, onToggle }) {
  return (
   <div className="table">
     
       <table> 
       <h2>Your Tasks</h2>

      <tbody>       
    {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggle={onToggle}
            className="list"
          />
        ))}

      </tbody>
    </table>
    </div>
  );
}
export default TaskList