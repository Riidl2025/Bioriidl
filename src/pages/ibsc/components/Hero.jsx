export default function Hero() {
  return (
    <section className="relative px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#a20202]/8 via-white to-[#a20202]/10" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">

          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-6">
              Institutional{" "}
              <span className="text-[#A20202]">
                Biosafety Committee
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              Regulatory oversight for research involving genetically
              engineered organisms, recombinant DNA and hazardous
              microorganisms.
            </p>
          </div>

          {/* SIDE CARD */}

          <div className="mt-8 h-[2px] bg-gradient-to-r from-[#650000] via-[#A20202] to-[#FF8A8A]" />
        </div>
      </div>
    </section>
  );
}
