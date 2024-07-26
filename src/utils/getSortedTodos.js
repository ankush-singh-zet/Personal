const getSortedTodos = (todos) => {
  const priorityOrder = { high: 1, medium: 2, low: 3 };
  return [...todos].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );
};

export {getSortedTodos}