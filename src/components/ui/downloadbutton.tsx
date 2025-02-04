import Image from "next/image";
import React from "react";
import Button from "./button";
import { FaApple } from "react-icons/fa";
import playstore from "../../../public/assets/logos_google-play-icon.png";

export default function Downloadbutton() {
  return (
    <>
      <Button className="flex justify-center items-center gap-2  ">
        <FaApple className="w-[27.58px] h-[34px]" />
        <p className="text-xs">
          Download on the{" "}
          <span className="text-xl block font-semibold leading-none">
            App Store
          </span>{" "}
        </p>
      </Button>
      <Button className="flex justify-center items-center gap-2">
        <Image width={30.76} height={34} src={playstore} alt="playstore" />
        <p className="text-xs">
          Download on the{" "}
          <span className="text-xl block font-semibold leading-none">
            Playstore
          </span>{" "}
        </p>
      </Button>
    </>
  );
}
