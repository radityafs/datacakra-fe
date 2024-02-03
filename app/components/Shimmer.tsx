interface ShimmerProps {
  className: string;
}

export default function Shimmer({ className }: ShimmerProps) {
  return (
    <div className={className}>
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-16 bg-gray-300 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
}
