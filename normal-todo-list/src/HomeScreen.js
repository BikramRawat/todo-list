import React from "react";
import TodoList from "./TodoList";
import { getNextId } from "./helpers";
import Header from "./Header";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
    completed: false,
  },
  {
    id: 2,
    description: "Brush teeth",
    completed: false,
  },
  {
    id: 3,
    description: "Eat breakfast",
    completed: false,
  },
];

function HomeScreen() {
  const [todoItems, changeTodoItems] = React.useState(todos);

  const addItem = (newDescription) => {
    // change todos state and rerender
    const nextId = getNextId(todoItems);
    const newTodoItem = {
      id: nextId,
      description: newDescription,
    };
    console.log(newTodoItem);
    const newTodoItems = todoItems.concat(newTodoItem);
    console.log(newTodoItems);
    changeTodoItems(newTodoItems);
  };

  const deleteItemFromState = (id) => {
    console.log("delete item from parent", id);
    const newTodoItems = todoItems.filter((todoItem) => {
      if (todoItem.id === id) return false;
      else return true;
    });
    console.log(newTodoItems);
    changeTodoItems(newTodoItems);
  };

  const toggleItemCompleteFromState = (id) => {
    let newTodoItems = todoItems.map((todoItem) => {
      if (todoItem.id === id) {
        return { ...todoItem, completed: !todoItem.completed };
      } else {
        return todoItem;
      }
    });

    changeTodoItems(newTodoItems);
  };

  return (
    <div>
      <Header clickHandler={addItem} />
      <TodoList
        todoItems={todoItems}
        deleteItem={deleteItemFromState}
        toggleItemComplete={toggleItemCompleteFromState}
      />
    </div>
  );
}

export default HomeScreen;
