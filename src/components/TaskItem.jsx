import React from 'react';

function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <li style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      marginBottom: '10px',
      textDecoration: task.completed ? 'line-through' : 'none',
      color: task.completed ? 'gray' : 'black'
    }}>
      <span 
        onClick={() => toggleComplete(task.id)} 
        style={{ cursor: 'pointer', flexGrow: 1 }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} style={{ background: 'red', color: 'white', border: 'none', borderRadius: '4px', padding: '5px 10px' }}>
        Eliminar
      </button>
    </li>
  );
}

export default TaskItem;