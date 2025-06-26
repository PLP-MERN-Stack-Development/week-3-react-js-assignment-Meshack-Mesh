// components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 px-4 py-6 bg-gray-50 dark:bg-gray-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
