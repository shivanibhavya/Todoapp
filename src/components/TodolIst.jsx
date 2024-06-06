import React from 'react';
import './TodoList.css';

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleTodo(index)}>
              {todo.text}
            </span>
            <button className="delete" onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
