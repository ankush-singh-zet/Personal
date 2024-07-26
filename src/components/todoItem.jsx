import React, { useState } from "react";
import { getPriorityColor } from "../utils/getProrityColor";

const TodoItem = ({ todo, removeTodo, editTodo, toggleCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [priority, setPriority] = useState(todo.priority);

  const handleEdit = () => {
    editTodo({ ...todo, title, description, priority });
    setIsEditing(false);
  };

  const enableEdit = () => {
    setIsEditing(true);
  };

  return (
    <div
      className="border p-4 mb-2 rounded-xl flex justify-between items-center"
      data-aos="fade-up"
    >
      {isEditing ? (
        <div className="flex flex-col lg:flex-row lg:gap-4 gap-y-2">
          <input
            className="border px-1 py-2 rounded w-[80%]"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="border px-1 py-2 rounded w-[80%]"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select
            className="border px-1 py-2 rounded w-[80%]"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
        </div>
      ) : (
        <div>
          <h3 className="font-bold">{todo.title}</h3>
          <p>{todo.description}</p>
          <p>
            Priority:{" "}
            <span
              className={`text-sm font-semibold ${getPriorityColor(
                todo.priority
              )}`}
            >
              {todo.priority}
            </span>
          </p>
          <p
            className={`text-sm font-bold ${
              todo.completed ? "text-green-500" : "text-red-500"
            }`}
          >
            {todo.completed ? "Completed" : "Not Completed"}
          </p>
        </div>
      )}
      <div className="flex flex-col lg:flex-row lg:gap-4 gap-2">
        {isEditing ? (
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded-lg"
            onClick={handleEdit}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-green-500 text-white px-2 py-1 rounded-lg"
            onClick={enableEdit}
          >
            Edit
          </button>
        )}
        <button
          className="bg-red-500 text-white px-2 py-1 rounded-lg"
          onClick={() => removeTodo(todo.id)}
        >
          Delete
        </button>
        <button
          onClick={() => toggleCompletion(todo.id)}
          className={`bg-${
            todo.completed ? "red" : "green"
          }-500 text-white px-2 py-1 rounded-lg`}
        >
          {todo.completed ? "Mark as Incomplete" : "Mark as Completed"}
        </button>
      </div>
    </div>
  );
};

export { TodoItem };
