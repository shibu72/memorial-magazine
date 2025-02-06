import React from "react";
import { navLink } from "./navbar";
import Link from "next/link";
import Image from "next/image";
import Downloadbutton from "../ui/downloadbutton";
interface itemType {
  url: string;
  name: string;
}

export default function Footer() {
  return (
    <>
      <div className="bg-[#2381E5] text-white">
        <div className="flex justify-evenly items-start w-full pt-20">
          <div className="grid justify-center gap-4 w-[404.29]">
            <Image
              width={212.5}
              height={100}
              src={"/assets/logo.png"}
              alt="logo"
            />
            <p className="text-base">
              We understand every funeral is different because every person
              isunique and each family situation is different.
            </p>

            <div className="flex justify-between items-center gap-2">
              <Downloadbutton />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Quick Links</h2>
            <div className="grid justify-start gap-4 capitalize">
              {navLink.map((item: itemType, index) => (
                <Link key={index} href={item.url}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Services</h2>
            <div className="grid justify-center gap-4 capitalize">
              <Link href={""}>Individual Stories</Link>
              <Link href={""}>Veteran Stories</Link>
              <Link href={""}>Pets Stories</Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Info</h2>
            <div className="grid justify-center gap-4 capitalize">
              <p>(303) 274-8750</p>
              <p>memorial_moment@gmail.com</p>
              <p>13005 Greenville Avenue California, TX 70240</p>
              <p> {"Map & Directions"} </p>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly border-t py-6 mt-10 border-[#FFFFFF69]">
          <p className="text-lg font-normal">
            <Link href={"/pages/privacyPolicy"}>Privacy Policy </Link> /{" "}
            <Link href={"/pages/termsConditions"}>Terms & Conditions</Link>
          </p>

          <p className="text-base font-normal">
            memorial_moment © 2023 All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
