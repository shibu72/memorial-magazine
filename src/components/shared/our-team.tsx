import React from "react";
import SectionTitle from "../ui/sectionTitle";
import Image from "next/image";
import data from "@/../public/data.json";
interface teamType {
  image: string;
  name: string;
  position: string;
}
export default function OurTeam({ className }: { className: string }) {
  return (
    <>
      <div className={`bg-blue-50 py-24 ${className}`}>
        <SectionTitle className="m-auto w-fit">Our Team</SectionTitle>
        <div className="flex flex-row justify-center items-center gap-6 mt-20">
          {data.teamData.map((team: teamType, index) => (
            <div key={index} className="grid justify-center items-center gap-6">
              <div className="w-[312px] h-[312px]">
                <Image
                  width={312}
                  height={312}
                  className="rounded-full border-8 border-blue-500 w-[312px] h-[312px] object-cover"
                  src={team.image}
                  alt="teammate"
                />
              </div>
              <div className="grid justify-center items-center text-center gap-4 capitalize">
                <h3 className="text-3xl font-semibold">{team.name}</h3>
                <p className="uppercase text-lg font-normal text-[#717070]">
                  {team.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
