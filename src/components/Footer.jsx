export default function Footer() {
  return (
    <footer className="bg-white py-4 text-center text-sm dark:bg-gray-800 dark:text-gray-400">
      © {new Date().getFullYear()} TaskHub • Built with React & Tailwind
    </footer>
  );
}
