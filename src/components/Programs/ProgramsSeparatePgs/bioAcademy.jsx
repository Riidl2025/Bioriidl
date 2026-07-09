import { Link } from "react-router-dom";

const RED = "#A20202";
const RED_DEEP = "#6E0000";
const RED_BRIGHT = "#D81111";

export default function BioAcademy() {
  return (
    <div className="w-full">
      {/* Liquid Glass keyframes injected once */}
      <style>{`
        @keyframes liquid-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .liquid-glass-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 32px;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: rgba(255,255,255,0.72);
          cursor: not-allowed;
          overflow: hidden;
          /* Frosted glass base */
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(18px) saturate(160%);
          -webkit-backdrop-filter: blur(18px) saturate(160%);
          border: 1.5px solid rgba(255,255,255,0.35);
          box-shadow:
            0 4px 24px rgba(0,0,0,0.18),
            0 1.5px 0 rgba(255,255,255,0.22) inset,
            0 -1.5px 0 rgba(0,0,0,0.12) inset;
          transition: box-shadow 0.3s ease, background 0.3s ease;
        }
        /* animated shimmer layer */
        .liquid-glass-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            105deg,
            rgba(255,255,255,0)   0%,
            rgba(255,255,255,0.28) 40%,
            rgba(255,255,255,0.08) 55%,
            rgba(255,255,255,0)   100%
          );
          background-size: 250% 100%;
          animation: liquid-shimmer 3.2s linear infinite;
          pointer-events: none;
        }
        /* top-edge highlight */
        .liquid-glass-btn::after {
          content: "";
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          border-radius: 9999px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.65), transparent);
          pointer-events: none;
        }
      `}</style>

      {/* HERO */}
      <section
        className="relative w-full px-6 pt-14 pb-28 overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 18% 10%, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0) 40%),
            radial-gradient(circle at 88% 95%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 55%),
            linear-gradient(135deg, ${RED_DEEP} 0%, ${RED} 40%, ${RED_BRIGHT} 65%, ${RED_DEEP} 100%)
          `,
          boxShadow:
            "inset 0 70px 140px -60px rgba(255,255,255,0.28), inset 0 -90px 160px -50px rgba(0,0,0,0.55)",
        }}
      >
        {/* glass blobs */}
        <div className="pointer-events-none absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-6rem] left-[-4rem] w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        {/* diagonal sheen */}
        <div className="pointer-events-none absolute -top-10 left-[-10%] w-[140%] h-32 rotate-[-6deg] bg-gradient-to-r from-white/0 via-white/20 to-white/0 blur-2xl" />
        {/* grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        <div className="relative max-w-5xl mx-auto animate-fade-slide-up">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/75 hover:text-white mb-10 transition-colors duration-200"
          >
            ← Back to Programs
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-12 bg-white/40" />
            <span className="text-xs tracking-[0.25em] uppercase text-white/70 font-semibold">
              bioriidl &middot; Bio Academy
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
            Bio Academy
          </h1>

          <p className="mt-6 text-white/90 text-xl max-w-xl leading-relaxed">
            September 2018 – February 2019
          </p>
          <p className="mt-2 text-sm tracking-wide text-white/65">
            Riidl, Bhaskaracharya Building, Somaiya Vidyavihar, Mumbai
          </p>

          {/* ── LIQUID GLASS BUTTON ── */}
          <button disabled className="liquid-glass-btn mt-10">
            Registration Closed
          </button>
        </div>
      </section>

      {/* What is Bio Academy? */}
      <section className="w-full px-6 pt-8 pb-5 bg-white">
        <div className="max-w-5xl mx-auto space-y-4 animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900">
            What is Bio Academy?
          </h2>
          <p className="text-slate-600">
            Bio Academy is an interdisciplinary learning program designed to
            cover a wide range of interests — from entry-level exposure for
            researchers, investors, and job seekers to entrepreneurial guidance
            for potential founders.
          </p>
          <p className="text-slate-600">
            The program introduces participants to the technical and conceptual
            foundations of synthetic biology, while also addressing its
            real-world applications, industry relevance, and future
            implications.
          </p>
        </div>
      </section>

      {/* Duration */}
      <section className="w-full px-6 pt-5 pb-8 bg-slate-50">
        <div className="max-w-5xl mx-auto animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">
            Duration
          </h2>
          <p className="text-3xl font-bold" style={{ color: RED }}>
            6 months
          </p>
        </div>
      </section>

      {/* Why Bio Academy? */}
      <section className="w-full px-6 py-10 bg-white">
        <div className="max-w-5xl mx-auto space-y-5 animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900">
            Why Bio Academy?
          </h2>
          <p className="text-slate-600">
            While many bio-related courses focus only on outcomes, Bio Academy
            emphasises the journey behind technological innovation. Participants
            learn not just what technologies exist, but how they evolved, the
            challenges faced by researchers, and the effort required to make
            these technologies accessible.
          </p>
          <p className="text-slate-600">
            What differentiates Bio Academy is that lectures are delivered by
            researchers who directly contributed to developing these
            technologies. This gives participants rare insight into real-world
            research, failures, breakthroughs, and practical constraints.
          </p>
        </div>
      </section>

      {/* Fees Structure */}
      <section className="w-full px-6 py-10 bg-slate-50">
        <div className="max-w-5xl mx-auto animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Fees Structure
          </h2>
          <div
            className="rounded-xl bg-white border p-6 space-y-3 shadow-sm transition-all duration-200 hover:shadow-md"
            style={{ borderColor: RED, borderWidth: "2px" }}
          >
            <p className="text-slate-600">
              <strong className="text-slate-800">Without scholarship:</strong>{" "}
              USD 5,000
            </p>
            <p className="text-slate-600">
              <strong className="text-slate-800">External students:</strong>{" "}
              Scholarships may be provided based on need and Statement of
              Purpose (SOP).
            </p>
            <p className="text-slate-600">
              <strong className="text-slate-800">Somaiya students:</strong> 30%
              fee concession.
            </p>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="w-full px-6 py-10 bg-white">
        <div className="max-w-5xl mx-auto animate-fade-slide-up">
          <p
            className="text-xs tracking-[0.18em] uppercase font-semibold mb-1"
            style={{ color: RED }}
          >
            Riidl &middot; Bio Academy
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">
            Course Structure
          </h2>
          <div
            className="mt-2.5 mb-8 w-9 h-0.5 rounded-full"
            style={{ background: RED }}
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: "Principles and Practices + Hardware",
                sub: "Neil, Megan, David",
                icon: "🔧",
              },
              { label: "Bio Design", sub: "George", icon: "🎨" },
              { label: "Next Generation Synthesis", sub: "Joe J", icon: "🧬" },
              { label: "Bio Production", sub: "Patrick, Ginkgo", icon: "🏭" },
              { label: "Biomolecule Sensors", sub: "Vatsan", icon: "📡" },
              { label: "Cell-free Production", sub: "Kate", icon: "⚗️" },
              { label: "Gut Microbiome", sub: "David", icon: "🦠" },
              { label: "Bio Fab", sub: "Fio", icon: "🛠️" },
              { label: "Imaging", sub: "Nanostructures", icon: "🔬" },
              {
                label: "Synthetic Development Biology",
                sub: "Nina",
                icon: "🧫",
              },
              { label: "Gene Drives", sub: "Kevin Esvelt", icon: "🧪" },
            ].map(({ label, sub, icon }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 transition-all duration-200 hover:shadow-sm"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = RED;
                  e.currentTarget.style.background = "rgba(162,2,2,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.background = "white";
                }}
              >
                <div
                  className="flex items-center justify-center rounded-lg text-base flex-shrink-0"
                  style={{
                    width: 36,
                    height: 36,
                    background: "rgba(162,2,2,0.09)",
                  }}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800 leading-snug">
                    {label}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /*
import { Link } from "react-router-dom";

export default function BioAcademy() {
  return (
    <div className="w-full">
      <section className="w-full px-6 py-16 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto animate-fade-slide-up">
          <Link
            to="/programs"
            className="inline-flex items-center text-sm font-medium text-emerald-700 hover:underline mb-4"
          >
            ← Back to Programs
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Bio Academy
          </h1>

          <p className="mt-3 text-slate-600 text-lg">
            September 2018 – February 2019
          </p>

          <p className="mt-2 text-slate-500 text-sm">
            Riidl, Bhaskaracharya Building, Somaiya Vidyavihar, Mumbai
          </p>

          <button
            disabled
            className="inline-flex mt-6 rounded-full px-6 py-3 text-sm font-semibold bg-slate-200 text-slate-500 border border-slate-300 cursor-not-allowed"
          >
            Registration Closed
          </button>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto space-y-6 animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900">
            What is Bio Academy?
          </h2>

          <p className="text-slate-600">
            Bio Academy is an interdisciplinary learning program designed to
            cover a wide range of interests — from entry-level exposure for
            researchers, investors, and job seekers to entrepreneurial guidance
            for potential founders.
          </p>

          <p className="text-slate-600">
            The program introduces participants to the technical and conceptual
            foundations of synthetic biology, while also addressing its real-
            world applications, industry relevance, and future implications.
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">
            Duration
          </h2>
          <p className="text-3xl font-bold text-emerald-700">6 months</p>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto space-y-6 animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900">
            Why Bio Academy?
          </h2>

          <p className="text-slate-600">
            While many bio-related courses focus only on outcomes, Bio Academy
            emphasizes the journey behind technological innovation. Participants
            learn not just what technologies exist, but how they evolved, the
            challenges faced by researchers, and the effort required to make
            these technologies accessible.
          </p>

          <p className="text-slate-600">
            What differentiates Bio Academy is that lectures are delivered by
            researchers who directly contributed to developing these
            technologies. This gives participants rare insight into real-world
            research, failures, breakthroughs, and practical constraints.
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Fees Structure
          </h2>

          <div className="rounded-xl bg-white border border-emerald-100 p-6 space-y-3 shadow-sm">
            <p className="text-slate-600">
              <strong className="text-slate-800">Without scholarship:</strong>{" "}
              USD 5,000
            </p>

            <p className="text-slate-600">
              <strong className="text-slate-800">External students:</strong>{" "}
              Scholarships may be provided based on need and Statement of
              Purpose (SOP).
            </p>

            <p className="text-slate-600">
              <strong className="text-slate-800">Somaiya students:</strong> 30%
              fee concession.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Course Structure
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Principles and Practices + Hardware (Neil, Megan, David)",
              "Bio Design (George)",
              "Next Generation Synthesis (Joe J)",
              "Bio Production (Patrick, Ginkgo)",
              "Biomolecule Sensors (Vatsan)",
              "Cell-free Production (Kate)",
              "Gut Microbiome (David)",
              "Bio Fab (Fio)",
              "Imaging (Nanostructures)",
              "Synthetic Development Biology (Nina)",
              "Gene Drives (Kevin Esvelt)",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:border-emerald-600 hover:bg-emerald-50"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>     
    </div>
  );
}
  */
}
