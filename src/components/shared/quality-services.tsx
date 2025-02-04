import React from "react";
import SectionTitle from "../ui/sectionTitle";
import Card from "../ui/card";
export default function QualityServices() {
  return (
    <>
      <div className="bg-blue-50">
        <div className="py-20">
          <div className="w-[800px] m-auto mb-20 text-center">
            <SectionTitle className="">Quality Services</SectionTitle>
            <p className="text-xl font-normal">
              We offer a wide range of funeral services and arrangements to help
              you honor and celebrate the life of your loved one.
            </p>
          </div>

          <div className="flex justify-center items-center gap-6">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
