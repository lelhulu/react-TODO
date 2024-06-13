import React from 'react';
import trashIcon from './Database Project EERD update.jpg'; 

export const Todo = ({ task, deleteTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <img 
          src={trashIcon} 
          alt="Delete" 
          onClick={() => deleteTodo(task.id)} 
          style={{ cursor: 'pointer', marginLeft: '10px' }} 
        />
      </div>
    </div>
  );
};

export default Todo;
