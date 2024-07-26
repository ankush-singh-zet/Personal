import React, { useState } from "react";
import uniqid from "uniqid";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({ title: "", description: "" });
  const [priority, setPriority] = useState("Medium");

  const validateInputs = () => {
    let valid = true;
    const newErrors = { title: "", description: "" };

    if (!title.trim()) {
      newErrors.title = "Todo Title is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      const newTask = {
        id: uniqid(),
        title,
        description,
        priority,
      };
      addTodo(newTask);
      setTitle("");
      setDescription("");
      setPriority("Medium");
      setErrors({ title: "", description: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex sm:flex-row flex-col  gap-5 mb-3">
        <div className="flex-1">
          <input
            className={`border px-2 py-4 w-full rounded-lg ${
              errors.title ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="Add Todo Title"
            value={title}
            onChange={(e) => setTitle(e?.target?.value)}
            data-aos={errors.title ? "" : "fade-down"}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>
        <div className="flex-1">
          <input
            className="border px-2 py-4 w-full rounded-lg"
            type="text"
            placeholder="Add Todo Description (Optional)"
            value={description}
            onChange={(e) => setDescription(e?.target?.value)}
            data-aos="fade-down"
          />
        </div>
        <div className="flex-1">
          <select
            className="border px-2 py-4 w-full rounded-lg"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            data-aos="fade-down"
          >
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
        </div>
      </div>
      <div className="items-center justify-center flex mt-5">
        <button
          className="bg-blue-500 text-white px-4 py-4 w-72 rounded-lg"
          type="submit"
          data-aos="zoom-in-down"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
