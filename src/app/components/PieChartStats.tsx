// // components/PieStats.tsx
// import { PieChart, Pie, Cell, Tooltip } from 'recharts';

// const COLORS = ['#FF6384', '#36A2EB', '#4BC0C0'];

// const data = [
//   { name: 'Total Orders', value: 81 },
//   { name: 'Customer Growth', value: 22 },
//   { name: 'Total Revenue', value: 62 },
// ];

// export default function PieStats() {
//   return (
//     <div className="flex justify-between gap-4">
//       {data.map((item, index) => (
//         <div key={item.name} className="bg-white p-4 rounded shadow w-full max-w-xs text-center">
//           <PieChart width={120} height={120}>
//             <Pie
//               data={[{ value: item.value }, { value: 100 - item.value }]}
//               innerRadius={40}
//               outerRadius={50}
//               dataKey="value"
//               startAngle={90}
//               endAngle={-270}
//             >
//               <Cell fill={COLORS[index]} />
//               <Cell fill="#f0f0f0" />
//             </Pie>
//             <Tooltip />
//           </PieChart>
//           <p className="text-sm mt-2 font-semibold">{item.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
