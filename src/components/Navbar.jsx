import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const linkClass =
    "px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700";
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          TaskHub
        </Link>
        <div className="flex items-center gap-4">
          <NavLink to="/tasks" className={linkClass}>
            Tasks
          </NavLink>
          <NavLink to="/posts" className={linkClass}>
            API Posts
          </NavLink>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
