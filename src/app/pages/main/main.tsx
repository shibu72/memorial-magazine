import Downloadbutton from "@/components/ui/downloadbutton";
import Image from "next/image";
import React from "react";
export default function Main() {
  return (
    <>
      <div
        style={{ backgroundImage: "url(/assets/bg.png)" }}
        className="bg-no-repeat bg-cover bg-gradient-to-r from-[#0873DE] to-[#01274F] h-dvh flex justify-evenly items-center text-white"
      >
        <div className="grid gap-[60px] w-[700px]">
          <div className="grid justify-center items-center gap-3">
            <p className="text-[32px] font-semibold">
              Welcome to Memorial Moments Magazine
            </p>
            <h1 className="text-[56px] font-sans font-bold">
              Unforgettable Moments, Endless Love
            </h1>
            <p className="text-xl font-semibold">
              We understand every funeral is different because every person
              isunique and each family situation is different.
            </p>
          </div>
          <div>
            <div className="flex justify-start items-center gap-8">
              <Downloadbutton />
            </div>
          </div>
        </div>
        <div>
          <Image
            width={533.71}
            height={708}
            src={"/assets/Mobile.png"}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
