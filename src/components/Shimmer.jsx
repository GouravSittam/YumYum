const Shimmer = () => {
  return (
    <div className="min-h-screen bg-pink-50 mt-28">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Search Shimmer */}
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 w-full">
              <div className="h-12 bg-gray-200 rounded-xl animate-pulse"></div>
            </div>
            <div className="w-full lg:w-auto">
              <div className="h-12 w-32 bg-gray-200 rounded-xl animate-pulse"></div>
            </div>
            <div className="w-full lg:w-auto">
              <div className="h-12 w-32 bg-gray-200 rounded-xl animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Results Count Shimmer */}
        <div className="mb-6">
          <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Cards Shimmer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array(12).fill("").map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse"
            >
              {/* Image Shimmer */}
              <div className="h-48 sm:h-52 md:h-56 bg-gray-200"></div>
              
              {/* Content Shimmer */}
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="h-5 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                  <div className="h-6 w-12 bg-gray-200 rounded ml-4"></div>
                </div>
                
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                
                <div className="flex justify-between items-center pt-2">
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;