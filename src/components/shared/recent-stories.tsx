import React from "react";
import ImageCard from "../ui/imageCard";
import Button from "../ui/button";
import { FiArrowRight } from "react-icons/fi";
import SectionTitle from "../ui/sectionTitle";
export default function RecentStories() {
  return (
    <>
      <div className="grid justify-center items-center m-auto my-40 text-center">
        <div className="m-auto w-[643px]">
          <SectionTitle className="">Recent Stories</SectionTitle>
          <p className="text-xl font-normal">
            We offer a wide range of funeral services and arrangements to help
            you honor and celebrate the life of your loved one.
          </p>
        </div>
        <div className="flex justify-center items-center gap-6 my-16 overflow-hidden">
          <ImageCard />
        </div>
        <div className="m-auto">
          <Button className="text-[#0071E3] border-[#0071E3] transition duration-500 ease-in-out hover:bg-gradient-to-r from-bgBlue to-bgDarkBlue hover:text-white ">
            <span>see more</span>
            <FiArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}
