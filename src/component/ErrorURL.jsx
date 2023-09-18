import React from 'react'
import { NavLink } from 'react-router-dom';

const ErrorURL = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <NavLink to={"/"}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Go Back
      </button>
      </NavLink>
      
    </div>
  );
}

export default ErrorURL