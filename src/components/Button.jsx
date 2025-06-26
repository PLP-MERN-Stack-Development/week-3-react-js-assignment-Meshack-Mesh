import clsx from "clsx";

export default function Button({
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  return <button {...props} className={clsx(base, variants[variant], className)} />;
}
