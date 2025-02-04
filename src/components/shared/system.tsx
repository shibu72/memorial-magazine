import React from "react";
import SectionTitle from "../ui/sectionTitle";
import Image from "next/image";
import Icon from "@/../public/assets/Icon.png";
import group from "@/../public/assets/Group.png";
import mobile11 from "@/../public/assets/Mobile 1 1.png";
export default function System() {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-12 py-40">
        <div className="w-[622px] grid gap-12">
          <div className="grid gap-4">
            <SectionTitle className="w-[536px] leading-tight">
              We are here to help you{" "}
            </SectionTitle>
            <p className="text-[#717070]">
              The experienced funeral directors at Name Funeral Home will guide
              you through the aspects of the funeral service with compassion,
              dignity, and respect.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="flex flex-row justify-start items-start gap-6">
              <Image width={22.17} height={28.5} src={Icon} alt="icon" />
              <div className="grid gap-4 ">
                <h4 className="text-2xl font-semibold">Pre-planning</h4>
                <p className="text-xl font-normal text-[#717070]">
                  The best way to spare your loved ones the emotional and
                  financial strain.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-start gap-6">
              <Image width={28.11} height={28} src={group} alt="group" />
              <div className="grid gap-4 ">
                <h4 className="text-2xl font-semibold">Quality services</h4>
                <p className="text-xl font-normal text-[#717070]">
                  We offer high-quality services for families to create healing
                  moments after loss.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[627px]">
          <Image
            width={500}
            height={500}
            className="w-full"
            src={mobile11}
            alt="mobile"
          />
        </div>
      </div>
    </>
  );
}
