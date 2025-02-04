import React from "react";
import Image from "next/image";
import GradientButton from "./gradientButton";
import data from "../../../public/data.json";
interface cardType {
  image: string;
  title: string;
  description: string;
}
export default function Card() {
  return (
    <>
      {data.cardData.map((card: cardType, index) => (
        <div key={index} className="w-[412px] bg-white rounded-2xl">
          <Image
            width={500}
            height={500}
            className="rounded-t-2xl"
            src={card.image}
            alt="banner"
          />

          <div className="grid justify-center items-center gap-6 p-6">
            <h3 className="text-2xl font-semibold">{card.title}</h3>
            <p className="text-lg font-normal">
              {card.description.slice(0, 150)}...
            </p>
            <GradientButton>
              <span>More Details</span>
            </GradientButton>
          </div>
        </div>
      ))}
    </>
  );
}
