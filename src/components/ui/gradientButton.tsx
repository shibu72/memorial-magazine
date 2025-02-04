import React from "react";
import Button from "./button";
import { FiArrowRight } from "react-icons/fi";
interface gradienButtonType {
  children: React.ReactNode;
}
export default function GradientButton({ children }: gradienButtonType) {
  return (
    <>
      <Button className="text-[#0071E3] border-[#0071E3] transition duration-500 ease-in-out hover:bg-gradient-to-r from-bgBlue to-bgDarkBlue hover:text-white ">
        {children}
        <FiArrowRight />
      </Button>
    </>
  );
}
