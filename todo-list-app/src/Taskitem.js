// src/TaskItem.js
import React from 'react';

const TaskItem = ({ task, onEdit, onDelete, onComplete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onComplete(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
    </div>
  );
};

export default TaskItem;
