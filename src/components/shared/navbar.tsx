import Link from "next/link";
import React from "react";
import Button from "../ui/button";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

interface navType {
  url: string;
  name: string;
}

export const navLink = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "about us",
    url: "/pages/about",
  },
  {
    name: "services",
    url: "/pages/services",
  },
  {
    name: "stories",
    url: "/pages/stories",
  },
  {
    name: "pricing",
    url: "/pages/pricing",
  },
  {
    name: "blog",
    url: "/pages/blog",
  },
];

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-evenly items-center text-lg text-white absolute top-0 left-0 z-10 w-full">
        <Image
          width={170}
          height={80}
          className="w-[170px] h-[80px]"
          src={"/assets/logo.png"}
          alt="logo"
        />
        <div>
          <div className="flex gap-[60px] justify-center items-center text-lg capitalize">
            {navLink.map((nav: navType, index) => (
              <Link
                className="text-[#EAEAEA] focus:font-semibold focus:text-white"
                key={index}
                href={nav.url}
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/pages/contact">
          <Button className="flex items-center gap-2">
            Contact us <FiArrowRight className="text-xl" />
          </Button>
        </Link>
      </nav>
    </>
  );
}
