"use client";
import RecentStories from "@/components/shared/recent-stories";
import Main from "./pages/main/main";
import QualityServices from "@/components/shared/quality-services";
import System from "@/components/shared/system";
import OurTeam from "@/components/shared/our-team";
import Testimonials from "@/components/shared/testimonials";
import Pricing from "@/components/shared/pricing";
import Contact from "@/components/shared/contact";

export default function Home() {
  return (
    <>
      <Main />
      <RecentStories />
      <QualityServices className="" />
      <System />
      <OurTeam className="" />
      <Testimonials />
      <Pricing className="" />
      <Contact />
    </>
  );
}
