"use client";

import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", revenue: 12000 },
  { name: "Feb", revenue: 15000 },
  { name: "Mar", revenue: 18000 },
  { name: "Apr", revenue: 14000 },
  { name: "May", revenue: 20000 },
];

const data1 = [
  { name: "Total Orders", value: 400, color: "#FF6384" },
  { name: "Pending Orders", value: 300, color: "#36A2EB" },
];

const RevenueGraph = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="flex-row items-center justify-center">
      <div className="w-full h-[400px] p-6 bg-white rounded shadow">
        <h2 className="text-lg font-bold">Total Revenue</h2>
        {/* <LineChart width={300} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={2} />
        </LineChart> */}
         <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      </div>

      {/* <div className="p-6 bg-white rounded shadow">

        <PieChart width={400} height={300}>
          <Pie
            data={data1}
            cx={200}
            cy={150}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data1.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div> */}

    </div>
  );
};

export default RevenueGraph;
