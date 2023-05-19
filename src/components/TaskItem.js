import React, { useState } from "react";
import {MdOutlineDelete} from 'react-icons/md'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'
import './styles.css'


function TaskItem({ task, onEdit, onDelete, onToggle }) {
 
 
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.name);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
    setEditedTaskName(task.name);
  };

  const handleInputChange = (e) => {
    setEditedTaskName(e.target.value);
  };

  const handleEdit = () => {
    onEdit(task.id, editedTaskName);
    setIsEditing(false);
  };

  return (
   <div className="table">
    <tr>
      <td>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="check"
        />
      </td>
      <td className={task.completed ? "completed" : ""}>
        {isEditing ? (
          <input
            type="text"
            value={editedTaskName}
            onChange={handleInputChange}
            className="edit"/>
        ) : (
          task.name
        )}
      </td>
      </tr>
      <tr>
      <td>
        {isEditing ? (
          <button onClick={handleEdit} className="save"><AiOutlineCheckCircle/></button>
        ) : (
          <button onClick={handleToggleEdit} className="update"><BiEditAlt/></button>
        )}
      </td>
      <td>
        <button onClick={() => onDelete(task.id)} className="delete"><MdOutlineDelete/></button>
      </td>
      </tr>
    
    </div>
    
  );
}

export default TaskItem