import React from 'react';
import ClaimCard from './ClaimCard';

const PerksGrid = ({ loading, claims, onDeleteClick }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-100 bg-white p-16 text-center shadow-sm">
        <div className="relative flex h-12 w-12 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-red-100"></div>
          <div className="absolute inset-0 rounded-full border-4 border-[#A20202] border-t-transparent animate-spin"></div>
        </div>
        <span className="mt-4 text-sm font-semibold text-slate-600">Loading your perks vault...</span>
      </div>
    );
  }

  if (claims && claims.length > 0) {
    return (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {claims.map((c) => (
          <ClaimCard key={c._id} claim={c} onDeleteClick={onDeleteClick} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center rounded-[2.5rem] border-2 border-dashed border-slate-200 bg-white p-16 text-center shadow-sm">
      <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-red-100 bg-gradient-to-br from-red-50 to-white text-[#A20202] shadow-inner">
        <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      </div>
      <h4 className="text-lg font-bold text-slate-900">No active perks found</h4>
      <p className="mt-1 max-w-sm text-sm text-slate-500">Your claimed perks will appear here instantly once you redeem an offer from the catalog.</p>
    </div>
  );
};

export default PerksGrid;
