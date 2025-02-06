"use client";
import React, { useEffect, useState } from "react";
import SectionTitle from "../ui/sectionTitle";
import Image from "next/image";
import { FaArrowRight, FaCircleCheck } from "react-icons/fa6";
import Button from "../ui/button";

interface pricingType {
  title: string;
  price: number;
  time: string;
  stories: string;
  features: string[];
}

export default function Pricing({ className }: { className: string }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result?.pricingData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <div className={`py-20 bg-blue-50 ${className}`}>
        <div className="w-[800px] m-auto text-center">
          <SectionTitle className="">Pricing</SectionTitle>
          <p className="text-xl font-normal">
            We offer a wide range of funeral services and arrangements to help
            you honor and celebrate the life of your loved one.
          </p>
        </div>

        <div className="flex justify-center items-center gap-4">
          {data.map((pricing: pricingType, index) => (
            <div
              key={index}
              className="w-[424px] m-auto mt-10 p-6 bg-white rounded-xl shadow-lg group transition duration-200 hover:bg-gradient-to-r from-bgBlue to-bgDarkBlue hover:text-white "
            >
              <div className="flex justify-center items-center gap-4">
                <Image
                  width={26.67}
                  height={22.12}
                  src={`/assets/crown.png`}
                  alt="crown"
                />
                <h2 className="text-[34px] font-semibold">{pricing.title}</h2>
              </div>
              <div className="text-center m-auto">
                <h2 className="text-[44px] font-semibold text-blue-600 group-hover:text-white">
                  ${pricing.price}/{" "}
                  <span className="text-2xl font-semibold">{pricing.time}</span>
                </h2>
                <p className="text-3xl font-semibold text-blue-500 group-hover:text-white">
                  {pricing.stories}
                </p>
              </div>

              <div className="grid justify-center items-center gap-4 mt-6">
                {pricing.features.map((item: string, index: number) => (
                  <div
                    key={index}
                    className="flex justify-start items-center gap-2"
                  >
                    <FaCircleCheck className="text-blue-600 group-hover:text-white" />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="m-auto w-fit mt-10">
                <Button className="text-white group-hover:text-black group-hover:bg-white bg-gradient-to-r from-bgBlue to-bgDarkBlue">
                  <span>order now </span>
                  <FaArrowRight />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
