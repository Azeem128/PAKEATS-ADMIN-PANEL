
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Sunday', orderCount: 50 },
  { name: 'Monday', orderCount: 70 },
  { name: 'Tuesday', orderCount: 90 },
  { name: 'Wednesday', orderCount: 110 },
  { name: 'Thursday', orderCount: 95 },
  { name: 'Friday', orderCount: 130 },
  { name: 'Saturday', orderCount: 115 },
];

const OrderChart = () => (
  <div className="bg-white p-4 rounded-xl shadow w-full max-w-lg">
    <h2 className="font-semibold mb-2">Chart Order</h2>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="orderCount" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default OrderChart;
