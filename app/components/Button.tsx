export default function Button({
  children,
  type,
  className,
  onClick,
}: {
  children: React.ReactNode;
  type: "submit" | "button";
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      className={
        className ||
        "rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
