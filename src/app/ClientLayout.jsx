"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // Define routes where Navbar/Footer should be hidden
  const hideLayoutRoutes = [
    "/admin",
    "/dashboard",
    "/login",
    "/register",
    "/404",
    "/500",
  ];

  // Check if current path should hide layout
  const hideLayout = hideLayoutRoutes.some((route) =>
    pathname?.startsWith(route)
  );

  return (
    <>
      <div className="bg-white text-gray-900 overflow-x-hidden min-h-screen">
        <div className="relative z-50 bg-transparent overflow-x-hidden">
          {!hideLayout && <Navbar />}
          <main className="flex-1 min-h-screen">{children}</main>
        </div>
        {!hideLayout && <Footer />}
      </div>
    </>
  );
}
