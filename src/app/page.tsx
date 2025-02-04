"use client";
import RecentStories from "@/components/shared/recent-stories";
import Main from "./pages/main/main";
import QualityServices from "@/components/shared/quality-services";
import System from "@/components/shared/system";
import OurTeam from "@/components/shared/our-team";

export default function Home() {
  return (
    <>
      <Main />
      <RecentStories />
      <QualityServices />
      <System />
      <OurTeam />
    </>
  );
}
