import { useState } from "react";
import HeroSection from "./heroSection/HeroSection";
import TabNavigation from "./TabNavigation";
import FindScheme from "./findScheme";
import PsuRegulators from "./psuRegulators";
import StatePortals from "./statePortals";
import Glossary from "./glossary";
import About from "./about";

export default function GrantsAgentApp() {
  const [activeTab, setActiveTab] = useState("schemes");

  const switchTab = (name) => {
    setActiveTab(name);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f6f7f9] font-[Inter,system-ui,-apple-system,sans-serif] text-[#14202e] leading-[1.55] antialiased [&_a]:text-[#2563a8] [&_a:hover]:underline">
      <HeroSection />
      <TabNavigation activeTab={activeTab} onTabChange={switchTab} />

      {activeTab === "schemes" && <FindScheme />}
      {activeTab === "psu" && <PsuRegulators />}
      {activeTab === "states" && <StatePortals />}
      {activeTab === "glossary" && <Glossary />}
      {activeTab === "about" && <About />}
    </div>
  );
}
