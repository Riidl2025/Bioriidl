import React, { useState } from "react";
import HeroCard from "./HeroCard/HeroCard";
import Deals from "./Deals/Deals";
import Navbar from "./Dashboard/Navbar.jsx";
import EditProfile from "./Dashboard/EditProfile.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { logout } from "./AuthenticationPg/api/authApi.js";
import { useSearchParams } from "react-router-dom";


export default function StartupDeals() {
  const [searchParams] = useSearchParams();
  const initialView = searchParams.get("view") === "deals" || searchParams.get("showDeals") === "true" ? "deals" : null;
  const [view, setView] = useState(initialView);
  const showDeals = view === "deals" || view === "dashboard";
  const { user, setUser, isLoading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      // Clear local auth state even if the API logout call fails.
    }
    setUser(null);
  };

  const getInitials = (name) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-[#f6f7f9] font-[Inter,system-ui,-apple-system,sans-serif] text-[#14202e] leading-[1.55] antialiased">
      {showDeals && user && !isLoading && (
        <Navbar user={user} handleLogout={handleLogout} getInitials={getInitials} setView={setView} />
      )}

      {view === 'profile' && user && (
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <EditProfile user={user} setView={setView} onProfileUpdated={(data) => { if (data?.user) setUser(data.user); }} />
        </div>
      )}

      {showDeals ? (
        <Deals onBack={() => setView(null)} />
      ) : (
        <HeroCard onExplore={() => setView('deals')} />
      )}
    </div>
  );
}