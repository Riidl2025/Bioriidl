import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import startupsData from '../Data/startupsData';

const API_BASE_URL = import.meta.env.VITE_API_URL ?? '/api';

export default function DealDetails({ deal }) {
  const [isClaiming, setIsClaiming] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClaimClick = async () => {
    // Check if user is logged in / signed in
    if (!user) {
      navigate('/startupdeals/auth', { replace: true });
      return;
    }

    // Find the corresponding startup from startupsData using startupId
    const startup = startupsData.find((s) => s.id === deal?.startupId);

    // Determine redirect URL: prefer explicit deal.redirectUrl, then startup.redirectUrl, then extract from claimSteps
    const extractUrlFromSteps = () => {
      const allText = (deal?.claimSteps || []).join(' ');
      const m = allText.match(/https?:\/\/[^\s)]+/);
      return m ? m[0] : null;
    };

    const redirectUrl = deal?.redirectUrl || startup?.redirectUrl || extractUrlFromSteps();

    setIsClaiming(true);
    try {
      // Record claim in backend
      const resp = await fetch(`${API_BASE_URL}/deals/claim`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          startupName: startup?.name || deal?.startupName,
          dealName: deal?.title,
          redirectUrl,
        }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        console.error('Failed to log claim', err);
        alert(err.message || 'Failed to record claim. Please try again.');
        setIsClaiming(false);
        return;
      }

      // Redirect user to the deal URL if available
      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        alert('No redirect URL found for this deal.');
        setIsClaiming(false);
      }
    } catch (error) {
      console.error('Error recording claim:', error);
      alert('An error occurred while logging the claim. Please try again.');
      setIsClaiming(false);
    }
  };

  return (
    <div className="mx-auto -mt-1 w-full max-w-4xl sm:-mt-2">
      <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 shadow-sm sm:px-4 sm:py-3.5">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left">
          <div className="flex h-28 w-28 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_2px_8px_rgba(20,32,46,0.06)] sm:h-32 sm:w-32 sm:p-5">
            <img
              src={deal.image}
              alt={`${deal.startupName} logo`}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="mb-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A20202] sm:text-xs">
              {deal.startupName}
            </p>

            <h2 className="mb-0.5 font-['Fraunces',Georgia,serif] text-lg font-bold leading-snug text-[#14202e] sm:text-xl">
              {deal.title}
            </h2>

            <p className="mx-auto max-w-2xl text-[14px] leading-[1.5] text-[#5b6b7c] sm:mx-0 sm:max-w-none sm:text-[15px]">
              {deal.fullDescription}
            </p>
          </div>
        </div>

        <div className="mt-2">
          <h3 className="mb-3 text-base font-bold text-[#14202e]">
            How to Claim
          </h3>

          <ol className="space-y-0">
            {deal.claimSteps.map((step, index) => (
              <li
                key={`${deal.id}-step-${index}`}
                className="grid grid-cols-[2rem_1fr] gap-x-4 pb-6 last:pb-0"
              >
                <div className="flex h-full flex-col items-center">
                  <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#A20202] text-xs font-bold text-white shadow-sm">
                    {index + 1}
                  </span>
                  {index < deal.claimSteps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="mt-0 w-px flex-1 bg-slate-200"
                    />
                  )}
                </div>

                <div className="min-w-0">
                  <div className="flex min-h-[4.25rem] items-center rounded-xl border border-slate-200/80 bg-slate-50/90 px-4 py-3.5 shadow-sm transition-shadow duration-200 hover:shadow-md">
                    <p className="w-full text-left text-[13px] leading-relaxed text-[#14202e] sm:text-[14px]">
                      {step.replace(/^Step \d+ —\s*/, "")}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:justify-end sm:gap-3">
          <a
            href={deal.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-[#14202e] transition duration-200 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/60 focus-visible:ring-offset-2 sm:w-auto"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4 text-[#5b6b7c]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            View Guide
          </a>

          <button
            type="button"
            disabled={isClaiming}
            onClick={handleClaimClick}
            className="inline-flex w-full items-center justify-center rounded-[10px] bg-[#A20202] px-6 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-[#8B0202] hover:shadow-[0_6px_16px_rgba(162,2,2,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A20202]/40 focus-visible:ring-offset-2 disabled:opacity-50 sm:w-auto"
          >
            {isClaiming ? 'Processing...' : deal.buttonText || 'Claim Now'}
          </button>
        </div>
      </div>
    </div>
  );
}