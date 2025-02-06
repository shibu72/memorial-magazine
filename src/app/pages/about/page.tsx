"use client";
import Contact from "@/components/shared/contact";
import HeroSection from "@/components/shared/heroSection";
import OurTeam from "@/components/shared/our-team";
import GradientButton from "@/components/ui/gradientButton";
import ImageCard from "@/components/ui/imageCard";
import SectionTitle from "@/components/ui/sectionTitle";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data.imageCardData));
  });
  return (
    <>
      {/* Hero Section  */}
      <HeroSection title="About Us" breadcrumb="Home > About Us" />

      {/* About Us */}
      <div className="w-[1320px] m-auto grid gap-24 justify-center items-center py-28">
        <div className="text-center w-[1111px] grid gap-10 m-auto">
          <SectionTitle className="uppercase">
            TO kNOW MORE ABOUT US{" "}
          </SectionTitle>
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div>
          <Image width={1320} height={700} src={"/assets/bg.png"} alt="about" />
        </div>

        <div className="flex gap-10">
          <div className="grid gap-5">
            <h2 className="text-[34px] font-semibold">
              <span className="text-blue-500">02.</span> Mission
            </h2>
            <p>
              Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Quis nos- trud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse. exercitation ullamco labo-
              ris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="grid gap-5">
            <h2 className="text-[34px] font-semibold">
              <span className="text-blue-500">01.</span> Our History
            </h2>
            <p>
              Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Quis nos- trud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse. exercitation ullamco labo-
              ris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="grid justify-center items-center gap-20">
          {/* Recent Stories  */}
          <div className="flex flex-row justify-between items-center">
            <div className="w-[643px] space-y-5">
              <SectionTitle className="uppercase">Recent Stories</SectionTitle>
              <p className="text-xl font-normal">
                We offer a wide range of funeral services and arrangements to
                help you honor and celebrate the life of your loved one.
              </p>
            </div>

            <Link href={"/pages/stories"}>
              <GradientButton>See More</GradientButton>
            </Link>
          </div>

          <div className="flex gap-6 m-auto">
            {data
              .slice(0, 4)
              .map(
                (
                  item: { url: string; name: string; date: string; id: number },
                  index,
                ) => (
                  <ImageCard
                    key={index}
                    id={item.id}
                    url={item.url}
                    name={item.name}
                    date={item.date}
                  />
                ),
              )}
          </div>
        </div>
      </div>

      <OurTeam className="bg-transparent" />
      <Contact />
    </>
  );
}
