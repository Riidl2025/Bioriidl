import React from 'react';

const PerksHeader = ({ count }) => {
  return (
    <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="flex items-center gap-3 text-2xl font-black tracking-tight text-slate-900">
          <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#A20202]/20">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A20202]"></span>
          </span>
          Your Active Startup Perks
        </h2>
        <p className="text-xs font-medium text-slate-500 mt-0.5">Manage and access all your successfully claimed deals.</p>
      </div>
      {count > 0 && (
        <div className="flex items-center gap-2 self-start rounded-2xl border border-red-100 bg-red-50/50 px-4 py-1.5 backdrop-blur-sm sm:self-auto">
          <span className="h-2 w-2 rounded-full bg-[#A20202]"></span>
          <span className="text-xs font-bold text-[#A20202]">{count} Active {count === 1 ? 'Perk' : 'Perks'}</span>
        </div>
      )}
    </div>
  );
};

export default PerksHeader;