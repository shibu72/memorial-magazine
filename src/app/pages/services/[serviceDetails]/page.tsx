import HeroSection from "@/components/shared/heroSection";
import React from "react";
import data from "@/../public/data.json";
import Image from "next/image";
import Contact from "@/components/shared/contact";
import { FaPhone } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import GradientButton from "@/components/ui/gradientButton";

interface detailsType {
  head: string;
  para: string;
}

interface serviceType {
  id: number;
  image: string;
  title: string;
  description: string;
  details?: detailsType[];
}
export default function Page({
  params,
}: {
  params: { serviceDetails: string };
}) {
  const service: serviceType | undefined = data.cardData.find(
    (s) => s.id === parseInt(params.serviceDetails),
  );
  console.log(params);
  return (
    <>
      <HeroSection
        title="Services Details"
        breadcrumb="Home > Services > Services Details"
      />
      <div className="relative m-auto my-28 w-[1320px]">
        <div className="grid justify-start items-center gap-6 m-auto">
          <Image
            width={936}
            height={485}
            src={service?.image as string}
            alt={service?.title as string}
            className="rounded-xl"
          />

          {service?.details?.map((detail: detailsType, index: number) => (
            <div key={index} className="w-[936px]">
              <h2 className="first:text-3xl font-semibold">{detail.head}</h2>
              <p className="text-xl font-normal">{detail.para}</p>
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-0 w-[360px] grid justify-center items-center gap-6">
          <div className="grid gap-4 items-center justify-center rounded-xl bg-white shadow-lg p-6 m-auto">
            <h3 className="text-[22px] font-semibold">
              Memorial Moment Support
            </h3>
            <p className="text-base font-normal">
              If you&apos;d like to speak to us directly, call free 24 hours a
              day.
            </p>
            <div className="flex items-center gap-2">
              <FaPhone className="text-2xl" />
              <span>(303) 274-8750</span>
            </div>
            <div className="flex items-center gap-2">
              <IoIosMailOpen className="text-2xl" />
              <span>memorial_moment@gmail.com</span>
            </div>
          </div>

          <div className="grid gap-4 items-center justify-center rounded-xl bg-white shadow-lg p-6 m-auto">
            <h3 className="text-[22px] font-semibold">
              Memorial Moment Directors
            </h3>
            <p className="text-base font-normal">
              Our friendly team of fully trained staff share our drive to
              provide service..
            </p>
            <div>
              <GradientButton> Meet The Team</GradientButton>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Contact />
      </div>
    </>
  );
}
