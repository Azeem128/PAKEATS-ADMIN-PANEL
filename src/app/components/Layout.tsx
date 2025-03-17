// "use client";

// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import { FaBars } from "react-icons/fa";

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar isCollapsed={isCollapsed} />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header with Toggle Button */}
//         <header className="p-4 bg-gray-800 text-white flex justify-end">
//           <button 
//             onClick={() => setIsCollapsed(!isCollapsed)} 
//             className="text-xl p-2 bg-gray-700 rounded"
//           >
//             <FaBars />
//           </button>
//         </header>

//         {/* Main Page Content */}
//         <main className="p-6 flex-1 bg-gray-100 overflow-y-auto">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;


// "use client";

// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import SearchBar from "./SearchBar";
// import { FaBars } from "react-icons/fa";

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar isCollapsed={isCollapsed} />

//       {/* Main Content */}
//       <div className={`flex-1 flex flex-col transition-all ml-${isCollapsed ? "16" : "64"}`}>
//         {/* Header with Toggle Button */}
//         <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
//           <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-xl p-2 bg-gray-700 rounded">
//             <FaBars />
//           </button>
//           <SearchBar />
//         </header>

//         {/* Main Page Content */}
//         <main className="p-6 flex-1 bg-gray-100 overflow-y-auto">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default Layout;


// "use client";

// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import SearchBar from "./SearchBar";
// import { FaBars } from "react-icons/fa";

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar - Fixed on Left */}
//       <Sidebar isCollapsed={isCollapsed} />

//       {/* Main Content Wrapper */}
//       <div className={`flex flex-col flex-1 transition-all duration-300 ${isCollapsed ? "ml-16" : "ml-64"}`}>
//         {/* Header */}
//         <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
//           <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-xl p-2 bg-gray-700 rounded">
//             <FaBars />
//           </button>
//           <SearchBar/>
//         </header>

//         {/* Scrollable Content */}
//         <main className="p-6 bg-gray-100 h-full overflow-y-auto">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;



"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar - Controls its own state */}
      <Sidebar setIsCollapsed={setIsCollapsed} />

      {/* Main Content Wrapper - Adjusts width dynamically */}
      <div className={`flex flex-col flex-1 transition-all duration-300 ${isCollapsed ? "ml-16" : "ml-64"}`}>
        {/* Header */}
        <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
          <SearchBar />
        </header>

        {/* Scrollable Content */}
        <main className="p-6 bg-gray-100 h-full overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
