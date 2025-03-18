"use client";

import { useState } from "react";

const dummyFoodDetails = {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    price: "$12",
    available: true,
    description: "A delicious classic Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
    ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Basil", "Olive Oil", "Pizza Dough"]
};

export default function FoodDetailPage() {
    const [food] = useState(dummyFoodDetails);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">🍕 Food Details</h1>

            <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold">{food.name}</h2>
                <p className="text-gray-600">{food.description}</p>

                <div className="mt-4">
                    <p><strong>Category:</strong> {food.category}</p>
                    <p><strong>Price:</strong> {food.price}</p>
                    <p className={`font-bold ${food.available ? "text-green-600" : "text-red-600"}`}>
                        {food.available ? "✔ Available" : "❌ Out of Stock"}
                    </p>
                </div>

                <h3 className="mt-6 font-semibold">📝 Ingredients:</h3>
                <ul className="list-disc ml-5 text-gray-700">
                    {food.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
