import {
  Flag,
  Rocket,
  Network,
  Landmark,
  ShieldCheck,
  Map as MapIcon,
} from "lucide-react";
import GovtOfIndiaEmblem from "../../../assets/images/GrantsAgent/GovtOfIndiaEmblem.jpg";

const STATS = [
  { value: "69", label: "Central Schemes", icon: Flag },
  { value: "30", label: "Startup-Specific", icon: Rocket },
  { value: "39", label: "Startup-Relevant", icon: Network },
  { value: "36", label: "Ministries/Depts", icon: Landmark },
  { value: "17", label: "PSU & Regulators", icon: ShieldCheck },
  { value: "36", label: "State/UT Portals", icon: MapIcon },
];

function StatCard({ value, label, icon: Icon }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-lg border-2 border-[#A20202] bg-white/95 px-2 py-2 text-center shadow-[0_2px_8px_rgba(162,2,2,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(162,2,2,0.14)] sm:rounded-xl sm:px-2.5 sm:py-2.5">
      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#A20202]/8 sm:h-7 sm:w-7">
        <Icon
          className="h-3 w-3 text-[#A20202] sm:h-3.5 sm:w-3.5"
          strokeWidth={1.75}
        />
      </div>
      <div className="font-['JetBrains_Mono',monospace] text-[14px] font-bold leading-none text-[#A20202] sm:text-[15px] lg:text-[18px]">
        {value}
      </div>
      <div className="text-[7px] font-semibold leading-tight text-[#A20202] sm:text-[8px] lg:text-[9px]">
        {label}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Main Content Layout */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-6 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* National Emblem Image */}
            <img
              src={GovtOfIndiaEmblem}
              alt="Government of India Emblem"
              className="h-8 w-auto flex-shrink-0 object-contain sm:h-9 lg:h-10"
            />
            <span className="text-[12px] font-medium text-[#3a3a3a] sm:text-[13.5px] lg:text-[15px]">
              Government of India · Startup Playbook · June 2026
            </span>
          </div>

          <h1 className="mt-4 font-['Fraunces',Georgia,serif] text-[23px] font-bold leading-[1.08] text-[#A20202] sm:mt-5 sm:text-[28px] lg:text-[33px] xl:text-[37px]">
            Government Schemes &amp; Initiatives for Startups
          </h1>

          <p className="mt-3 text-[13px] leading-relaxed text-[#1E2A3A] sm:text-[14px] lg:text-[15px]">
            An interactive finder for every Central Government scheme, fund and
            programme supporting Indian startups — search, filter by what you
            need, and open the full one-pager with eligibility and how to apply.
          </p>
        </div>

        {/* Stat cards */}
        <div className="mt-8 grid grid-cols-3 gap-2 sm:mt-12 sm:grid-cols-6 sm:gap-2.5 lg:mt-16 lg:gap-3">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
