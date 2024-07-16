import { useState, useEffect } from "react";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const parsisData = (newList) => {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  };

  const handleCreateTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    parsisData(newTodoList);
    setTodos(newTodoList);
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    parsisData(newTodoList);
    setTodos(newTodoList);
  };

  const handleUpdateTodo = (index) => {
    const valueToBeUpdated = todos[index];
    setTodoValue(valueToBeUpdated);
    handleDeleteTodo(index);
  };

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleCreateTodos={handleCreateTodos}
      />
      <TodoList
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
