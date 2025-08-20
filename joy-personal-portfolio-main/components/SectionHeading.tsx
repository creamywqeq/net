import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold capitalize text-gradient mb-4">
        {children}
      </h2>
      {/* 代码风格的装饰线 */}
      <div className="flex items-center justify-center gap-4">
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>
    </div>
  );
}