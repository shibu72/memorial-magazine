"use client";
import Contact from "@/components/shared/contact";
import HeroSection from "@/components/shared/heroSection";
import ImageCard from "@/components/ui/imageCard";
import data from "@/../public/data.json";
import React from "react";
import SectionTitle from "@/components/ui/sectionTitle";
interface itemType {
  id: number;
  url: string;
  name: string;
  date: string;
}

export default function Page() {
  return (
    <>
      <HeroSection title="Stories" breadcrumb="Home > Stories" />
      <div className="w-[1320px] m-auto mt-28 grid gap-20">
        <div className="m-auto w-[643px] text-center">
          <SectionTitle className="">Recent Stories</SectionTitle>
          <p className="text-xl font-normal">
            We offer a wide range of funeral services and arrangements to help
            you honor and celebrate the life of your loved one.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {data.imageCardData.map((item: itemType, index) => (
            <ImageCard
              key={index}
              id={item.id}
              url={item.url}
              name={item.name}
              date={item.date}
            />
          ))}
        </div>
        <Contact />
      </div>
    </>
  );
}
