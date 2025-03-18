"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

const dummyReviews = [
    { id: 1, name: "John Doe", rating: 5, comment: "Amazing food and fast delivery!", date: "2024-02-01" },
    { id: 2, name: "Jane Smith", rating: 4, comment: "Great taste, but delivery took a bit longer.", date: "2024-02-10" },
    { id: 3, name: "Michael Brown", rating: 3, comment: "Good, but expected better quality.", date: "2024-02-15" },
    { id: 4, name: "Emily Wilson", rating: 5, comment: "Best food service ever!", date: "2024-02-18" },
    { id: 5, name: "Chris Evans", rating: 2, comment: "Not happy with the packaging.", date: "2024-02-20" },
    { id: 6, name: "Sophia Lee", rating: 4, comment: "Food was delicious, but little expensive.", date: "2024-02-22" },
];

export default function ReviewsPage() {
    const [reviews] = useState(dummyReviews);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">⭐ Customer Reviews</h1>

            <div className="bg-white p-4 rounded-xl shadow-md">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-3 text-left">Customer</th>
                            <th className="p-3 text-left">Rating</th>
                            <th className="p-3 text-left">Comment</th>
                            <th className="p-3 text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review) => (
                            <tr key={review.id} className="border-b">
                                <td className="p-3">{review.name}</td>
                                <td className="p-3">
                                    <div className="flex">
                                        {Array.from({ length: 5 }, (_, index) => (
                                            <FaStar
                                                key={index}
                                                className={`mr-1 ${
                                                    index < review.rating ? "text-yellow-500" : "text-gray-300"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </td>
                                <td className="p-3">{review.comment}</td>
                                <td className="p-3">{review.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
