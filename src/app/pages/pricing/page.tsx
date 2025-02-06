import Contact from "@/components/shared/contact";
import HeroSection from "@/components/shared/heroSection";
import Pricing from "@/components/shared/pricing";
import React from "react";

export default function Page() {
  return (
    <>
      <HeroSection title="Pricing" breadcrumb="Home > Pricing" />
      <div className="w-[1320px] m-auto">
        <Pricing className="bg-transparent" />
        <Contact />
      </div>
    </>
  );
}
