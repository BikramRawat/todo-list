import React, { useState } from "react";

export default function TodoItem({ completeTodo, deleteTodo, editTodo, todo }) {
  const [editMode, setEditMode] = useState(false);
  const [description, setDescription] = useState(todo.description);

  const toggleTodo = (todo) => {
    if (editMode) {
      const editedTodo = {
        ...todo,
        description: description,
      };
      console.log(editedTodo);
      editTodo(editedTodo);
    }
    setEditMode(!editMode);
  };

  return (
    <li key={todo.id}>
      {editMode ? (
        <span>
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </span>
      ) : (
        <span className={todo["done"] ? "strike-through" : null}>
          Task:- {todo.description} || Deadline:- {todo.deadline}
        </span>
      )}

      <div>
        <input type="checkbox" onClick={() => completeTodo(todo.id)} />
        <button onClick={() => toggleTodo(todo)}>
          {editMode ? "Save" : "Edit"}{" "}
        </button>
        <button onClick={() => deleteTodo(todo)}>Delete</button>
      </div>
    </li>
  );
}
