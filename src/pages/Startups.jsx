{/* import statStartups from "../assets/images/stat1.png";
import statFunding from "../assets/images/stat2.png";
import statJobs from "../assets/images/stat3.png";
import statIncubated from "../assets/images/stat4.png";

import domainFood from "../assets/images/foodDomain.png";
import domainBiotech from "../assets/images/biotechDomain.png";
import domainHealthcare from "../assets/images/healthcareDomain.png";
import domainAgriculture from "../assets/images/agricultureDomain.png";

import healthEatosLogo from "../assets/images/startupHealtheatos.jpg";
import agroBeadsLogo from "../assets/images/startupAgrobeads.jpg";
import dogMyLoveLogo from "../assets/images/startupDogsmylove.png";
import indraLogo from "../assets/images/startupIndra.jpg";
import ibandLogo from "../assets/images/startupIband.png";
import questDentalLogo from "../assets/images/startupQuestDental.jpg";

export default function Startups() {
  return (
    <div className="w-full">
      <section className="w-full px-6 py-16 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Startups at Bioriidl
          </h1>

          <p className="mt-4 max-w-3xl text-slate-600">
            Bioriidl aims to nucleate and nurture technology and knowledge-based
            enterprises leveraging biotechnology across biopharma, agrobiotech,
            industrial biotech, and clean technology.
          </p>

          <a
            // href="https://docs.google.com/forms/d/e/1FAIpQLSdDyK6JpLvsbvayZmvvzLOZBvZmVnqxtCmG_RD3FrpKCDFwrQ/viewform?c=0&w=1"
            href="https://airtable.com/apppcc53BEKn1w6Rs/shr3cZLFhHRJk2DIP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-6 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-md"
          >
            Apply for Incubation
          </a>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4 animate-fade-slide-up">
          {[
            { img: statStartups, value: "17+", label: "Total Startups" },
            { img: statFunding, value: "$1 Million+", label: "Funding Raised" },
            { img: statJobs, value: "50+", label: "Full Time Jobs Created" },
            { img: statIncubated, value: "10", label: "Currently Incubated" },
          ].map((item) => (
            <div
              key={item.label}
              className="group rounded-xl border border-slate-200 bg-slate-50 p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-emerald-200"
            >
              <img
                src={item.img}
                alt={item.label}
                className="mx-auto w-24 h-24 object-contain mb-4 transition-transform duration-200 group-hover:scale-105"
              />
              <p className="text-2xl font-bold text-slate-900">{item.value}</p>
              <p className="text-sm text-slate-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">
            We accept startups in the domain of
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { name: "Food", img: domainFood },
              { name: "Biotech", img: domainBiotech },
              { name: "Healthcare", img: domainHealthcare },
              { name: "Agriculture", img: domainAgriculture },
            ].map((d) => (
              <div
                key={d.name}
                className="group rounded-xl bg-white border border-slate-200 p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-emerald-200"
              >
                <img
                  src={d.img}
                  alt={d.name}
                  className="mx-auto w-24 h-24 object-contain mb-4 transition-transform duration-200 group-hover:scale-105"
                />
                <p className="font-medium text-slate-800">{d.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900 mb-10">
            Startups Incubated at Bioriidl
          </h2>

          <div className="space-y-8">
            <StartupCard
              logo={healthEatosLogo}
              name="Health-Eatos"
              description="Health-Eatos is a company making nachos from beans that are high on nutrition and protein. Starting off as a final year project from KJ Somaiya College of Science and Commerce, this company provides a healthy, fibre-rich version of Nachos at highly affordable prices."
              links={[{ label: "Facebook", href: "FACEBOOK_LINK" }]}
            />

            <StartupCard
              logo={agroBeadsLogo}
              name="AgroBeads"
              description="Agrobeads was the final year project of KJSSC students which accelerates the growth of any plant and increases the productivity with only one product. Agrobeads work on enhancing the quality of roots, shoots, fruits and also the leaf span. It has no side effects on the soil as well as the plant. It is easy to use. One has to just put a few of the beads near the roots. This has been tried with plants at lab scale and for home gardening which provides good results. Agrobeads are a great solution for solving the problem of lands which are contaminated with inorganic phosphates."
              links={[{ label: "Website", href: "https://www.agrobeads.com/" }]}
            />

            <StartupCard
              logo={dogMyLoveLogo}
              name="Dog My Love"
              description="Dog My Love is a dog care products and accessories shop located in California It was .started by students of S K Somaiya Vinaymandir Junior College during their college days and today it sells a number of products ranging from collars, leashes, dog food and toys, to doghouses, beds, brushes and bowls."
              links={[{ label: "Website", href: "http://dogmylove.in/" }]}
            />

            <StartupCard
              logo={indraLogo}
              name="Indra"
              description="Indra is an incubated startup at Bioriidl working on innovative technology-driven solutions."
            />

            <StartupCard
              logo={ibandLogo}
              name="i-Band"
              description="i-Band is a Bioriidl-incubated startup focused on developing impactful healthcare technology solutions."
            />

            <StartupCard
              logo={questDentalLogo}
              name="Quest Dental"
              description="Quest Dental is an incubated startup addressing challenges in dental healthcare through innovative solutions."
            />

            <StartupCard
              name="UFarm"
              description="UFarm is an incubated startup at Bioriidl working in the agriculture domain."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function StartupCard({ logo, name, links = [], category }) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-[#A20202]/15 border-l-4 border-l-[#A20202] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#A20202]/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4 rounded-3xl border border-red-100 bg-red-50 p-4 shadow-sm">
            {logo ? (
              <img
                src={logo}
                alt={name}
                className="h-20 w-auto object-contain rounded-2xl transition duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-100 text-sm text-[#A20202]">
                No logo
              </div>
            )}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A20202]/80">
                Startup
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl transition-colors duration-300 group-hover:text-[#A20202]">
                {name}
              </h3>
            </div>
          </div>
          {category && (
            <span className="inline-flex h-fit rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#A20202]">
              {category}
            </span>
          )}
        </div>

        {links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#A20202]/20 bg-[#A20202]/5 px-4 py-2 text-sm font-semibold text-[#A20202] transition duration-300 hover:bg-[#A20202]/10 hover:shadow-sm"
              >
                {l.label}
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
*/}

import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { startups } from "../data/startups.js";

export default function Startups() {
  const [query, setQuery] = useState("");
  const [funding, setFunding] = useState("All");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return startups.filter((s) => {
      const matchesFunding = funding === "All" || s.funding === funding;
      const matchesCategory = category === "All" || s.category === category;
      const matchesQuery = q === "" || s.name.toLowerCase().startsWith(q);
      return matchesFunding && matchesCategory && matchesQuery;
    });
  }, [query, funding, category]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-slate-50/40 to-white text-slate-900">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Botanical Plant / Root System - Left Side, Large */}
        <svg
          className="absolute -left-16 top-1/4 h-[480px] w-[320px] opacity-[0.12] animate-float"
          style={{ animationDelay: '1.5s', transform: 'translate(-40px, -60px)' }}
          viewBox="0 0 200 400"
          fill="none"
          aria-hidden="true"
        >
          <path d="M 100 20 L 100 80" stroke="#A20202" strokeWidth="3" opacity="0.28" />
          <path d="M 100 50 L 70 90" stroke="#A20202" strokeWidth="2.5" opacity="0.25" />
          <path d="M 100 50 L 130 90" stroke="#A20202" strokeWidth="2.5" opacity="0.25" />
          <path d="M 100 80 L 80 130" stroke="#A20202" strokeWidth="2" opacity="0.22" />
          <path d="M 100 80 L 120 130" stroke="#A20202" strokeWidth="2" opacity="0.22" />
          <ellipse cx="70" cy="95" rx="8" ry="12" stroke="#A20202" strokeWidth="2" opacity="0.2" fill="none" />
          <ellipse cx="130" cy="95" rx="8" ry="12" stroke="#A20202" strokeWidth="2" opacity="0.2" fill="none" />
          <path d="M 80 135 L 60 180" stroke="#A20202" strokeWidth="1.5" opacity="0.18" />
          <path d="M 80 135 L 90 170" stroke="#A20202" strokeWidth="1.5" opacity="0.18" />
          <path d="M 120 135 L 110 170" stroke="#A20202" strokeWidth="1.5" opacity="0.18" />
          <path d="M 120 135 L 140 180" stroke="#A20202" strokeWidth="1.5" opacity="0.18" />
          <path d="M 60 190 L 50 220" stroke="#A20202" strokeWidth="1" opacity="0.15" />
          <path d="M 60 190 L 70 220" stroke="#A20202" strokeWidth="1" opacity="0.15" />
          <path d="M 140 190 L 130 220" stroke="#A20202" strokeWidth="1" opacity="0.15" />
          <path d="M 140 190 L 150 220" stroke="#A20202" strokeWidth="1" opacity="0.15" />
          <circle cx="100" cy="25" r="6" fill="#A20202" opacity="0.15" />
        </svg>

        {/* Large DNA Helix - Center Left, Large */}
        <svg
          className="absolute left-1/4 top-1/3 h-[450px] w-[320px] opacity-[0.12] animate-float"
          style={{ animationDelay: '0s', transform: 'translate(-80px, 20px)' }}
          viewBox="0 0 200 400"
          fill="none"
          aria-hidden="true"
        >
          <g>
            {[0, 40, 80, 120, 160, 200, 240, 280, 320, 360].map((y, i) => (
              <g key={i}>
                <path d={`M 80 ${y} Q 110 ${y + 15} 100 ${y + 30} Q 90 ${y + 15} 80 ${y}`} stroke="#A20202" strokeWidth="2.5" fill="none" opacity="0.25" />
                <path d={`M 120 ${y} Q 90 ${y + 15} 100 ${y + 30} Q 110 ${y + 15} 120 ${y}`} stroke="#A20202" strokeWidth="2.5" fill="none" opacity="0.25" />
                <line x1="75" y1={y + 8} x2="125" y2={y + 8} stroke="#A20202" strokeWidth="1.5" opacity="0.18" />
              </g>
            ))}
          </g>
        </svg>

        {/* Massive Petri Dish - Top Right, Very Large */}
        <svg
          className="absolute -top-32 right-0 h-[400px] w-[400px] opacity-[0.10] animate-float"
          style={{ animationDelay: '1s', transform: 'translate(100px, -100px)' }}
          viewBox="0 0 300 300"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="150" cy="150" r="140" stroke="#A20202" strokeWidth="3" opacity="0.28" />
          <circle cx="150" cy="150" r="130" stroke="#A20202" strokeWidth="2" opacity="0.20" />
          <ellipse cx="150" cy="160" rx="120" ry="20" stroke="#A20202" strokeWidth="2.5" opacity="0.20" />
          <circle cx="110" cy="130" r="25" fill="none" stroke="#A20202" strokeWidth="2" opacity="0.22" />
          <circle cx="160" cy="145" r="18" fill="none" stroke="#A20202" strokeWidth="2" opacity="0.22" />
          <circle cx="140" cy="170" r="20" fill="none" stroke="#A20202" strokeWidth="2" opacity="0.22" />
          <circle cx="180" cy="155" r="15" fill="none" stroke="#A20202" strokeWidth="2" opacity="0.20" />
          <circle cx="130" cy="165" r="12" fill="none" stroke="#A20202" strokeWidth="1.5" opacity="0.18" />
        </svg>

        {/* Large Bacteria/Cell Cluster - Top Left, Medium-Large */}
        <svg
          className="absolute -top-20 -left-32 h-[420px] w-[420px] opacity-[0.11] animate-float"
          style={{ animationDelay: '0.5s', transform: 'translate(-60px, -40px)' }}
          viewBox="0 0 260 260"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="80" cy="80" r="50" stroke="#A20202" strokeWidth="2.5" opacity="0.25" />
          <circle cx="80" cy="80" r="35" stroke="#A20202" strokeWidth="1.5" opacity="0.20" />
          <circle cx="80" cy="80" r="15" fill="none" stroke="#A20202" strokeWidth="1.5" opacity="0.18" />
          <circle cx="180" cy="100" r="45" stroke="#A20202" strokeWidth="2.5" opacity="0.25" />
          <circle cx="180" cy="100" r="30" stroke="#A20202" strokeWidth="1.5" opacity="0.20" />
          <circle cx="180" cy="100" r="12" fill="none" stroke="#A20202" strokeWidth="1.5" opacity="0.18" />
          <path d="M 130 140 Q 160 110 190 140 Q 160 160 130 140" stroke="#A20202" strokeWidth="2" opacity="0.20" fill="none" />
          <line x1="80" y1="130" x2="80" y2="190" stroke="#A20202" strokeWidth="2" opacity="0.18" />
          <line x1="50" y1="160" x2="110" y2="160" stroke="#A20202" strokeWidth="2" opacity="0.18" />
          <circle cx="140" cy="200" r="20" fill="none" stroke="#A20202" strokeWidth="1.5" opacity="0.18" />
        </svg>

        {/* Large Microscope / Lab Equipment - Bottom Right, Medium */}
        <svg
          className="absolute bottom-0 -right-24 h-[380px] w-[320px] opacity-[0.10] animate-float"
          style={{ animationDelay: '1.8s', transform: 'translate(120px, 60px)' }}
          viewBox="0 0 200 300"
          fill="none"
          aria-hidden="true"
        >
          <rect x="75" y="10" width="50" height="100" stroke="#A20202" strokeWidth="2.5" opacity="0.25" />
          <circle cx="100" cy="140" r="50" stroke="#A20202" strokeWidth="2.5" opacity="0.25" />
          <circle cx="100" cy="140" r="35" stroke="#A20202" strokeWidth="2" opacity="0.20" />
          <circle cx="100" cy="140" r="20" stroke="#A20202" strokeWidth="1.5" opacity="0.18" />
          <rect x="70" y="200" width="60" height="25" stroke="#A20202" strokeWidth="2" opacity="0.20" />
          <line x1="50" y1="225" x2="150" y2="225" stroke="#A20202" strokeWidth="2.5" opacity="0.20" />
          <rect x="40" y="225" width="120" height="60" stroke="#A20202" strokeWidth="2" opacity="0.18" />
          <line x1="100" y1="10" x2="100" y2="190" stroke="#A20202" strokeWidth="1.5" opacity="0.15" />
          <line x1="60" y1="50" x2="140" y2="50" stroke="#A20202" strokeWidth="1.5" opacity="0.15" />
        </svg>


        {/* Biotech Mesh / Neural Network Style - Lower Right, Medium */}
        <svg
          className="absolute bottom-1/3 -right-40 h-[380px] w-[380px] opacity-[0.10] animate-float"
          style={{ animationDelay: '2s', transform: 'translate(100px, -40px)' }}
          viewBox="0 0 260 260"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="8" fill="#A20202" opacity="0.20" />
          <circle cx="130" cy="40" r="7" fill="#A20202" opacity="0.20" />
          <circle cx="210" cy="60" r="8" fill="#A20202" opacity="0.20" />
          <circle cx="80" cy="130" r="6" fill="#A20202" opacity="0.20" />
          <circle cx="180" cy="140" r="7" fill="#A20202" opacity="0.20" />
          <circle cx="60" cy="210" r="8" fill="#A20202" opacity="0.20" />
          <circle cx="160" cy="220" r="7" fill="#A20202" opacity="0.20" />
          <line x1="50" y1="50" x2="130" y2="40" stroke="#A20202" strokeWidth="2" opacity="0.20" />
          <line x1="130" y1="40" x2="210" y2="60" stroke="#A20202" strokeWidth="2" opacity="0.20" />
          <line x1="50" y1="50" x2="80" y2="130" stroke="#A20202" strokeWidth="2" opacity="0.20" />
          <line x1="210" y1="60" x2="180" y2="140" stroke="#A20202" strokeWidth="2" opacity="0.20" />
          <line x1="80" y1="130" x2="60" y2="210" stroke="#A20202" strokeWidth="2" opacity="0.20" />
          <line x1="180" y1="140" x2="160" y2="220" stroke="#A20202" strokeWidth="2" opacity="0.20" />
          <line x1="80" y1="130" x2="180" y2="140" stroke="#A20202" strokeWidth="1.5" opacity="0.15" />
        </svg>

        {/* Additional Large DNA Fragment - Lower Left, Medium-Large */}
        <svg
          className="absolute bottom-1/4 -left-20 h-[380px] w-[280px] opacity-[0.10] animate-float"
          style={{ animationDelay: '1.2s', transform: 'translate(-60px, 20px)' }}
          viewBox="0 0 180 360"
          fill="none"
          aria-hidden="true"
        >
          <g>
            {[0, 50, 100, 150, 200, 250, 300].map((y, i) => (
              <g key={i}>
                <path d={`M 60 ${y} Q 85 ${y + 18} 75 ${y + 36} Q 65 ${y + 18} 60 ${y}`} stroke="#A20202" strokeWidth="2" fill="none" opacity="0.22" />
                <path d={`M 120 ${y} Q 95 ${y + 18} 105 ${y + 36} Q 115 ${y + 18} 120 ${y}`} stroke="#A20202" strokeWidth="2" fill="none" opacity="0.22" />
                <line x1="55" y1={y + 15} x2="125" y2={y + 15} stroke="#A20202" strokeWidth="1.5" opacity="0.15" />
              </g>
            ))}
          </g>
        </svg>

        {/* Bacterial Colony / Dots Pattern - Center Upper, Small-Medium */}
        <svg
          className="absolute top-1/2 left-1/4 h-[280px] w-[280px] opacity-[0.11] animate-float"
          style={{ animationDelay: '0.3s', transform: 'translate(120px, -80px)' }}
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="60" cy="40" r="4" fill="#A20202" opacity="0.20" />
          <circle cx="100" cy="30" r="5" fill="#A20202" opacity="0.22" />
          <circle cx="140" cy="45" r="4" fill="#A20202" opacity="0.20" />
          <circle cx="45" cy="80" r="5" fill="#A20202" opacity="0.20" />
          <circle cx="100" cy="85" r="6" fill="#A20202" opacity="0.22" />
          <circle cx="155" cy="75" r="4" fill="#A20202" opacity="0.20" />
          <circle cx="70" cy="130" r="5" fill="#A20202" opacity="0.22" />
          <circle cx="120" cy="140" r="4" fill="#A20202" opacity="0.20" />
          <circle cx="160" cy="130" r="5" fill="#A20202" opacity="0.20" />
          <circle cx="100" cy="170" r="6" fill="#A20202" opacity="0.22" />
          <path d="M 60 40 L 100 30 L 140 45" stroke="#A20202" strokeWidth="1" opacity="0.12" fill="none" />
          <path d="M 45 80 L 100 85 L 155 75" stroke="#A20202" strokeWidth="1" opacity="0.12" fill="none" />
          <path d="M 70 130 L 120 140 L 160 130" stroke="#A20202" strokeWidth="1" opacity="0.12" fill="none" />
        </svg>

        {/* Large Molecular Structure - Right Side, Medium */}
        <svg
          className="absolute top-2/3 right-1/4 h-[320px] w-[320px] opacity-[0.10] animate-float"
          style={{ animationDelay: '2.2s', transform: 'translate(100px, 40px)' }}
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="100" cy="50" r="10" fill="#A20202" opacity="0.20" />
          <circle cx="150" cy="100" r="9" fill="#A20202" opacity="0.20" />
          <circle cx="100" cy="150" r="10" fill="#A20202" opacity="0.20" />
          <circle cx="50" cy="100" r="9" fill="#A20202" opacity="0.20" />
          <circle cx="140" cy="60" r="7" fill="#A20202" opacity="0.18" />
          <circle cx="160" cy="130" r="8" fill="#A20202" opacity="0.18" />
          <line x1="100" y1="50" x2="150" y2="100" stroke="#A20202" strokeWidth="2.5" opacity="0.22" />
          <line x1="100" y1="50" x2="50" y2="100" stroke="#A20202" strokeWidth="2.5" opacity="0.22" />
          <line x1="100" y1="50" x2="100" y2="150" stroke="#A20202" strokeWidth="2.5" opacity="0.22" />
          <line x1="150" y1="100" x2="100" y2="150" stroke="#A20202" strokeWidth="2.5" opacity="0.22" />
          <line x1="50" y1="100" x2="100" y2="150" stroke="#A20202" strokeWidth="2.5" opacity="0.22" />
          <line x1="140" y1="60" x2="160" y2="130" stroke="#A20202" strokeWidth="2" opacity="0.15" />
        </svg>
      </div>
      <section className="mx-auto w-full max-w-[90rem] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#A20202]/90">
            Incubated startups
          </p>
          <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-[#A20202] to-[#FF5757] bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
          Startups Incubated at Bioriidl
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            These startups reflect our commitment to transforming ideas into viable technology and knowledge-driven ventures.
          </p>
        </div>

        <div className="mb-12 flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl rounded-3xl border border-red-100 bg-white/80 p-5 shadow-lg backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              aria-label="Search startups"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search startups by name"
              className="w-full sm:flex-1 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />

            <select
              aria-label="Category filter"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full sm:w-48 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
            >
              <option value="All">All Categories</option>
              <option value="Food">Food</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Biotech">Biotech</option>
              <option value="Healthcare">Healthcare</option>
            </select>

            <select
              aria-label="Funding filter"
              value={funding}
              onChange={(e) => setFunding(e.target.value)}
              className="w-full sm:w-48 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
            >
              <option value="All">All Funding</option>
              <option value="Seed">Seed</option>
              <option value="Pre-Seed">Pre-Seed</option>
              <option value="Grant">Grant</option>
              <option value="Bootstrapped">Bootstrapped</option>
            </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {filtered.length === 0 ? (
            <p className="col-span-full text-center text-sm text-slate-500">
              No startups found.
            </p>
          ) : (
            filtered.map((startup) => (
              <Link
                key={startup.id}
                to={`/startups/${startup.id}`}
                className="block h-full"
              >
                <StartupCard
                  logo={startup.logo}
                  name={startup.name}
                  description={startup.description}
                  category={startup.category}
                />
              </Link>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

function StartupCard({ logo, name, description = "", category }) {
  return (
    <article className="group flex h-full min-h-0 flex-col rounded-2xl border-[3px] border-[#A20202] bg-white px-5 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(162,2,2,0.22)]">
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex min-w-0 flex-1 flex-wrap items-start gap-3">
            {logo ? (
              <div className="flex h-[3.75rem] w-[4.75rem] shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-red-50/40 px-1 py-0.5 shadow-sm">
                <img
                  src={logo}
                  alt={name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ) : (
              <div className="flex h-[3.75rem] w-[4.75rem] shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-red-50/40 px-1 py-0.5 text-sm font-semibold text-slate-500 shadow-sm">
                {name.charAt(0)}
              </div>
            )}
            <h3 className="min-w-0 flex-1 pt-0.5 text-lg font-bold leading-snug tracking-tight text-slate-900 sm:text-xl">
              {name}
            </h3>
          </div>
          {category && (
            <span className="w-fit shrink-0 whitespace-nowrap rounded-full bg-[#A20202]/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-[#8B0000]">
              {category}
            </span>
          )}
        </div>

        {description && (
          <p className="line-clamp-2 text-left text-sm leading-snug text-slate-500">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}

