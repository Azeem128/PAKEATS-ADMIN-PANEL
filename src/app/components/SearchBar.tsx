
// "use client";

// import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

// const SearchBar = () => {
//   return (
//     <nav className="flex justify-between items-center p-4 bg-white shadow-md">
//       <div className="flex w-11/12 items-center gap-2">
//         <input type="text" placeholder="Search here..." className="p-2 w-11/12 border rounded" />
//         <FaSearch className="text-gray-500" />
//       </div>
//       <div className="flex items-center gap-5">
//         <FaBell className="text-gray-600" />
//         <FaUserCircle className="text-gray-600" size={24} />
//       </div>
//     </nav>
//   );
// };

// export default SearchBar;


// "use client";

// import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

// const SearchBar = () => {
//   return (
//     <nav className="flex justify-between items-center p-4 bg-white shadow-md">
//       <div className="flex w-11/12 items-center gap-2">
//         <input type="text" placeholder="Search here..." className="p-2 w-11/12 border rounded" />
//         <FaSearch className="text-gray-500" />
//       </div>
//       <div className="flex items-center gap-5">
//         <FaBell className="text-gray-600" />
//         <FaUserCircle className="text-gray-600" size={24} />
//       </div>
//     </nav>
//   );
// };

// export default SearchBar;

"use client";

import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter(); // ✅ Initialize router

  return (
    <nav className="flex w-full justify-between items-center p-4 bg-transparent shadow-md">
      <div className="flex w-full items-center gap-2">
        <input
          type="text"
          placeholder="Search here..."
          className="p-2 w-11/12 border rounded"
        />
        <FaSearch className="text-white ml-6 cursor-pointer" />
        <FaBell className="text-white ml-6 cursor-pointer" />
        <FaUserCircle
          className="text-white ml-6 cursor-pointer"
          size={24}
          onClick={() => router.push("/profile")} // ✅ Navigate to Profile page on click
        />
      </div>
    </nav>
  );
};

export default SearchBar;
