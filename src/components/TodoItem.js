import React, { useState } from 'react';

const TodoItem = ({ todo, deleteTodo, toggleCompletion, editTodo, toggleEditMode }) => {
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      editTodo(todo.id, editText);
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {todo.isEditing ? (
        <form onSubmit={handleEdit}>
          <input 
            type="text" 
            value={editText} 
            onChange={(e) => setEditText(e.target.value)} 
            className="edit-input"
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => toggleEditMode(todo.id)}>Cancel</button>
        </form>
      ) : (
        <>
          <span onClick={() => toggleCompletion(todo.id)}>
            {todo.text}
          </span>
          <div>
            <button onClick={() => toggleEditMode(todo.id)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
