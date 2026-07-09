import { useEffect } from "react";
import { SUP, linkify } from "../data/helpers";
import BulletsContent from "./BulletsContent";
import Section from "./Section";

const tagStyles = {
  grant: "bg-[#FDF2F2] text-[#A20202]",
  equity: "bg-[#FDF2F2] text-[#A20202]",
  loan: "bg-[#FDF2F2] text-[#A20202]",
  incub: "bg-[#FDF2F2] text-[#A20202]",
  market: "bg-[#FDF2F2] text-[#A20202]",
  mixed: "bg-[#FAFAFA] text-[#6B7280]",
};

export default function SchemeModal({ scheme, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!scheme) return null;

  const k = SUP[scheme.support_type]?.k || "mixed";
  const links = scheme.links || [];

  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-[rgba(31,41,55,0.55)] backdrop-blur-[3px]"
        onClick={onClose}
      />
      <div
        className="fixed inset-0 z-[101] flex items-start justify-center overflow-y-auto p-4 pt-6 sm:px-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mTitle"
      >
        <div className="my-auto w-full max-w-[780px] overflow-hidden rounded-[18px] bg-white shadow-[0_8px_40px_rgba(162,2,2,0.15)]">
          <div className="relative bg-[linear-gradient(150deg,#A20202,#8C0101)] px-5 py-6 text-white sm:px-[30px] sm:pb-6 sm:pt-[26px]">
            <button
              type="button"
              className="absolute right-[18px] top-[18px] flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-[9px] border-none bg-white/15 text-[19px] text-white transition-[0.15s] hover:bg-white/25"
              aria-label="Close"
              onClick={onClose}
            >
              ✕
            </button>
            <div className="mb-[13px] flex flex-wrap gap-2">
              <span
                className={`whitespace-nowrap rounded-[7px] px-[9px] py-1 text-[10.5px] font-bold uppercase tracking-[0.05em] ${tagStyles[k] || tagStyles.mixed}`}
              >
                {scheme.support_type}
              </span>
              <span className="rounded-[7px] bg-white/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-white">
                {scheme.group}
              </span>
              {scheme.abbr && (
                <span className="rounded-[7px] bg-white/20 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-[#FDF2F2]">
                  {scheme.abbr}
                </span>
              )}
            </div>
            <h2
              id="mTitle"
              className="mb-[9px] pr-[30px] font-['Fraunces',serif] text-2xl font-semibold leading-[1.18]"
            >
              {scheme.name}
            </h2>
            <div className="flex items-center gap-2 text-[13px] text-[#FDF2F2]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" />
              </svg>
              {scheme.ministry}
            </div>
          </div>
          <div className="px-5 pb-[26px] pt-2 sm:px-[30px]">
            <Section icon="📌" title="What is this?">
              <BulletsContent text={scheme.what_is} />
            </Section>
            <Section icon="🎯" title="Objectives">
              <BulletsContent text={scheme.objectives} />
            </Section>
            <Section icon="✅" title="Who can apply?">
              <BulletsContent text={scheme.who_can_apply} />
            </Section>
            <Section icon="💰" title="What do you get?">
              <BulletsContent text={scheme.what_you_get} />
            </Section>
            <Section icon="📈" title="Best suited for">
              {scheme.stage ? (
                <p className="text-[14.5px] leading-[1.62] text-[#1F2937]">{scheme.stage}</p>
              ) : null}
            </Section>
            <Section icon="🏷️" title="Sectors">
              {scheme.sectors?.length ? (
                <div className="mt-[3px] flex flex-wrap gap-[5px]">
                  {scheme.sectors.map((x) => (
                    <span
                      key={x}
                      className="rounded-md bg-[#FDF2F2] px-2 py-[3px] text-[10px] font-semibold text-[#6B7280]"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              ) : null}
            </Section>
            <Section icon="🚀" title="How to apply">
              <BulletsContent text={scheme.how_to_apply} />
            </Section>
            {links.length > 0 && (
              <Section icon="🔗" title="Official links">
                <div className="flex flex-col gap-[9px]">
                  {links.map((u) => (
                    <a
                      key={u}
                      className="flex items-center gap-2.5 break-all rounded-[10px] border border-[#E5E7EB] bg-[#FAFAFA] px-3.5 py-[11px] text-[13px] text-[#1F2937] no-underline transition-[0.15s] hover:border-[#A20202] hover:bg-white"
                      href={u}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="shrink-0 text-[#A20202]"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
                        <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
                      </svg>
                      {linkify(u)}
                    </a>
                  ))}
                </div>
              </Section>
            )}
            {scheme.website && (
              <div className="mt-1.5 flex flex-wrap gap-2.5">
                <a
                  className="inline-flex items-center gap-[9px] rounded-[11px] bg-[#A20202] px-[22px] py-[13px] text-sm font-bold text-white no-underline transition-[0.15s] hover:bg-[#8C0101]"
                  href={scheme.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit official portal →
                </a>
              </div>
            )}
            <div className="mt-4 text-right font-['JetBrains_Mono',monospace] text-[11.5px] text-[#6B7280]">
              Playbook one-pager · page {scheme.page}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
