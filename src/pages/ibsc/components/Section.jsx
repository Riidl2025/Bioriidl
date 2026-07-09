export default function Section({ title, children }) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">

      <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[#A20202]/10 blur-3xl" />

      <div className="relative">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          {title}
        </h2>

        <div className="space-y-4 text-slate-600 leading-relaxed">
          {children}
        </div>

        <div className="mt-8 h-[2px] bg-gradient-to-r from-[#650000] via-[#A20202] to-[#FF8A8A]" />
      </div>
    </section>
  );
}