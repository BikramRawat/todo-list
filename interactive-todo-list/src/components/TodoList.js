import React from "react";

function TodoList(props) {
  const { completeTodo, deleteTodo } = props;
  let todoArr = props.todoArr.length > 0 ? props.todoArr : null;
  return (
    <div>
      <ul>
        {todoArr && todoArr.length > 0 ? (
          todoArr.map((el, i) => (
            <li key={el.id}>
              <div className={el["done"] ? "strike-through" : null}>
                {el.title}
              </div>
              <div>
                <input type="checkbox" onClick={() => completeTodo(el.id)} />
                <button onClick={() => deleteTodo(i)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <h1>To do list is empty : No items 🤷‍♂️ </h1>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
