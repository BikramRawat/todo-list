import React from "react";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todoItems.map((todoItem, index) => {
          let className = todoItem.completed ? "completed-item" : "";
          return (
            <li key={todoItem.id}>
              <span className={className}>{todoItem.description}</span>
              <input
                type="checkbox"
                onChange={() => props.toggleItemComplete(todoItem.id)}
              />
              <button onClick={() => props.deleteItem(todoItem.id)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
