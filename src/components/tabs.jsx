const Tabs = ({ setFilter, filter }) => {
  return (
    <div className="mb-4 gap-x-5 flex" data-aos="slide-down">
      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-2 rounded-lg ${
          filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`px-4 py-2 rounded-lg ${
          filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("incomplete")}
        className={`px-4 py-2 rounded-lg ${
          filter === "incomplete" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Incomplete
      </button>
    </div>
  );
};
export { Tabs };
