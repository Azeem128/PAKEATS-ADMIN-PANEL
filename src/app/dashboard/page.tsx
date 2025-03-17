// 'use client';

// import { useEffect, useState } from 'react';
// import { getUsers } from '../lib/supabase';

// export default function Dashboard() {
//   const [users, setUsers] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const usersData = await getUsers();
//       setUsers(usersData || []);
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Supabase Users</h1>
//       <ul className="mt-4">
//         {users.length > 0 ? (
//           users.map((user) => (
//             <ul key={user.riderid}>
//             <li className="border-b py-2">
//               {user.name}
//             </li>
//             <li>{user.phone}</li>
//             </ul>
//           ))
//         ) : (
//           <p>No users found.</p>
//         )}
//       </ul>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "../lib/supabaseClient";
// import { logoutAdmin } from "../lib/auth";

// export default function DashboardPage() {
//   const [user, setUser] = useState<any>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const checkUser = async () => {
//       const { data } = await supabase.auth.getUser();
//       if (!data.user) router.push("/auth/login");
//       setUser(data.user);
//     };
//     checkUser();
//   }, [router]);
//   const logoutAdminHere = async () => {
//     await logoutAdmin();
//     router.push('/auth/login')
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//       {user && <p>Welcome, {user.email}</p>}
//       <button
//         onClick={logoutAdminHere}
//         className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }




// "use client";

 //import Sidebar from "././components/Sidebar";
// import Navbar from "../components/NavBar";
// import Chart from "../components/Chart";
// import RevenueGraph from "../components/RevenueGraph";
// import SearchBar from "../components/SearchBar";

// export default function DashboardPage() {
//   return (
//     <div className="flex">
//       {/* <Sidebar /> */}
//       <div className="flex-1 p-6">
//         <SearchBar />
//         <h1 className="text-2xl font-bold my-4">Dashboard</h1>

//         <div className="grid grid-cols-3 gap-6">
//           <div className="p-6 bg-white rounded shadow">
//             <h2 className="text-xl font-bold">75</h2>
//             <p>Total Orders</p>
//           </div>
//           <div className="p-6 bg-white rounded shadow">
//             <h2 className="text-xl font-bold">357</h2>
//             <p>Total Delivered</p>
//           </div>
//           <div className="p-6 bg-white rounded shadow">
//             <h2 className="text-xl font-bold">65</h2>
//             <p>Total Canceled</p>
//           </div>
//         </div>

//         <div className="mt-6">
//           <Chart />
//         </div>

//         <div className="mt-6">
//           <RevenueGraph />
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import Chart from "../components/Chart";
// import RevenueGraph from "../components/RevenueGraph";

// export default function DashboardPage() {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold my-4">Dashboard</h1>

//       <div className="grid grid-cols-3 gap-6">
//         <div className="p-6 bg-white rounded shadow">
//           <h2 className="text-xl font-bold">75</h2>
//           <p>Total Orders</p>
//         </div>
//         <div className="p-6 bg-white rounded shadow">
//           <h2 className="text-xl font-bold">357</h2>
//           <p>Total Delivered</p>
//         </div>
//         <div className="p-6 bg-white rounded shadow">
//           <h2 className="text-xl font-bold">65</h2>
//           <p>Total Canceled</p>
//         </div>
//       </div>

//       <div className="mt-6">
//         <Chart />
//       </div>

//       <div className="mt-6">
//         <RevenueGraph />
//       </div>
//     </div>
//   );
// }

import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import RevenueGraph from "../components/RevenueGraph"; // ✅ No need for `dynamic`
import Chart from "../components/Chart"; // ✅ No need for `dynamic`



export default function DashboardPage() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold my-4">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-xl font-bold">75</h2>
          <p>Total Orders</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-xl font-bold">357</h2>
          <p>Total Delivered</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-xl font-bold">65</h2>
          <p>Total Canceled</p>
        </div>
      </div>

      <div className="mt-6">
        <Chart />
      </div>

      <div className="mt-6">
        <RevenueGraph />
      </div>
    </Layout>
  );
}
