import React from 'react';

function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4 rounded mb-2">
      <div
        onClick={() => toggleComplete(todo.id)}
        className={`cursor-pointer flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
      >
        {todo.text}
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        &times;
      </button>
    </div>
  );
}

export default Todo;
