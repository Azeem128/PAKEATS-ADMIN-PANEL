// src/app/notifications/page.tsx
"use client"; // This ensures that this code runs on the client-side

import React from 'react';

const NotificationsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl">Recent Notifications</h2>
        <ul className="mt-4">
          <li className="border-b py-2">New order received from John Doe.</li>
          <li className="border-b py-2">Order #1234 has been delivered successfully.</li>
          <li className="border-b py-2">New payment received from Jane Smith.</li>
          <li className="border-b py-2">Order #1235 is pending confirmation.</li>
        </ul>
      </div>
    </div>
  );
};

export default NotificationsPage;
