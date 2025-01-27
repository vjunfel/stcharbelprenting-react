import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg mb-6">We couldn't find the page you were looking for.</p>
      <button
        onClick={() => navigate("/")} // This will redirect the user to the home page
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
      >
        Return to Home
      </button>
    </div>
  );
};

export default ErrorPage;