import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-xl font-semibold mb-4 text-center">Authentication</h1>
        <Outlet /> {/* This renders child routes for authentication */}
      </div>
    </div>
  );
};

export default AuthLayout;