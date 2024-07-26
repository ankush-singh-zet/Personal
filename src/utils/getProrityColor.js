const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "text-red-500"; // Red for high priority
    case "Medium":
      return "text-yellow-500"; // Yellow for medium priority
    case "Low":
      return "text-green-500"; // Green for low priority
    default:
      return "text-gray-500"; // Default color
  }
};

export { getPriorityColor };
