import React, { useState } from "react";
import HeroCard from "./HeroCard/HeroCard";
import Deals from "./Deals/Deals";
import UserDashboard from "./Dashboard/UserDashboard.jsx";
import Navbar from './Dashboard/Navbar.jsx';

export default function StartupDeals({ user, handleLogout, getInitials, setView }) {
  const [showDeals, setShowDeals] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f7f9] font-[Inter,system-ui,-apple-system,sans-serif] text-[#14202e] leading-[1.55] antialiased">
      {/* Render your custom logged-in Member Hub Navbar */}
      <Navbar 
        user={user} 
        setView={setView} 
        handleLogout={handleLogout} 
        getInitials={getInitials} 
      />

      {showDeals ? (
        <Deals onBack={() => setShowDeals(false)} />
      ) : (
        <HeroCard onExplore={() => setShowDeals(true)} />
      )}
    </div>
  );
}