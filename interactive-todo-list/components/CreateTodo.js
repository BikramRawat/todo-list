import React from "react";
// import { ReactDOM } from "react-dom";
import { useState } from "react";
import TodoList from "./TodoList";
import swal from "sweetalert";
import Counter from "./Counter";

export default function CreateTodo() {
  const [todo, setTodo] = useState({ title: "", done: false });
  const [todoArr, setTodoArr] = useState([]);

  const handleChange = (event) => {
    let { value } = event.target;
    let obj = {};
    obj["title"] = value;
    obj["done"] = false;
    obj["id"] = Date.now();
    setTodo(obj);
  };

  const createTodo = (event) => {
    const { name } = event.target;
    if (event.key === "Enter" || name === "addTodo") {
      if (todo.title !== "") {
        const updatedTodoArray = [todo, ...todoArr];
        console.log(updatedTodoArray);
        setTodoArr(updatedTodoArray);
        setTodo({ title: "", done: false });
      } else {
        swal("Oops", "Please write todo first", "error");
      }
    }
  };

  const completeTodo = (i) => {
    const updatedTodoArray = [...todoArr];
    const index = updatedTodoArray.findIndex((todo) => todo.id === i);
    if (updatedTodoArray[index]["done"] !== true) {
      updatedTodoArray[index]["done"] = true;
      setTodoArr(updatedTodoArray);
      console.log(updatedTodoArray);
      swal("Good Job !", "Todo completed", "success");
    } else {
      updatedTodoArray[index]["done"] = false;
      setTodoArr(updatedTodoArray);
    }
  };

  const deleteTodo = (i) => {
    const updatedTodoArray = todoArr.filter((todo, index) => index !== i);
    setTodoArr(updatedTodoArray);
    swal("Hey !", "You have deleted the todo !", "info");
  };

  return (
    <>
      <div className="box">
        <div className="text-end">
          <h2>Interactive Todo App</h2>
          <Counter />
          <h4>Add a new todo:</h4>
        </div>
        <div className="text-addTodo">
          <input
            type="text"
            name="todo"
            placeholder="Write a new todo ..."
            value={todo.title}
            onKeyPress={createTodo}
            onChange={handleChange}
          />
          <button
            type="button"
            name="addTodo"
            className="btn-addTodo"
            onClick={createTodo}
          >
            Add Todo
          </button>
        </div>
      </div>
      <TodoList
        todoArr={todoArr}
        createTodo={createTodo}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
