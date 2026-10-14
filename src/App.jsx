import { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import './App.css';

function App() {
  // Estado principal que guarda el arreglo de tareas (ahora inicia completamente vacío)
  const [tasks, setTasks] = useState([]);

  // Función para agregar una nueva tarea
  const addTask = (text) => {
    const newTask = {
      id: Date.now(), // Genera un ID único simple
      text: text,
      completed: false
    };
    setTasks([...tasks, newTask]); // Actualiza el estado agregando la nueva tarea
  };

  // Función para marcar/desmarcar como completada
  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Función para eliminar tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Cálculos para las estadísticas
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <Header />
      <TaskStats total={totalTasks} completed={completedTasks} />
      <TaskForm addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        toggleComplete={toggleComplete} 
        deleteTask={deleteTask} 
      />
    </div>
  );
}

export default App;