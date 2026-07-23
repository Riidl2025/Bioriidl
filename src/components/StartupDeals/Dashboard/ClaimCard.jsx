import React from 'react';

const ClaimCard = ({ claim, onDeleteClick }) => {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-950/5">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#A20202]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>

      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-xl border border-red-100 bg-red-50/60 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#A20202]">
            {claim.startupName}
          </span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-lg">
              <svg className="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(claim.timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
            <button
              onClick={() => onDeleteClick(claim._id)}
              className="p-1.5 text-slate-400 hover:text-[#A20202] hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
              title="Delete perk claim"
              aria-label="Delete perk claim"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>

        <h4 className="mt-4 text-lg font-bold tracking-tight text-slate-900 group-hover:text-[#A20202] transition-colors line-clamp-1">
          {claim.dealName}
        </h4>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#A20202] bg-red-50/80 border border-red-100 px-3 py-1 rounded-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-[#A20202] animate-pulse"></span>
          Claimed & Verified
        </div>
        {claim.redirectUrl ? (
          <a 
            href={claim.redirectUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 rounded-xl bg-[#A20202] px-4 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:bg-[#850101] hover:shadow-md hover:shadow-red-950/20"
          >
            <span>Launch Deal</span>
            <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ClaimCard;