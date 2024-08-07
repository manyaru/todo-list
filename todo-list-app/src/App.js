// src/App.js
import React, { useState, useEffect } from 'react';
import TaskForm from './Taskform';
import TaskList from './Tasklist';
import { loadTasks, saveTasks } from './Localstorage';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(loadTasks());
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (name, description) => {
    setTasks([
      ...tasks,
      { id: Date.now(), name, description, completed: false },
    ]);
  };

  const editTask = (id, name, description) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name, description } : task
      )
    );
    setTaskToEdit(null);
  };

  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
      <TaskList
        tasks={tasks}
        onEdit={handleEdit}
        onDelete={deleteTask}
        onComplete={completeTask}
      />
    </div>
  );
};

export default App;
