"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Total Orders", value: 81 },
  { name: "Customer Growth", value: 22 },
  { name: "Total Revenue", value: 62 },
];

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56"];

const Chart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // ✅ Avoid SSR mismatch


  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-lg font-bold">Pie Chart</h2>
      <PieChart width={400} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Chart;
