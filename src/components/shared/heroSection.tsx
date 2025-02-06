import React from "react";

interface HeroSectionProps {
  title: string;
  breadcrumb: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, breadcrumb }) => {
  return (
    <div className="relative w-full h-[500px] text-white flex flex-col items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gradient-to-r from-[#0873DE] to-[#01274F] z-0"
        style={{ backgroundImage: `url(/assets/bg.png)` }}
      ></div>

      {/* Hero Content */}
      <h1 className="text-4xl font-bold relative z-10">{title}</h1>
      <p className="relative z-10 text-lg mt-2">{breadcrumb}</p>
    </div>
  );
};

export default HeroSection;
