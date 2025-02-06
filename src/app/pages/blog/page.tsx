"use client";
import Contact from "@/components/shared/contact";
import HeroSection from "@/components/shared/heroSection";
import GradientButton from "@/components/ui/gradientButton";
import data from "@/../public/data.json";
import Image from "next/image";
import React from "react";
import SectionTitle from "@/components/ui/sectionTitle";

export default function Page() {
  return (
    <>
      <HeroSection title="Blog" breadcrumb="Home > Blog" />
      <div className="w-[1320px] m-auto mt-20 grid gap-20">
        <div className="w-[800px] m-auto text-center">
          <SectionTitle className="">Latest Blog</SectionTitle>
          <p className="text-xl font-normal">
            We offer a wide range of funeral services and arrangements to help
            you honor and celebrate the life of your loved one.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {data.blogData.map(
            (blog: { url: string; title: string; date: string }, index) => (
              <div
                key={index}
                className="w-[648px] bg-white m-auto rounded-xl shadow-lg"
              >
                <Image
                  width={500}
                  height={500}
                  className="w-[648px] h-[338px] object-cover rounded-t-xl"
                  src={blog.url}
                  alt={"image"}
                />
                <div className="p-6 w-[530px] grid gap-6">
                  <h3 className="text-lg font-normal">{blog.date}</h3>
                  <p className="text-[22px] font-medium">{blog.title}</p>
                  <div>
                    <GradientButton> Read More</GradientButton>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        <Contact />
      </div>
    </>
  );
}
