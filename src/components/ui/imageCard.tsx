import Image from "next/image";
import Link from "next/link";
import React from "react";
interface itemType {
  id: number;
  url: string;
  name: string;
  date: string;
}
export default function ImageCard({ url, id, name, date }: itemType) {
  return (
    <>
      <Link
        href={`/pages/stories/${id}`}
        className="w-[312px] h-[382px] grid justify-center items-center text-center text-white relative"
      >
        <Image
          width={500}
          height={500}
          className="w-[312px] h-[382px] object-cover"
          src={url}
          alt={name}
        />
        <div className="absolute bottom-0 bg-[#2B2A2A80] backdrop-blur-sm w-full space-y-2 p-4">
          <p className="text-2xl font-semibold">{name}</p>
          <p className="text-base font-normal">{date}</p>
        </div>
      </Link>
    </>
  );
}
