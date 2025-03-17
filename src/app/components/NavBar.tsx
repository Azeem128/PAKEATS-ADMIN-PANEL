"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const routes = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyApp</h1>
        <div className="flex gap-6">
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

