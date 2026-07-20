import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.png";

export default function HeroCard({ onExplore }) {
  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-white sm:min-h-[75vh] lg:min-h-[80vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto flex w-full items-center px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="flex w-full flex-col items-start text-left sm:w-[85%] lg:w-[70%] lg:pl-20">
          <span className="mb-6 inline-block text-[17px] font-bold uppercase tracking-[0.3em] text-[#A20202] md:mb-8 md:text-xl md:tracking-[0.32em]">
            Partner Offers
          </span>

          <h1 className="font-['Fraunces',Georgia,serif] text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Startup Deals
          </h1>

          <p className="mt-6 max-w-[600px] text-xl leading-[1.7] text-white/90 sm:mt-8 md:mt-10 md:text-2xl">
            Discover exclusive offers, credits, and discounts from startup
            partners.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 md:mt-12 lg:mt-14">
            <button
              type="button"
              onClick={onExplore}
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#A20202] px-12 py-5 text-xl font-semibold text-white shadow-md transition duration-200 hover:scale-[1.03] hover:bg-[#8B0202] hover:shadow-[0_10px_28px_rgba(162,2,2,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A20202]/40 focus-visible:ring-offset-2"
            >
              Explore Deals
              <ArrowRight className="h-5 w-5" strokeWidth={2} />
            </button>

            <Link
              to="/startupdeals/auth"
              className="inline-flex items-center rounded-xl border border-white/80 px-8 py-5 text-xl font-semibold text-white transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Login / Signup
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
