import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="w-full container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg mb-4">
        Welcome to your dashboard! Here, you can manage your account, view analytics, and perform other important actions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
          <p>Manage your personal information and account details.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Analytics</h2>
          <p>View key metrics and performance indicators.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;