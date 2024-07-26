const getSortedTodos = (todos) => {
  const priorityOrder = { High: 1, Medium: 2, Low: 3 };
  return [...todos].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );
};

export {getSortedTodos}