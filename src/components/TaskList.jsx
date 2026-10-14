import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleComplete, deleteTask }) {
  if (tasks.length === 0) {
    return <p>No hay tareas pendientes. ¡Buen trabajo!</p>;
  }

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {/* Aquí usamos .map() para iterar sobre el arreglo y renderizar componentes */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;