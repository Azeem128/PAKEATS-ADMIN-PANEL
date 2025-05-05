"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const pathname = usePathname();

  const routes = [
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Moved "Dashboard" text to the left and reduced font size */}
        <h1 className="text-lg font-bold mr-auto">Admin Panel</h1>

        <div className="flex gap-6 items-center">
          {/* Routes */}
          {routes.map((route) => (
            <Link key={route.path} href={route.path}>
              <span
                className={`px-4 py-2 rounded-md transition-all duration-200 cursor-pointer ${
                  pathname === route.path
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-700"
                }`}
              >
                {route.name}
              </span>
            </Link>
          ))}

          {/* Profile Icon */}
          <Link href="/profile">
            <div className="flex items-center space-x-2 cursor-pointer">
              <FaUserCircle className="w-6 h-6 text-white" />
              <span className="text-sm font-semibold">Profile</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
