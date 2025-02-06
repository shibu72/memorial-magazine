"use client";
import Contact from "@/components/shared/contact";
// import Googlemap from "@/components/shared/googleMap";
import HeroSection from "@/components/shared/heroSection";
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";
export default function Page() {
  return (
    <>
      <HeroSection title="Contact Us" breadcrumb="Home > Contact Us" />
      <div className="flex items-center justify-evenly mt-20">
        <div className="grid gap-2 items-center justify-center text-center">
          <MdOutlineContactPhone className="text-4xl m-auto text-blue-500" />
          <h3 className="text-2xl font-medium">Phone Number</h3>
          <div>
            <p className="text-lg font-medium">
              +1(800)123-4567 <br /> +1(800)123-4566
            </p>
            {/* <p className="text-lg font-medium"></p> */}
          </div>
        </div>
        <div className="grid gap-2 items-center justify-center text-center">
          <FaMapLocationDot className="text-4xl m-auto text-blue-500" />
          <h3 className="text-2xl font-medium">Address line</h3>
          <div>
            <p className="text-lg font-medium">
              176 W street name, New York,NY <br /> 10014
            </p>
          </div>
        </div>
        <div className="grid gap-2 items-center justify-center text-center">
          <MdOutlineContactPhone className="text-4xl m-auto text-blue-500" />
          <h3 className="text-2xl font-medium">Email</h3>
          <div>
            <p className="text-lg font-medium">
              Memorial_Moments_Magazine@gmail.com <br /> info@memorial.com
            </p>
          </div>
        </div>
      </div>
      <Contact />

      <div>{/* <Googlemap /> */}</div>
    </>
  );
}
