import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  useEffect(() => {
    // API call
  }, []);

  return (
    <div className="user-card bg-pink-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h2 className="text-xl font-bold text-pink-700 mb-2">Count: {count}</h2>
      <h2 className="text-lg font-semibold text-pink-600 mb-1">Name: {name}</h2>
      <h2 className="text-md text-pink-500 mb-1">Location: Delhi</h2>
      <h2 className="text-md text-pink-500 mb-1">Age: 24</h2>
      <h2 className="text-md text-pink-500 mb-1">Contact: @grv.com</h2>
    </div>
  );
};

export default User;