import React from "react";
import SectionTitle from "../ui/sectionTitle";
import Button from "../ui/button";

export default function Contact() {
  return (
    <>
      <div className="w-[1320px] py-20 m-auto">
        <form action="" className="grid gap-20">
          <div className="w-[800px] text-center m-auto">
            <SectionTitle className="m-auto w-fit">Contact Us</SectionTitle>
            <p className="text-xl font-normal text-[#717070]">
              We offer a wide range of funeral services and arrangements to help
              you honor and celebrate the life of your loved one.
            </p>
          </div>

          <div className="grid justify-center items-center gap-6">
            <div className="space-x-6">
              <input
                className="p-4 w-[648px] border border-blue-400 rounded-md outline-0"
                type="text"
                placeholder="Full Name"
              />
              <input
                className="p-4 w-[648px] border border-blue-400 rounded-md outline-0"
                type="text"
                placeholder="Phone number"
              />
            </div>
            <div className="space-x-6">
              <input
                className="p-4 w-[648px] border border-blue-400 rounded-md outline-0"
                type="email"
                placeholder="Email"
              />
              <input
                className="p-4 w-[648px] border border-blue-400 rounded-md outline-0"
                type="text"
                placeholder="Address"
              />
            </div>
            <div>
              <textarea
                className="w-full border border-blue-400 rounded-md outline-0"
                name=""
                id=""
                cols={30}
                rows={10}
              ></textarea>
            </div>
          </div>

          <Button className="m-auto uppercase bg-blue-600 text-lg font-normal text-white">
            send message
          </Button>
        </form>
      </div>
    </>
  );
}
