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
      <div className="px-1 pb-2 pt-2">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A20202]">
          Available Offers
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#14202e] sm:text-4xl">
          Offers from {startup.name}
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#5b6b7c]/80 sm:text-base">
          Exclusive benefits, discounts and tools just for you.
        </p>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-5xl flex-col gap-5">
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
