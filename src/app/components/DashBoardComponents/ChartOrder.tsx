// components/DashBoardComponents/ChartOrder.tsx
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const data = [
  { name: 'Sunday', orders: 120 },
  { name: 'Monday', orders: 150 },
  { name: 'Tuesday', orders: 90 },
  { name: 'Wednesday', orders: 80 },
  { name: 'Thursday', orders: 70 },
  { name: 'Friday', orders: 110 },
  { name: 'Saturday', orders: 140 },
];

const ChartOrder = () => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h2 className="text-xl font-semibold">Chart Order</h2>
    <div className="flex justify-between items-center mt-4">
      <LineChart width={300} height={150} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="orders" stroke="#8884d8" />
      </LineChart>
      {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"> */}
        {/* Save Report */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200">
  Save Report
</button>

      {/* </button> */}
    </div>
  </div>
);

export default ChartOrder;
