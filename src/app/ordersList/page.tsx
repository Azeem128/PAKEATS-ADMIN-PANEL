"use client";
import React, { useState } from "react";
import Layout from "../components/Layout";
import RevenueGraph from "../components/RevenueGraph";
import Chart from "../components/Chart";

const dummyData = [
  { id: 1, name: "John Doe", email: "john@example.com", orders: 5 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", orders: 8 },
  { id: 3, name: "Alice Brown", email: "alice@example.com", orders: 3 },
  { id: 4, name: "Bob White", email: "bob@example.com", orders: 7 },
  { id: 5, name: "Charlie Black", email: "charlie@example.com", orders: 2 },
  { id: 6, name: "David Green", email: "david@example.com", orders: 6 },
];

export default function CustomersPage() {
  const [customers, setCustomers] = useState(dummyData);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = customers.slice(indexOfFirstRecord, indexOfLastRecord);

  const nextPage = () => {
    if (currentPage < Math.ceil(customers.length / recordsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const addDummyRecord = () => {
    const newRecord = {
      id: customers.length + 1,
      name: `New Customer ${customers.length + 1}`,
      email: `customer${customers.length + 1}@example.com`,
      orders: Math.floor(Math.random() * 10),
    };
    setCustomers([...customers, newRecord]);
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold my-4">Customers</h1>
      <button
        onClick={addDummyRecord}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
      >
        Add Dummy Record
      </button>

      <div className="overflow-x-auto bg-white shadow rounded-lg p-4">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Orders</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((customer) => (
              <tr key={customer.id} className="text-center">
                <td className="border px-4 py-2">{customer.id}</td>
                <td className="border px-4 py-2">{customer.name}</td>
                <td className="border px-4 py-2">{customer.email}</td>
                <td className="border px-4 py-2">{customer.orders}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="self-center">Page {currentPage}</span>
        <button
          onClick={nextPage}
          disabled={currentPage >= Math.ceil(customers.length / recordsPerPage)}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <div className="mt-6">
        <Chart />
      </div>
      <div className="mt-6">
        <RevenueGraph />
      </div>
    </Layout>
  );
}
