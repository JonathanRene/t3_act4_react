import React from 'react';

function TaskStats({ total, completed }) {
  return (
    <div style={{ display: 'flex', gap: '20px', fontWeight: 'bold', marginBottom: '15px' }}>
      <p>Total: {total}</p>
      <p>Completadas: {completed}</p>
    </div>
  );
}

export default TaskStats;