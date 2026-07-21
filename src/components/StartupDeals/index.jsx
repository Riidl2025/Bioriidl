import { useState } from "react";
import HeroCard from "./HeroCard/HeroCard";
import Deals from "./Deals/Deals";
import UserDashboard from "./Dashboard/UserDashboard.jsx";

export default function StartupDeals() {
  const [showDeals, setShowDeals] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f7f9] font-[Inter,system-ui,-apple-system,sans-serif] text-[#14202e] leading-[1.55] antialiased">
      {showDeals ? (
        <Deals onBack={() => setShowDeals(false)} />
      ) : (
        <HeroCard onExplore={() => setShowDeals(true)} />
      )}
    </div>
  );
}
