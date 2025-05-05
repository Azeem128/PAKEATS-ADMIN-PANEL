
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 24000 },
  { month: 'Feb', revenue: 22000 },
  { month: 'Mar', revenue: 25000 },
  { month: 'Apr', revenue: 26000 },
  { month: 'May', revenue: 24000 },
  { month: 'Jun', revenue: 27000 },
  { month: 'Jul', revenue: 28000 },
  { month: 'Aug', revenue: 29000 },
  { month: 'Sep', revenue: 32000 },
  { month: 'Oct', revenue: 31000 },
  { month: 'Nov', revenue: 33000 },
  { month: 'Dec', revenue: 34000 },
];

const RevenueChart = () => (
  <div className="bg-white p-4 rounded-xl shadow w-full max-w-lg">
    <h2 className="font-semibold mb-2">Total Revenue</h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={revenueData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default RevenueChart;
