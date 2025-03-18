"use client";

import { useState } from "react";

const dummyCustomerDetails = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 123 456 7890",
    totalOrders: 15,
    totalSpent: "$450",
    status: "Active",
    address: "123 Main St, New York, NY, USA"
};

export default function CustomerDetailPage() {
    const [customer] = useState(dummyCustomerDetails);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">👤 Customer Details</h1>

            <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold">{customer.name}</h2>
                <p className="text-gray-600">{customer.email}</p>

                <div className="mt-4">
                    <p><strong>📞 Phone:</strong> {customer.phone}</p>
                    <p><strong>📍 Address:</strong> {customer.address}</p>
                    <p><strong>🛒 Total Orders:</strong> {customer.totalOrders}</p>
                    <p><strong>💰 Total Spent:</strong> {customer.totalSpent}</p>
                    <p className={`font-bold ${customer.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                        {customer.status}
                    </p>
                </div>
            </div>
        </div>
    );
}
