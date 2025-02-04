import React from "react";
interface sectionTitleType {
  children: React.ReactNode;
  className: string;
}
export default function SectionTitle({
  children,
  className,
}: sectionTitleType) {
  return (
    <>
      <h2 className={`text-[62px] text-[#3A3A3A] font-semibold ${className}`}>
        {children}
      </h2>
    </>
  );
}
