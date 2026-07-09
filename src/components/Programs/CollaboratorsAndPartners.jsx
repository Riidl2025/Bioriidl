import svuLogo from "../../assets/images/svuLogo.svg";
import somaiyaTrustLogo from "../../assets/images/somaiyaTrust.png";
import dstLogo from "../../assets/images/dst-logo.jpg";
import biracLogo from "../../assets/images/biraclogo.png";
import dbtLogo from "../../assets/images/dbt-logo.png";
import fablabLogo from "../../assets/images/fablab.png";

import partnerArchive from "../../assets/images/partner-archive.png";
import partnerCebs from "../../assets/images/partner-cebs.png";
import partnerYwater from "../../assets/images/partner-ywater.jpg";
import partnerChile from "../../assets/images/partner-chile.jpg";

const COLLABORATORS = [
  { name: "SVU", logo: svuLogo, href: "https://somaiya.edu.in/" },
  {
    name: "Somaiya Trust",
    logo: somaiyaTrustLogo,
    href: "https://somaiya.edu.in/",
  },
  { name: "Dept. of Sci & Tech", logo: dstLogo, href: "https://dst.gov.in/" },
  { name: "BIRAC", logo: biracLogo, href: "https://birac.nic.in/" },
  { name: "Dept. of Biotech", logo: dbtLogo, href: "https://dbtindia.gov.in/" },
  { name: "FAB LAB", logo: fablabLogo, href: "https://www.fablab.io/" },
];

const PARTNERS = [
  {
    name: "Archive MU",
    logo: partnerArchive,
    href: "https://archive.mu.ac.in/",
  },
  { name: "CEBS", logo: partnerCebs, href: "https://www.cbs.ac.in/" },
  { name: "Ywater", logo: partnerYwater, href: "https://www.ywater.org/" },
  {
    name: "Start-Up Chile",
    logo: partnerChile,
    href: "https://www.startupchile.org/",
  },
];

function CurvedDivider() {
  return (
    <div className="w-full overflow-hidden -mt-6">
      <svg viewBox="0 0 1440 64" className="w-full h-8 md:h-12">
        <path
          fill="#f8fafb"
          d="M0,32 C360,80 1080,-16 1440,32 L1440 64 L0 64 Z"
        />
      </svg>
    </div>
  );
}

function LogoCard({ href, name, logo, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className={[
        "group relative overflow-hidden rounded-2xl bg-white",
        "border border-slate-200 shadow-sm",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-lg hover:border-slate-300",
        "focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50 opacity-90 pointer-events-none" />

      <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-4">
        <img
          src={logo}
          alt={name}
          className={[
            "w-full h-full object-contain",
            "opacity-100",
            "transition-transform duration-300 ease-out",
            "group-hover:scale-[1.04]",
          ].join(" ")}
        />
      </div>
    </a>
  );
}

export default function CollaboratorsAndPartners() {
  return (
    <div className="w-full">
      <section className="w-full px-6 py-14 bg-white">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8">
            Our collaborators
          </h2>

          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {COLLABORATORS.map((c) => (
              <LogoCard
                key={c.name}
                href={c.href}
                name={c.name}
                logo={c.logo}
                className="aspect-[4/3]"
              />
            ))}
          </div>
        </div>
      </section>

      <CurvedDivider />

      <section className="w-full px-6 py-14 bg-slate-50">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8">
            Our partners
          </h2>

          <div className="grid gap-5 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
            {PARTNERS.map((p) => (
              <LogoCard
                key={p.name}
                href={p.href}
                name={p.name}
                logo={p.logo}
                className="aspect-[4/3]"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
