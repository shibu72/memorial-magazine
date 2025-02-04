import Image from "next/image";
import React from "react";
import data from "@/../public/data.json";
export default function ImageCard() {
  return (
    <>
      {data.imageCardData.map((item, index) => (
        <div
          key={index}
          className="w-[312px] h-[382px] grid justify-center items-center text-center text-white relative"
        >
          <Image
            width={500}
            height={500}
            className="w-[312px] h-[382px] object-cover"
            src={item.url}
            alt={item.name}
          />
          <div className="absolute bottom-0 bg-[#2B2A2A80] backdrop-blur-sm w-full space-y-2 p-4">
            <p className="text-2xl font-semibold">{item.name}</p>
            <p className="text-base font-normal">{item.date}</p>
          </div>
        </div>
      ))}
    </>
  );
}
