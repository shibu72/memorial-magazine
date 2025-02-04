import React from "react";
interface buttonType {
  className: string;
  children: React.ReactNode;
}
export default function Button({ className, children }: buttonType) {
  return (
    <>
      <button
        className={`flex justify-center items-center gap-2 border rounded-md capitalize py-4 px-6 hover:bg-white hover:text-black transition duration-500 ease-in-out ${className} `}
      >
        {children}
      </button>
    </>
  );
}
