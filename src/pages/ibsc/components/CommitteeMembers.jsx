import { MEMBERS } from "../data/members";

export default function CommitteeMembers() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">

      <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[#A20202]/10 blur-3xl" />

      <div className="relative">
        <p className="text-sm uppercase tracking-[0.25em] text-[#A20202] font-semibold mb-3">
          Committee
        </p>

        <h2 className="text-4xl font-bold text-slate-900 mb-10">
          Committee members
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {MEMBERS.map((m, index) => (
            <MemberCard key={m.name} member={m} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ member, index }) {
  return (
    <div className="group rounded-[1.6rem] border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#A20202]/20 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#A20202] font-semibold mb-2">
            Member 0{index + 1}
          </p>

          <h3 className="text-xl font-bold text-slate-900">
            {member.name}
          </h3>

          <p className="mt-2 text-sm font-medium text-[#A20202]">
            {member.role}
          </p>

          <p className="mt-2 text-sm text-slate-600">
            {member.domain}
          </p>

          <p className="mt-1 text-xs text-slate-500 leading-relaxed">
            {member.affiliation}
          </p>
        </div>
      </div>

      {member.link && (
        <a
          href={member.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-5 rounded-full border border-black/10 px-4 py-2 text-xs font-medium text-slate-700 transition hover:border-[#A20202]/20 hover:text-[#A20202]"
        >
          View profile
        </a>
      )}

      <div className="mt-5 h-[2px] w-0 bg-gradient-to-r from-[#650000] via-[#A20202] to-[#FF8A8A] transition-all duration-500 group-hover:w-full" />
    </div>
  );
}