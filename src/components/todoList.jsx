import React from "react";
import { TodoItem } from "./todoItem";
import { getSortedTodos } from "../utils/getSortedTodos";

const TodoList = ({ todos, removeTodo, editTodo, toggleCompletion }) => {
  const sortedTodos = getSortedTodos(todos);
  return (
    <div>
      {sortedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </div>
  );
};

export { TodoList };
