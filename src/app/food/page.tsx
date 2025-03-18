"use client";

import { useState } from "react";

const dummyFoods = [
    { id: 1, name: "Margherita Pizza", category: "Pizza", price: "$12", available: true },
    { id: 2, name: "Cheeseburger", category: "Burger", price: "$8", available: true },
    { id: 3, name: "Caesar Salad", category: "Salad", price: "$10", available: false },
    { id: 4, name: "Chicken Biryani", category: "Rice", price: "$15", available: true },
    { id: 5, name: "Pasta Alfredo", category: "Pasta", price: "$13", available: true },
    { id: 6, name: "French Fries", category: "Snacks", price: "$5", available: false },
];

export default function FoodsPage() {
    const [foods] = useState(dummyFoods);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">🍽️ Available Foods</h1>

            <div className="bg-white p-4 rounded-xl shadow-md">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-3 text-left">Food Name</th>
                            <th className="p-3 text-left">Category</th>
                            <th className="p-3 text-left">Price</th>
                            <th className="p-3 text-left">Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foods.map((food) => (
                            <tr key={food.id} className="border-b">
                                <td className="p-3">{food.name}</td>
                                <td className="p-3">{food.category}</td>
                                <td className="p-3">{food.price}</td>
                                <td className={`p-3 font-bold ${food.available ? "text-green-600" : "text-red-600"}`}>
                                    {food.available ? "Available" : "Out of Stock"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
