
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { FaChartPie, FaList, FaUser, FaSignOutAlt, FaBars } from "react-icons/fa";
// import { logoutAdmin } from "../lib/auth";
// import { useRouter } from "next/navigation";

// const Sidebar = ({ setIsCollapsed }: { setIsCollapsed: (value: boolean) => void }) => {
//     const pathname = usePathname();
//     const [collapse, setCollapse] = useState(false);
//     const router = useRouter();


//     const toggleCollapse = () => {
//         setCollapse(!collapse);
//         setIsCollapsed(!collapse); // Notify Layout to update width
//     };

//     const menuItems = [
//         { name: "Dashboard", path: "/dashboard", icon: <FaChartPie /> },
//         { name: "Order List", path: "/orders", icon: <FaList /> },
//         { name: "Customers", path: "/customers", icon: <FaUser /> },
//     ];

//     const logoutAdminHere = async () => {
//         await logoutAdmin();
//         router.push('/auth/login')
//     }

//     return (
//         <aside
//             className={`h-screen bg-gray-900 text-white p-3 fixed top-0 left-0 transition-all duration-300 flex flex-col justify-between 
//             ${collapse ? "w-16" : "w-64"}`}
//         >
//             {/* Sidebar Header */}
//             <div>
//                 <h2
//                     className={`text-xl font-bold text-center py-2 break-words transition-all duration-300 
//                     ${collapse ? "w-12 leading-tight" : "w-full"}`}
//                 >
//                     PakEats.
//                 </h2>


//                 <nav className="mt-4">
//                     {menuItems.map((item) => (
//                         <div key={item.path} className="relative group">
//                             <Link
//                                 href={item.path}
//                                 className={`flex items-center p-3 rounded-lg transition-all duration-300 
//                                     ${pathname === item.path ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800"}`}
//                             >
//                                 <div className="w-12 flex justify-center">{item.icon}</div>
//                                 <span className={`transition-all duration-300 overflow-hidden 
//                                     ${collapse ? "opacity-0 w-0" : "opacity-100 w-full"}`}>
//                                     {item.name}
//                                 </span>
//                             </Link>

//                             {/* Tooltip for Collapsed Sidebar */}
//                             {collapse && (
//                                 <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
//                                     {item.name}
//                                 </span>
//                             )}
//                         </div>
//                     ))}
//                 </nav>
//             </div>

//             {/* Sidebar Footer (Logout & Collapse Button) */}
//             <div className="mt-auto">
//                 {/* Logout Button */}
//                 <button className="flex items-center p-3 text-red-400 w-full relative group hover:bg-gray-800 rounded-lg">
//                     <div className="w-12 flex justify-center"><FaSignOutAlt /></div>
//                     <span className={`flex items-start justify-start transition-all duration-300 overflow-hidden 
//                         ${collapse ? "opacity-0 w-0" : "opacity-100 w-full"}`}
//                         onClick={() => logoutAdminHere()}>
//                         Logout
//                     </span>

//                     {/* Tooltip for Logout */}
//                     {collapse && (
//                         <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
//                             Logout
//                         </span>
//                     )}
//                 </button>

//                 {/* Collapse Button */}
//                 <button
//                     onClick={toggleCollapse}
//                     className="w-full flex items-center justify-center text-xl p-3 bg-gray-800 hover:bg-gray-700 rounded-lg mt-4"
//                 >
//                     <FaBars />
//                 </button>
//             </div>
//         </aside>
//     );
// };

// export default Sidebar;

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { FaChartPie, FaList, FaUser, FaSignOutAlt, FaBars } from "react-icons/fa";
// import { logoutAdmin } from "../lib/auth";
// import { useRouter } from "next/navigation";

// const Sidebar = ({ setIsCollapsed }: { setIsCollapsed: (value: boolean) => void }) => {
//     const pathname = usePathname();
//     const [collapse, setCollapse] = useState(false);
//     const router = useRouter();


//     const toggleCollapse = () => {
//         setCollapse(!collapse);
//         setIsCollapsed(!collapse); // Notify Layout to update width
//     };

//     const menuItems = [
//         { name: "Dashboard", path: "/dashboard", icon: <FaChartPie /> },
//         { name: "Order List", path: "/ordersList", icon: <FaList /> },
//         { name: "Customers", path: "/customers", icon: <FaUser /> },
//     ];

//     const logoutAdminHere = async () => {
//         await logoutAdmin();
//         router.push('/auth/login')
//     }

//     return (
//         <aside
//             className={`h-screen bg-gray-900 text-white p-3 fixed top-0 left-0 transition-all duration-300 flex flex-col justify-between 
//             ${collapse ? "w-16" : "w-64"}`}
//         >
//             {/* Sidebar Header */}
//             <div>
//                 <h2
//                     className={`text-xl font-bold text-center py-2 break-words transition-all duration-300 
//                     ${collapse ? "w-12 leading-tight" : "w-full"}`}
//                 >
//                     PakEats.
//                 </h2>


//                 <nav className="mt-4">
//                     {menuItems.map((item) => (
//                         <div key={item.path} className="relative group">
//                             <Link
//                                 href={item.path}
//                                 className={`flex items-center p-3 rounded-lg transition-all duration-300 
//                                     ${pathname === item.path ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800"}`}
//                             >
//                                 <div className="w-12 flex justify-center">{item.icon}</div>
//                                 <span className={`transition-all duration-300 overflow-hidden 
//                                     ${collapse ? "opacity-0 w-0" : "opacity-100 w-full"}`}>
//                                     {item.name}
//                                 </span>
//                             </Link>

//                             {/* Tooltip for Collapsed Sidebar */}
//                             {collapse && (
//                                 <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
//                                     {item.name}
//                                 </span>
//                             )}
//                         </div>
//                     ))}
//                 </nav>
//             </div>

//             {/* Sidebar Footer (Logout & Collapse Button) */}
//             <div className="mt-auto">
//                 {/* Logout Button */}
//                 <button className="flex items-center p-3 text-red-400 w-full relative group hover:bg-gray-800 rounded-lg">
//                     <div className="w-12 flex justify-center"><FaSignOutAlt /></div>
//                     <span className={`flex items-start justify-start transition-all duration-300 overflow-hidden 
//                         ${collapse ? "opacity-0 w-0" : "opacity-100 w-full"}`}
//                         onClick={() => logoutAdminHere()}>
//                         Logout
//                     </span>

//                     {/* Tooltip for Logout */}
//                     {collapse && (
//                         <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
//                             Logout
//                         </span>
//                     )}
//                 </button>

//                 {/* Collapse Button */}
//                 <button
//                     onClick={toggleCollapse}
//                     className="w-full flex items-center justify-center text-xl p-3 bg-gray-800 hover:bg-gray-700 rounded-lg mt-4"
//                 >
//                     <FaBars />
//                 </button>
//             </div>
//         </aside>
//     );
// };

// export default Sidebar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { 
  FaChartPie, FaList, FaUser, FaSignOutAlt, FaBars, 
  FaChartBar, FaUtensils, FaComments, FaWallet, FaStore 
} from "react-icons/fa";
import { logoutAdmin } from "../lib/auth";
import { useRouter } from "next/navigation";

const Sidebar = ({ setIsCollapsed }: { setIsCollapsed: (value: boolean) => void }) => {
    const pathname = usePathname();
    const [collapse, setCollapse] = useState(false);
    const router = useRouter();

    const toggleCollapse = () => {
        setCollapse(!collapse);
        setIsCollapsed(!collapse); // Notify Layout to update width
    };

    const menuItems = [
        { name: "Dashboard", path: "/dashboard", icon: <FaChartPie /> },
        { name: "Order List", path: "/ordersList", icon: <FaList /> },
        { name: "Customers", path: "/customers", icon: <FaUser /> },
        { name: "Analytics", path: "/analytics", icon: <FaChartBar /> },
        { name: "Reviews", path: "/reviews", icon: <FaComments /> },
        { name: "Foods", path: "/foods", icon: <FaUtensils /> },
        { name: "Food Detail", path: "/food-detail", icon: <FaUtensils /> },
        { name: "Customer Detail", path: "/customer-detail", icon: <FaUser /> },
        { name: "Restaurant Details", path: "/restaurant-detail", icon: <FaStore /> },
        { name: "Chat", path: "/chat", icon: <FaComments /> },
        { name: "Wallet", path: "/wallet", icon: <FaWallet /> },
    ];
    

    const logoutAdminHere = async () => {
        await logoutAdmin();
        router.push('/auth/login');
    };

    return (
        <aside
            className={`h-screen bg-gray-900 text-white p-3 fixed top-0 left-0 transition-all duration-300 flex flex-col justify-between 
            ${collapse ? "w-16" : "w-64"}`}
        >
            {/* Sidebar Header */}
            <div>
                <h2
                    className={`text-xl font-bold text-center py-2 transition-all duration-300 
                    ${collapse ? "w-12 leading-tight" : "w-full"}`}
                >
                    PakEats.
                </h2>

                <nav className="mt-4">
                    {menuItems.map((item) => (
                        <div key={item.path} className="relative group">
                            <Link
                                href={item.path}
                                className={`flex items-center p-3 rounded-lg transition-all duration-300 
                                    ${pathname === item.path ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800"}`}
                            >
                                <div className="w-12 flex justify-center">{item.icon}</div>
                                <span className={`transition-all duration-300 overflow-hidden 
                                    ${collapse ? "opacity-0 w-0" : "opacity-100 w-full"}`}>
                                    {item.name}
                                </span>
                            </Link>

                            {/* Tooltip for Collapsed Sidebar */}
                            {collapse && (
                                <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                    {item.name}
                                </span>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            {/* Sidebar Footer (Logout & Collapse Button) */}
            <div className="mt-auto">
                {/* Logout Button */}
                <button 
                    onClick={logoutAdminHere} 
                    className="flex items-center p-3 text-red-400 w-full relative group hover:bg-gray-800 rounded-lg"
                >
                    <div className="w-12 flex justify-center"><FaSignOutAlt /></div>
                    <span className={`transition-all duration-300 overflow-hidden 
                        ${collapse ? "opacity-0 w-0" : "opacity-100 w-full"}`}>
                        Logout
                    </span>

                    {/* Tooltip for Logout */}
                    {collapse && (
                        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                            Logout
                        </span>
                    )}
                </button>

                {/* Collapse Button */}
                <button
                    onClick={toggleCollapse}
                    className="w-full flex items-center justify-center text-xl p-3 bg-gray-800 hover:bg-gray-700 rounded-lg mt-4"
                >
                    <FaBars />
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
