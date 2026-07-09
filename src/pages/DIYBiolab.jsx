{/*import { Footer } from "./Footer";
export default function DIYBiolab() {
  return (
    <div className="w-full">
      <section className="w-full px-6 py-16 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto animate-fade-slide-up">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            DIY Biolab
          </h1>

          <p className="mt-4 max-w-3xl text-slate-600">
            An open community biology lab for students, inventors,
            entrepreneurs, and anyone who wants to experiment, share, learn, and
            build.
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto space-y-4 animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900">
            About DIY Biolab
          </h2>

          <p className="text-slate-600 leading-relaxed">
            DIY Biolab at Bioriidl is a shared, open-access biological workspace
            designed to lower the entry barrier to hands-on experimentation. It
            enables individuals and teams to explore biology through real-world
            tools, community learning, and responsible innovation.
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-12">
          <Lab
            title="Molecular Biology Lab"
            items={[
              "Real Time PCR",
              "Biological Safety Cabinet Class II A2 with Thimble Ducting",
              "Microcentrifuge (Refrigerated)",
              "Water Bath",
              "Deep Freezer (-25°C)",
              "Refrigerator (2–8°C)",
              "Vortex Machine",
              "MiniFuge Centrifuge",
              "Electrophoresis Unit (Vertical and Horizontal)",
            ]}
          />

          <Lab
            title="Cell Culture Lab"
            items={[
              "Biological Safety Cabinet Class II A2 with Thimble Ducting",
              "CO₂ Incubator",
              "Flow Cytometer",
              "Liquid Nitrogen Container (Storage for ~3000 samples)",
              "Inverted Fluorescence Microscope",
              "Multifuge Centrifuge (Swing bucket and fixed angle rotors)",
            ]}
          />

          <Lab
            title="Fermentation Lab"
            items={[
              "Fermentor (Anaerobic) – 5 Litres",
              "Peristaltic Pump",
              "Autoclave – 100 Litres",
            ]}
          />

          <Lab
            title="Analytical Lab"
            items={["HPLC", "GC–MS", "UV Spectrophotometer"]}
          />

          <Lab
            title="Common Instrument Lab"
            items={[
              "Hot Air Oven",
              "Magnetic Stirrer",
              "Water Purification System",
              "Ice Flaking Machine",
              "Ultra Low Temperature Freezer (-86°C)",
              "Non-refrigerated Centrifuge",
              "Weighing Balance",
              "Incubator",
              "Shaker",
            ]}
          />
        </div>
      </section>
    </div>
  );
}

function Lab({ title, items }) {
  return (
    <div
      className="
        group relative rounded-2xl bg-white border border-slate-200
        shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
        animate-fade-slide-up
      "
    >
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-emerald-500 to-emerald-300" />

      <div className="px-6 py-4 border-b border-slate-200">
        <h3 className="text-xl font-semibold text-slate-900 relative inline-block">
          {title}
          <span
            className="
              absolute left-0 -bottom-1 h-0.5 w-full
              bg-emerald-500 scale-x-0 origin-left
              transition-transform duration-300
              group-hover:scale-x-100
            "
          />
        </h3>
      </div>

      <ul className="divide-y divide-slate-100">
        {items.map((item) => (
          <li
            key={item}
            className="
              px-6 py-4 text-slate-700 text-sm
              flex items-start gap-3
              transition-colors duration-200
              hover:bg-emerald-50/60
            "
          >
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
*/}

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DIYBiolab() {
  const [openLab, setOpenLab] = useState(null);

  const labs = [
    {
      title: "Molecular Biology Lab",
      items: [
        "Real Time PCR",
        "Biological Safety Cabinet Class II A2",
        "Microcentrifuge (Refrigerated)",
        "Water Bath",
        "Deep Freezer (-25°C)",
        "Refrigerator (2–8°C)",
        "Vortex Machine",
        "MiniFuge Centrifuge",
        "Electrophoresis Unit",
      ],
    },
    {
      title: "Cell Culture Lab",
      items: [
        "CO₂ Incubator",
        "Flow Cytometer",
        "Liquid Nitrogen Container",
        "Inverted Fluorescence Microscope",
        "Multifuge Centrifuge",
        "Biological Safety Cabinet",
      ],
    },
    {
      title: "Fermentation Lab",
      items: [
        "Fermentor (Anaerobic)",
        "Peristaltic Pump",
        "Autoclave – 100 Litres",
      ],
    },
    {
      title: "Analytical Lab",
      items: [
        "HPLC",
        "GC–MS",
        "UV Spectrophotometer",
      ],
    },
    {
      title: "Common Instrument Lab",
      items: [
        "Hot Air Oven",
        "Magnetic Stirrer",
        "Water Purification System",
        "Ice Flaking Machine",
        "Ultra Low Temperature Freezer",
        "Non-refrigerated Centrifuge",
        "Weighing Balance",
        "Incubator",
        "Shaker",
      ],
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-white">
      
      {/* HERO SECTION */}
      <section className="relative px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#a20202]/8 via-white to-[#a20202]/10" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
            
            <div>
              <div className="mb-8">
                <p className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#650000] via-[#A20202] to-[#FF8A8A] bg-clip-text text-transparent leading-tight">
                  DIY Biolab
                </p>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-6">
                Open access space for{" "}
                <span className="text-[#a20202]">
                  biological innovation
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                A collaborative biology workspace for students,
                researchers, innovators and entrepreneurs to
                experiment, learn and build impactful solutions.
              </p>

              <button className="rounded-full bg-[#a20202] text-white px-6 py-3 text-sm font-medium shadow-lg shadow-[#a20202]/20 transition-all hover:scale-[1.03]">
                Explore Facilities
              </button>
            </div>

            {/* RIGHT CARD */}
            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-7 shadow-xl shadow-slate-200/20">
              
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[#A20202]/10 blur-3xl" />

              <div className="relative">
                <p className="text-xs uppercase tracking-[0.25em] text-[#A20202] font-semibold mb-2">
                  About the lab
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mb-5">
                  Community driven experimentation
                </h2>

                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  DIY Biolab lowers the barrier to hands-on biology by
                  providing shared access to scientific infrastructure,
                  collaborative learning and responsible innovation.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    "Open access",
                    "Hands-on learning",
                    "Advanced instruments",
                    "Collaborative ecosystem",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-black/10 bg-white px-4 py-4 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-[#A20202]">
                          0{index + 1}
                        </span>

                        <p className="text-sm font-medium text-slate-800">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 h-[2px] bg-gradient-to-r from-[#650000] via-[#A20202] to-[#FF8A8A]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LABORATORY FACILITIES */}
      <section className="px-6 py-16 bg-[#fafafa]">
  <div className="max-w-6xl mx-auto">
    
    <div className="mb-10">
      <p className="text-sm uppercase tracking-[0.25em] text-[#A20202] font-semibold mb-3">
        Infrastructure
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
        Laboratory facilities
      </h2>

      <p className="text-slate-600 max-w-2xl leading-relaxed">
        Advanced scientific infrastructure designed for experimentation,
        research and startup innovation.
      </p>
    </div>

    <div className="space-y-4">
      {labs.map((lab, index) => {
        const isOpen = openLab === index;

        return (
          <div
            key={lab.title}
            onClick={() =>
              setOpenLab(isOpen ? null : index)
            }
            className={`group cursor-pointer overflow-hidden rounded-[1.8rem] border bg-white transition-all duration-500 ${
              isOpen
                ? "border-[#A20202]/20 shadow-xl shadow-[#A20202]/10"
                : "border-black/10 shadow-sm hover:-translate-y-1 hover:border-[#A20202]/20 hover:shadow-lg"
            }`}
          >
            
            {/* GLOW */}
            <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-[#A20202]/10 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

            {/* HEADER */}
            <div className="relative px-6 py-5">
              <div className="flex items-center justify-between gap-5">
                
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#A20202] font-semibold mb-2">
                    Facility 0{index + 1}
                  </p>

                  <h3
                    className={`text-2xl font-bold leading-tight transition-all duration-300 ${
                      isOpen
                        ? "text-[#A20202]"
                        : "text-slate-900"
                    }`}
                  >
                    {lab.title}
                  </h3>
                </div>

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full border text-xl font-light transition-all duration-500 ${
                    isOpen
                      ? "rotate-45 border-[#A20202] bg-[#A20202] text-white"
                      : "border-black/10 text-slate-700"
                  }`}
                >
                  +
                </div>
              </div>
            </div>

            {/* EXPANDABLE CONTENT */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6">
                  
                  <div className="mb-5 h-px w-full bg-black/5" />

                  <div className="flex flex-wrap gap-3">
                    {lab.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-black/10 bg-[#fcfcfc] px-4 py-2 text-sm text-slate-700 transition-all duration-300 hover:border-[#A20202]/20 hover:bg-[#fff7f7] hover:scale-[1.03]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ACTIVE LINE */}
            <div
              className={`h-[2px] transition-all duration-500 ${
                isOpen
                  ? "w-full bg-gradient-to-r from-[#650000] via-[#A20202] to-[#FF8A8A]"
                  : "w-0 bg-gradient-to-r from-[#650000] via-[#A20202] to-[#FF8A8A]"
              }`}
            />
          </div>
        );
      })}
    </div>
  </div>
</section>
    </div>
  );
}