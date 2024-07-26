const saveToLocalStorage = (todos) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Failed to save todos to local storage:", error);
  }
};

export { saveToLocalStorage };
