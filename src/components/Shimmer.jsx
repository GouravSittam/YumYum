const Shimmer = () => {
  return (
    <div className="shimmer-container grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 mt-32">
      {Array(20).fill("").map((_, index) => (
        <div
          key={index}
          className="shimmer-card bg-gray-200 rounded-lg shadow-md p-4 animate-pulse"
        >
          <div className="h-32 bg-gray-300 rounded-md mb-4"></div>
          <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
          <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
          <div className="h-4 bg-gray-300 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;