
// "use client";

// import {
//   FaBell,
//   FaUserCircle,
//   FaSearch,
//   FaShoppingBasket,
//   FaCommentDots,
//   FaCog,
// } from "react-icons/fa";
// import { usePathname, useRouter } from "next/navigation";
// import { useSearch } from "@/providers/SearchProvider";

// const SearchBar = ({
//   collapse,
//   setIsCollapsed,
// }: {
//   collapse: boolean;
//   setIsCollapsed: (value: boolean) => void;
// }) => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const isDashboard = pathname === "/dashboard";
//   const { searchQuery, setSearchQuery } = useSearch();

//   return (
//     <nav className="w-full bg-transparent z-50 p-4 flex justify-end items-center">
//       <div className="flex w-full items-center justify-between gap-2 max-w-3xl mx-auto">
//         {/* Search Input with Icon */}
//         {!isDashboard && (
//           <div className="relative w-full md:w-3/4 lg:w-2/3">
//             <input
//               type="text"
//               placeholder="Search here..."
//               className="p-2 pl-4 pr-10 w-full border rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <FaSearch className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           </div>
//         )}

//         {/* Icons Section */}
//         <div
//           className={`flex items-center gap-4 text-white ${
//             isDashboard ? "justify-end w-full" : "ml-4"
//           }`}
//         >

//           <FaUserCircle
//             className="cursor-pointer hover:text-blue-400 transition text-2xl md:text-3xl"
//             onClick={() => router.push("/profile")}
//           />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default SearchBar;