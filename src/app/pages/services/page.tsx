import Contact from "@/components/shared/contact";
import HeroSection from "@/components/shared/heroSection";
import QualityServices from "@/components/shared/quality-services";
import React from "react";

export default function Page() {
  return (
    <>
      <HeroSection title="Services" breadcrumb="Home > Services" />
      <div>
        <QualityServices className={"bg-transparent"} />
        <Contact />
      </div>
    </>
  );
}
