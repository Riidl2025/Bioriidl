import { dealsData } from "../Data/dealsData";
import { startupsData } from "../Data/startupsData";
import DealCard from "./DealCard";

export default function StartupDealsList({ startupId, onViewDeal }) {
  const startup = startupsData.find((s) => s.id === startupId);
  const startupDeals = dealsData.filter((deal) => deal.startupId === startupId);

  if (!startup) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="rounded-3xl bg-white px-6 py-8 text-center shadow-xl shadow-slate-200/50 sm:px-10 sm:py-9">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A20202]">
          Deals by Startup
        </p>
        <h2 className="mt-2.5 font-['Fraunces',Georgia,serif] text-4xl font-extrabold tracking-tight text-[#14202e] [text-shadow:0_1px_2px_rgba(20,32,46,0.08)] sm:text-5xl">
          {startup.name}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-[#5b6b7c]/80">
          {startup.description}
        </p>
      </div>

      <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {startupDeals.map((deal) => (
          <DealCard
            key={deal.id}
            deal={deal}
            onViewMore={onViewDeal}
          />
        ))}
      </div>
    </div>
  );
}
