import React from "react";
import ImageCard from "../ui/imageCard";
import Button from "../ui/button";
import { FiArrowRight } from "react-icons/fi";
import SectionTitle from "../ui/sectionTitle";
import data from "../../../public/data.json";
import Link from "next/link";
interface itemType {
  id: number;
  url: string;
  name: string;
  date: string;
}
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

        <div className="flex flex-wrap justify-center items-center gap-6 my-16 overflow-hidden">
          {data.imageCardData.slice(0, 6).map((item: itemType, index) => (
            <ImageCard
              key={index}
              id={item.id}
              url={item.url}
              name={item.name}
              date={item.date}
            />
          ))}
        </div>

        <div className="m-auto">
          <Link href={"/pages/stories"}>
            <Button className="text-[#0071E3] border-[#0071E3] transition duration-500 ease-in-out hover:bg-gradient-to-r from-bgBlue to-bgDarkBlue hover:text-white ">
              <span>see more</span>
              <FiArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
