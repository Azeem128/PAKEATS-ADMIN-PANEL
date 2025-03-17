
'use client';

import React, { useState } from "react";

const customersData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: "Qasim Zahoor",
  email: "zahoorsami379@gmail.com",
  orders: 10,
  card: "1234 **** **** ****",
  date: "28 Jan, 12:30 AM",
  completed: 9,
  canceled: 1,
  location: "Model Town",
}));

const CustomerTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 7;
  const totalPages = Math.ceil(customersData.length / recordsPerPage);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = customersData.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">All Customers</h2>
      <table className="w-full border-collapse border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border border-gray-200">Id</th>
            <th className="p-3 border border-gray-200">Name</th>
            <th className="p-3 border border-gray-200">Contact Info</th>
            <th className="p-3 border border-gray-200">Number of Orders</th>
            <th className="p-3 border border-gray-200">Card</th>
            <th className="p-3 border border-gray-200">Date</th>
            <th className="p-3 border border-gray-200">Completed Orders</th>
            <th className="p-3 border border-gray-200">Canceled Orders</th>
            <th className="p-3 border border-gray-200">Location</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((customer) => (
            <tr key={customer.id} className="border border-gray-200">
              <td className="p-3 border border-gray-200">{customer.id}</td>
              <td className="p-3 border border-gray-200">{customer.name}</td>
              <td className="p-3 border border-gray-200">{customer.email}</td>
              <td className="p-3 border border-gray-200">{customer.orders}</td>
              <td className="p-3 border border-gray-200">{customer.card}</td>
              <td className="p-3 border border-gray-200">{customer.date}</td>
              <td className="p-3 border border-gray-200">{customer.completed}</td>
              <td className="p-3 border border-gray-200">{customer.canceled}</td>
              <td className="p-3 border border-gray-200">{customer.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomerTable;
