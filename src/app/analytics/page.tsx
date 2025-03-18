"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts";

const analyticsData = [
    { month: "Jan", orders: 120, revenue: 2400 },
    { month: "Feb", orders: 150, revenue: 2800 },
    { month: "Mar", orders: 180, revenue: 3500 },
    { month: "Apr", orders: 200, revenue: 4000 },
    { month: "May", orders: 230, revenue: 4500 },
    { month: "Jun", orders: 260, revenue: 5000 },
];

const pieData = [
    { name: "New Customers", value: 400 },
    { name: "Returning Customers", value: 300 },
    { name: "Guest Users", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function AnalyticsPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">📊 Analytics Overview</h1>

            {/* Bar Chart - Orders & Revenue */}
            <div className="bg-white p-4 rounded-xl shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-2">Orders & Revenue</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={analyticsData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="orders" fill="#82ca9d" name="Orders" />
                        <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Line Chart - Revenue Growth */}
            <div className="bg-white p-4 rounded-xl shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-2">Revenue Growth</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={analyticsData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="#ff7300" name="Revenue Growth" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Pie Chart - Customer Distribution */}
            <div className="bg-white p-4 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold mb-2">Customer Distribution</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
