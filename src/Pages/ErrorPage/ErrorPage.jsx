import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
    <h1 className="text-8xl font-extrabold text-red-500">404</h1>
    <h2 className="text-3xl font-bold mt-4 text-gray-800">
      Oops! Page Not Found
    </h2>
    <p className="text-gray-500 mt-2 max-w-md">
      The page you're looking for doesn't exist or may have been moved.
    </p>
    <a
      href="/"
      className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      ⬅ Back to Home
    </a>
  </div>

        </div>
    );
};

export default ErrorPage;