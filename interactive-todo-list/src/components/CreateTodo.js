import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import swal from "sweetalert";
import Counter from "./Counter";
import { fetchTodosFromAPI } from "./helpers";

function CreateTodo() {
  const [todo, setTodo] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    fetchTodosFromAPI().then((result) =>
      setTodoArr(
        result.map((item) => {
          const ItemWithDone = { ...item, done: false };
          return ItemWithDone;
        })
      )
    );
  }, []);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };

  const createTodo = () => {
    if (todo !== "" && deadline !== "") {
      const newTodoObject = {
        id: Date.now(),
        description: todo,
        deadline: deadline,
        done: false,
      };
      const updatedTodoArray = [newTodoObject, ...todoArr];
      setTodoArr(updatedTodoArray);
      setTodo("");
      setDeadline("");
    } else {
      swal("Oops", "Please write todo first", "error");
    }
  };

  const createTodoOnEnter = (event) => {
    if (event.key === "Enter") {
      createTodo();
    }
  };

  const editTodo = (editedTodo) => {
    setTodoArr((currentTodos) =>
      currentTodos.map((currentTodo) =>
        currentTodo.id === editedTodo.id ? editedTodo : currentTodo
      )
    );
    swal("Info!", "You have updated the todo !", "info");
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

  const deleteTodo = (itemToDelete) => {
    const updatedTodoArray = todoArr.filter(
      (todo) => todo.id !== itemToDelete.id
    );
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
            value={todo}
            onKeyPress={createTodoOnEnter}
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="date"
            name="date"
            value={deadline}
            onChange={handleDeadlineChange}
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
        editTodo={editTodo}
      />
    </>
  );
}

export default CreateTodo;
