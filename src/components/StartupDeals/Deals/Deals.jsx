import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { startupsData } from "../Data/startupsData";
import StartupCard from "./StartupCard";
import StartupDealsList from "./StartupDealsList";
import DealDetails from "./DealDetails";

export default function Deals({ onBack }) {
  const [selectedStartupId, setSelectedStartupId] = useState(null);
  const [selectedDeal, setSelectedDeal] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [selectedStartupId, selectedDeal]);

  const handleBack = () => {
    if (selectedDeal) {
      setSelectedDeal(null);
    } else if (selectedStartupId) {
      setSelectedStartupId(null);
    } else {
      onBack();
    }
  };

  return (
    <section className="min-h-screen bg-[#f6f7f9] p-8">
      <div className="max-w-5xl">
        <button
          type="button"
          onClick={handleBack}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#14202e] shadow-sm shadow-slate-200/40 transition hover:bg-slate-50"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2} />
          Back
        </button>
      </div>

      {selectedDeal ? (
        <DealDetails deal={selectedDeal} />
      ) : selectedStartupId ? (
        <StartupDealsList
          startupId={selectedStartupId}
          onViewDeal={setSelectedDeal}
        />
      ) : (
        <>
          <div className="mx-auto w-full max-w-5xl px-1 pb-2 pt-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A20202]">
              Our Partners
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#14202e] sm:text-4xl">
              Partner Startups
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#5b6b7c]/80 sm:text-base">
              Explore verified startup partners and unlock exclusive opportunities.
            </p>
          </div>

          <div className="mx-auto mt-10 flex w-full max-w-5xl flex-col gap-5">
            {startupsData.map((startup) => (
              <StartupCard
                key={startup.id}
                startup={startup}
                onViewMore={() => setSelectedStartupId(startup.id)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
