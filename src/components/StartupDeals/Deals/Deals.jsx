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
          <div className="mx-auto w-full max-w-5xl rounded-3xl bg-white px-6 py-8 text-center shadow-xl shadow-slate-200/50 sm:px-10 sm:py-9">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A20202]">
              Startup Deals
            </p>
            <h2 className="mt-2.5 font-['Fraunces',Georgia,serif] text-4xl font-extrabold tracking-tight text-[#14202e] [text-shadow:0_1px_2px_rgba(20,32,46,0.08)] sm:text-5xl">
              Startup Deals
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#5b6b7c]/80">
              Discover exclusive offers, credits, and discounts for startups.
            </p>
          </div>

          <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
