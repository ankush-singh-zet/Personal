import React, { useEffect, useState } from "react";

import { saveToLocalStorage } from "./utils/saveToLocalStorage";
import { AOSWrapper } from "./wrapper/aosWrapper";
import { TodoForm } from "./components/todoForm";
import { TodoList } from "./components/todoList";
import { Tabs } from "./components/tabs";
import { Header } from "./components/header";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // 'all', 'completed', 'incomplete'

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, completed: false }]);
    saveToLocalStorage([...todos, { ...todo, completed: false }]);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    saveToLocalStorage(filteredTodos);
  };

  const editTodo = (updatedTask) => {
    const editedTodos = todos.map((todo) =>
      todo.id === updatedTask.id ? updatedTask : todo
    );
    setTodos(editedTodos);
    saveToLocalStorage(editedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  const toggleCompletion = (id) => {
    const toggledTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(toggledTodo);
    saveToLocalStorage(toggledTodo);
  };


  useEffect(() => {
    try {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      if (storedTodos) {
        setTodos(storedTodos);
      } else {
        setTodos([]);
      }
    } catch (error) {
      console.error("Failed to load todos from local storage:", error);
      setTodos([]);
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <AOSWrapper>
        <Header />
        <TodoForm addTodo={addTodo} />
        <Tabs filter={filter} setFilter={setFilter} />
        <TodoList
          todos={filteredTodos}
          removeTodo={removeTodo}
          editTodo={editTodo}
          toggleCompletion={toggleCompletion}
        />
      </AOSWrapper>
    </div>
  );
};

export default App;
