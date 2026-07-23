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
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-center sm:gap-3 sm:text-left">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-[#fff7f7] sm:h-14 sm:w-14">
            <img
              src={deal.image}
              alt={`${deal.startupName} logo`}
              className="h-full w-full object-cover"
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
          <h3 className="mb-1.5 text-base font-bold text-[#14202e]">
            How to Claim
          </h3>

          <ol className="space-y-0.5">
            {deal.claimSteps.map((step, index) => (
              <li
                key={`${deal.id}-step-${index}`}
                className="flex items-center gap-2 rounded-lg border border-slate-100 bg-[#f6f7f9] px-2 py-1 sm:px-2.5 sm:py-1"
              >
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#A20202] text-[11px] font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-left text-[13px] leading-snug text-[#14202e] sm:text-[14px]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-2 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
          <button
            type="button"
            disabled={isClaiming}
            onClick={handleClaimClick}
            className="inline-flex items-center justify-center rounded-[10px] bg-[#A20202] px-6 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-[#8B0202] hover:shadow-[0_6px_16px_rgba(162,2,2,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A20202]/40 focus-visible:ring-offset-2 disabled:opacity-50"
          >
            {isClaiming ? 'Processing...' : deal.buttonText || 'Claim Now'}
          </button>
        </div>
      </div>
    </div>
  );
}