import HeroSection from "@/components/shared/heroSection";
import React from "react";
import { BiSearch } from "react-icons/bi";
import data from "@/../public/data.json";
import Image from "next/image";

interface storieType {
  url: string;
  name: string;
  date: string;
}
export default function Page({
  params,
}: {
  params: { storieDetails: string };
}) {
  const storie: storieType | undefined = data.imageCardData.find(
    (s) => s.id === parseInt(params.storieDetails),
  );
  return (
    <>
      <HeroSection
        title="Stories Details"
        breadcrumb="Home > Stories > Stories Details"
      />
      <div className="relative m-auto mt-20 w-[1320px]">
        <div className="absolute right-0 top-0 w-[360px] grid justify-center items-center gap-6">
          <div className="grid gap-4 items-center justify-center rounded-md bg-white shadow-lg p-6 m-auto">
            <label htmlFor="search">Search</label>
            <div className="shadow-lg rounded-md border flex items-center p-2">
              <BiSearch />
              <input
                type="text"
                id="search"
                className=" rounded-md text-lg outline-0 px-1"
                placeholder="search here"
              />
            </div>
          </div>
        </div>

        <div>
          <Image
            width={936}
            height={485}
            src={storie?.url as string}
            alt={storie?.name as string}
            className="rounded-xl"
          />
          <div>
            <h1>{storie?.name}</h1>
            <p>{storie?.date}</p>
          </div>
        </div>
      </div>
    </>
  );
}
