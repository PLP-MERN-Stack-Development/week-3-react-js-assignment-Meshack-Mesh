export default function Card({ title, children, className = "" }) {
  return (
    <div className={`rounded-xl border p-4 shadow-sm dark:border-gray-700 ${className}`}>
      {title && <h3 className="mb-2 text-lg font-semibold">{title}</h3>}
      {children}
    </div>
  );
}
