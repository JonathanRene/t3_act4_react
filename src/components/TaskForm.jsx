import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    if (text.trim() === '') return; // Evita agregar tareas vacías
    addTask(text);
    setText(''); // Limpia el input
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default TaskForm;