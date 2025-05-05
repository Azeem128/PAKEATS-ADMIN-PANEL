// import { PieChart, Pie, Cell } from "recharts";

// const data = [
//   { name: "Track Order", value: 60 },
//   { name: "Customer Growth", value: 22 },
//   { name: "Total Revenue", value: 18 },
// ];

// const COLORS = ["#FF6384", "#36A2EB", "#FFCE56"];

// export default function CustomPieChart() {
//   return (
//     <PieChart width={300} height={300}>
//       <Pie data={data} dataKey="value" outerRadius={100} fill="#8884d8">
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//         ))}
//       </Pie>
//     </PieChart>
//   );
// }
// PieChart.tsx
// "use client";
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: "Total Order", value: 81 },
//   { name: "Customer Growth", value: 22 },
//   { name: "Total Revenue", value: 62 },
// ];

// const COLORS = ["#FF6384", "#36A2EB", "#4BC0C0"];

// const CustomPieChart = () => (
//   <div className="bg-white p-4 rounded-xl shadow w-full max-w-sm">
//     <h2 className="font-semibold mb-2">Pie Chart</h2>
//     <ResponsiveContainer width="100%" height={200}>
//       <PieChart>
//         <Pie
//           data={data}
//           dataKey="value"
//           cx="50%"
//           cy="50%"
//           outerRadius={60}
//           label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
//         >
//           {data.map((_, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//     </ResponsiveContainer>
//   </div>
// );

// export default CustomPieChart;
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: "Total Order", value: 81 },
//   { name: "Customer Growth", value: 22 },
//   { name: "Total Revenue", value: 62 },
// ];

// const COLORS = ["#FF6384", "#36A2EB", "#4BC0C0"];

// const CustomPieChart = () => (
//   <div className="bg-white p-4 rounded-xl shadow w-full max-w-sm">
//     <h2 className="font-semibold mb-2">Pie Chart</h2>
//     <ResponsiveContainer width="100%" height={200}>
//       <PieChart>
//         <Pie
//           data={data}
//           dataKey="value"
//           cx="50%"
//           cy="50%"
//           outerRadius={60}
//           label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
//         >
//           {data.map((_, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//     </ResponsiveContainer>
//   </div>
// );

// export default CustomPieChart;


// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: "Total Orders", value: 81 },
//   { name: "Customer Growth", value: 22 },
//   { name: "Total Revenue", value: 62 },
// ];

// const COLORS = ["#FF6384", "#36A2EB", "#4BC0C0"];

// const CustomPieChart = () => (
//   <div className="bg-white p-4 rounded-xl shadow w-full max-w-sm">
//     <h2 className="font-semibold mb-2">Pie Chart</h2>
//     <ResponsiveContainer width="100%" height={200}>
//       <PieChart>
//         <Pie
//           data={data}
//           dataKey="value"
//           cx="50%"
//           cy="50%"
//           outerRadius={60}
//           label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
//         >
//           {data.map((_, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//     </ResponsiveContainer>
//   </div>
// );

// export default CustomPieChart;




import { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFetchOrderMetrics } from '@/app/api/OrderRelatedApi/orders';

const COLORS = ["#FF6384", "#36A2EB", "#4BC0C0"];

const CustomPieChart = () => {
  // State for date range and granularity
  const [startDate, setStartDate] = useState<Date | null>(new Date('2024-01-01'));
  const [endDate, setEndDate] = useState<Date | null>(new Date('2024-12-31'));
  const [granularity, setGranularity] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [filterDates, setFilterDates] = useState<{ start: string | undefined; end: string | undefined }>({
    start: '2024-01-01',
    end: '2024-12-31',
  });

  // Fetch data with the selected date range and granularity
  const { data, isLoading, error } = useFetchOrderMetrics(filterDates.start, filterDates.end, granularity);

  // Handle filter button click
  const handleFilter = () => {
    const formattedStart = startDate ? startDate.toISOString().split('T')[0] : undefined;
    const formattedEnd = endDate ? endDate.toISOString().split('T')[0] : undefined;
    setFilterDates({ start: formattedStart, end: formattedEnd });
  };

  return (
    <div className="flex-1 bg-white p-4 rounded-xl shadow w-full">
      <h2 className="font-semibold mb-4">Order Metrics</h2>

      {/* Filters */}
      <div className="mb-6 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Start Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              maxDate={endDate || new Date()}
              dateFormat="yyyy-MM-dd"
              className="border border-gray-300 rounded-md p-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholderText="Select start date"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">End Date</label>
            <DatePicker
              selected={endDate}
              onChange={(date: Date | null) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              maxDate={new Date()}
              dateFormat="yyyy-MM-dd"
              className="border border-gray-300 rounded-md p-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholderText="Select end date"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Granularity</label>
            <select
              value={granularity}
              onChange={(e) => setGranularity(e.target.value as 'daily' | 'weekly' | 'monthly')}
              className="border border-gray-300 rounded-md p-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <button
            onClick={handleFilter}
            className="mt-6 sm:mt-0 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Filter
          </button>
        </div>
      </div>

      {/* Loading and Error States */}
      {isLoading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-500">Error loading data</div>}

      {/* Metrics Summary */}
      {!isLoading && !error && (
        <div className="mb-4 text-sm">
          <p>Total Orders: {data.totalOrders}</p>
          <p>Unique Customers: {data.customerGrowth}</p>
          <p>Total Revenue: ${data.totalRevenue}</p>
        </div>
      )}

      {/* Pie Chart */}
      {!isLoading && !error && (
        <ResponsiveContainer width="100%" height={200}>
          <PieChart className='w-40 h-40'>
            <Pie
              data={data.chartData}
              dataKey="value"
              cx="50%"
              cy="50%"
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              outerRadius={80}

            >
              {data.chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default CustomPieChart;