import React from "react";
import SectionTitle from "../ui/sectionTitle";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
export default function Testimonials() {
  return (
    <>
      <div className="py-36">
        <div className="w-[1058px] grid justify-center items-center gap-14 m-auto text-center">
          <div className="grid justify-center items-center gap-4 text-center m-auto">
            <p className="text-[34px] font-medium">Our Clients</p>
            <SectionTitle className=""> Testimonials</SectionTitle>

            <span className="flex justify-center items-center gap-4 text-blue-600 text-2xl">
              <hr className="w-[150px] border-blue-400" />{" "}
              <BiSolidQuoteAltLeft />{" "}
              <hr className="w-[150px] border-blue-400" />
            </span>
          </div>
          <p className="text-[22px] font-medium">
            Your work is going to fill a large part of your life, and the only
            way to be truly satisfied is to do what you believe is great work.
            And the only way to do great work is to love what you do. If you
            haven&#39;t found it yet, keep Peopeative are the luckiest people.
          </p>

          <h3 className="text-3xl font-semibold text-blue-500">
            Kazi Warner, CEO it
          </h3>
        </div>
      </div>
    </>
  );
}
