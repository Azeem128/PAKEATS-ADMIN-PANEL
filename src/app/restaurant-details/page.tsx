"use client";

import { useState } from "react";

const dummyRestaurantDetails = {
    id: 1,
    name: "Tasty Bites",
    owner: "Alice Johnson",
    email: "tastybites@example.com",
    phone: "+1 987 654 3210",
    address: "456 Elm St, Los Angeles, CA, USA",
    totalOrders: 230,
    rating: 4.8,
    status: "Open"
};

export default function RestaurantDetailPage() {
    const [restaurant] = useState(dummyRestaurantDetails);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">🏢 Restaurant Details</h1>

            <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold">{restaurant.name}</h2>
                <p className="text-gray-600">Owned by {restaurant.owner}</p>

                <div className="mt-4">
                    <p><strong>📞 Phone:</strong> {restaurant.phone}</p>
                    <p><strong>📧 Email:</strong> {restaurant.email}</p>
                    <p><strong>📍 Address:</strong> {restaurant.address}</p>
                    <p><strong>🛒 Total Orders:</strong> {restaurant.totalOrders}</p>
                    <p><strong>⭐ Rating:</strong> {restaurant.rating} / 5</p>
                    <p className={`font-bold ${restaurant.status === "Open" ? "text-green-600" : "text-red-600"}`}>
                        {restaurant.status}
                    </p>
                </div>
            </div>
        </div>
    );
}
