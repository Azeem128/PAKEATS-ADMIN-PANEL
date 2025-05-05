


// "use client";

// import { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns";
// import {
//   CalendarIcon,
//   ChevronDownIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
// } from "lucide-react";

// export default function DateRangePicker() {
//   const [startDate, setStartDate] = useState<Date | null>(new Date());
//   const [endDate, setEndDate] = useState<Date | null>(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isRange, setIsRange] = useState(false);
//   const [showYearPicker, setShowYearPicker] = useState(false);
//   const [showMonthPicker, setShowMonthPicker] = useState(false);
//   const [yearOffset, setYearOffset] = useState(0);

//   const currentYear = new Date().getFullYear();
//   const years = Array.from({ length: 25 }, (_, i) => currentYear - i);
//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//   const formatDate = (date: Date | null) =>
//     date ? format(date, "d MMMM yyyy") : "Select Date";

//   return (
//     <div className="relative flex justify-center">
//       {/* Date Picker Button */}
//       <div
//         className="cursor-pointer bg-white p-4 rounded-lg shadow-md flex items-center gap-3 w-72 border border-gray-300"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <CalendarIcon className="text-blue-500 w-6 h-6" />
//         <div className="flex-1">
//           <p className="text-gray-700 font-semibold">Filter Period</p>
//           <p className="text-gray-500 text-sm">
//             {isRange
//               ? `${formatDate(startDate)} - ${formatDate(endDate)}`
//               : formatDate(startDate)}
//           </p>
//         </div>
//         <ChevronDownIcon className="text-gray-500" />
//       </div>

//       {isOpen && (
//         <div className="absolute flex flex-col items-center top-14 left-1/2 transform -translate-x-1/2 bg-white shadow-xl p-4 rounded-lg z-50 w-80 border border-gray-300">
//           {/* Toggle between Single & Range Mode */}
//           <div className="flex gap-4 mb-3 justify-center">
//             <button
//               className={`px-3 py-1 text-sm rounded ${
//                 !isRange ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
//               }`}
//               onClick={() => {
//                 setIsRange(false);
//                 setEndDate(null);
//               }}
//             >
//               Single Date
//             </button>
//             <button
//               className={`px-3 py-1 text-sm rounded ${
//                 isRange ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
//               }`}
//               onClick={() => setIsRange(true)}
//             >
//               Date Range
//             </button>
//           </div>

//           {/* Year Selection */}
//           <div className="relative mb-3">
//             <div
//               className="cursor-pointer text-center p-2 bg-gray-100 rounded hover:bg-gray-200"
//               onClick={() => setShowYearPicker(!showYearPicker)}
//             >
//               {startDate?.getFullYear() ?? currentYear}
//             </div>
//             {showYearPicker && (
//               <div className="relative bg-white border mt-2 rounded-md p-2">
//                 <button
//                   className="absolute left-0 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-300 rounded"
//                   onClick={() => setYearOffset(Math.max(yearOffset - 1, 0))}
//                   disabled={yearOffset === 0}
//                 >
//                   <ChevronLeftIcon className="w-4 h-4" />
//                 </button>
//                 <div className="flex flex-col items-center">
//                   {years.slice(yearOffset, yearOffset + 4).map((year) => (
//                     <button
//                       key={year}
//                       className="p-1 w-full text-gray-700 hover:bg-gray-200 rounded"
//                       onClick={() => {
//                         setStartDate(new Date(year, startDate?.getMonth() ?? 0, startDate?.getDate() ?? 1));
//                         setShowYearPicker(false);
//                       }}
//                     >
//                       {year}
//                     </button>
//                   ))}
//                 </div>
//                 <button
//                   className="absolute right-0 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-300 rounded"
//                   onClick={() => setYearOffset(yearOffset + 1)}
//                   disabled={yearOffset + 4 >= years.length}
//                 >
//                   <ChevronRightIcon className="w-4 h-4" />
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Month Selection */}
//           <div className="relative mb-3">
//             <div
//               className="cursor-pointer text-center p-2 bg-gray-100 rounded hover:bg-gray-200"
//               onClick={() => setShowMonthPicker(!showMonthPicker)}
//             >
//               {months[startDate?.getMonth() ?? 0]}
//             </div>
//             {showMonthPicker && (
//               <div className="relative bg-white border mt-2 rounded-md p-2">
//                 <div className="grid grid-cols-3 gap-2">
//                   {months.map((month, index) => (
//                     <button
//                       key={index}
//                       className="p-1 text-gray-700 hover:bg-gray-200 rounded"
//                       onClick={() => {
//                         setStartDate(new Date(startDate?.getFullYear() ?? currentYear, index, startDate?.getDate() ?? 1));
//                         setShowMonthPicker(false);
//                       }}
//                     >
//                       {month}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Date Picker with Range Support */}
//           <DatePicker
//             selected={startDate}
//             onChange={(update) => {
//               if (isRange) {
//                 const [start, end] = update as [Date | null, Date | null];
//                 setStartDate(start);
//                 setEndDate(end);
//               } else {
//                 setStartDate(update as Date | null);
//                 setEndDate(null);
//               }
//             }}
//             startDate={startDate}
//             endDate={endDate}
//             selectsRange={isRange}
//             inline
//           />
//         </div>
//       )}
//     </div>
//   );
// }
