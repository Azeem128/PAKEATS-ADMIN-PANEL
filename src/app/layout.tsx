// import NavBar from "./components/NavBar";
 //import Sidebar from "./components/Sidebar";
// import "./globals.css"; // ✅ Import Tailwind CSS styles
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "MyApp",
//   description: "A Next.js app with dynamic navigation",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} bg-gray-100 text-gray-900`}>
//         {/* <Sidebar isCollapsed={false} /> */}
//         <main className="container mx-auto p-6">{children}</main>
//       </body>
//     </html>
//   );
// }
// import "./globals.css"; // ✅ Import Tailwind CSS styles
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "MyApp",
//   description: "A Next.js app with dynamic navigation",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} bg-gray-100 text-gray-900`}>
//         {children}
//       </body>
//     </html>
//   );
// }
import "./globals.css"; // ✅ Import Tailwind CSS styles
import { Inter } from "next/font/google";
import Sidebar from "././components/Sidebar"; // ✅ Import Sidebar

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyApp",
  description: "A Next.js app with dynamic navigation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <div className="flex h-screen">
          {/* Sidebar (Fixed) */}

          {/* Main Content (Takes remaining space & scrolls) */}
          <main className="flex-1 overflow-auto p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
