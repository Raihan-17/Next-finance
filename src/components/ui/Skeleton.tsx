"use client";

export const Skeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={`animate-pulse rounded-md bg-gray-600 ${className}`}
    />
  );
};