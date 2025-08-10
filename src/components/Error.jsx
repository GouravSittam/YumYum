import { useRouteError, Link } from "react-router-dom";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Error Icon */}
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>
          
          {/* Error Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-2">Something went wrong</h2>
          
          {err?.status && (
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <p className="text-sm md:text-base text-gray-700">
                <span className="font-semibold">Error {err.status}:</span> {err.statusText || 'Unknown error'}
              </p>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => window.location.reload()}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
            
            <Link
              to="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-300"
            >
              <Home className="w-4 h-4" />
              <span>Go Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
