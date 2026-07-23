import React from 'react';

const DashboardBanner = () => {
  return (
    <div className="relative mb-12 overflow-hidden rounded-[2.5rem] border border-red-100 bg-gradient-to-br from-[#FFF0F0] via-white to-[#FFF5F5] p-8 sm:p-10 shadow-2xl shadow-red-950/5">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-red-200/40 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-rose-100/40 blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100/80 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#A20202]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A20202] animate-pulse"></span>
            Perks Hub
          </span>
          <h3 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Unlock Exclusive Perks</h3>
          <p className="max-w-xl text-sm font-medium text-slate-600">Supercharge your workflow with curated industry software discounts and premium startup credits.</p>
        </div>
        <button 
          onClick={() => window.location.href = '/startupdeals'} 
          className="group inline-flex cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-2xl bg-[#A20202] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-red-900/20 transition-all duration-300 hover:bg-[#850101] hover:shadow-red-900/30 hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Browse All Offers</span>
          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DashboardBanner;