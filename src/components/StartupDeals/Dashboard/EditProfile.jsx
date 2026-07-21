import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditProfile({ user, setView, onProfileUpdated }) {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Forgot Password / OTP modal states
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpStep, setOtpStep] = useState('request'); // 'request', 'verify', 'reset'
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const [fpNewPassword, setFpNewPassword] = useState('');

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Password criteria helper
  const getPasswordCriteria = (pwd) => ({
    length: pwd.length >= 8,
    uppercase: /[A-Z]/.test(pwd),
    lowercase: /[a-z]/.test(pwd),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
  });

  const criteria = getPasswordCriteria(newPassword);
  const fpCriteria = getPasswordCriteria(fpNewPassword);

  // OTP box navigation
  const handleOtpChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);
      if (value && index < 5) inputRefs.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Profile Save Handler
  const handleSave = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (newPassword) {
      if (!criteria.length || !criteria.uppercase || !criteria.lowercase || !criteria.special) {
        setError('Please meet all password security requirements.');
        return;
      }
    }

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/auth/dashboard', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          name: fullName,
          email: email,
          currentPassword: currentPassword || undefined,
          newPassword: newPassword || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update profile');
      }

      setMessage('Profile updated successfully in the database!');
      if (onProfileUpdated) onProfileUpdated(data);

      setTimeout(() => {
        if (setView) setView('dashboard');
        else navigate('/dashboard');
      }, 1200);
    } catch (err) {
      setError(err.message || 'Incorrect current password or network error.');
    } finally {
      setIsLoading(false);
    }
  };

  // OTP Workflow Handler
  const handleOtpAction = async (actionStep) => {
    setError('');
    setMessage('');

    if (actionStep === 'reset') {
      if (!fpCriteria.length || !fpCriteria.uppercase || !fpCriteria.lowercase || !fpCriteria.special) {
        setError('Please meet all password criteria requirements.');
        return;
      }
    }

    setIsLoading(true);
    const fullOtpString = otpValues.join('');
    const payload = {
      email,
      step: actionStep,
      ...(actionStep === 'verify' && { otp: fullOtpString }),
      ...(actionStep === 'reset' && { newPassword: fpNewPassword }),
    };

    try {
      const response = await fetch('http://localhost:8000/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        if (actionStep === 'request') {
          setOtpStep('verify');
          setMessage('Verification code sent to your email.');
        } else if (actionStep === 'verify') {
          setOtpStep('reset');
          setMessage('OTP verified! Enter your new password.');
        } else if (actionStep === 'reset') {
          setMessage('Password changed successfully!');
          setShowOtpModal(false);
          setOtpStep('request');
          setOtpValues(['', '', '', '', '', '']);
          setFpNewPassword('');
        }
      } else {
        setError(data.message || data.error || 'An error occurred.');
      }
    } catch (err) {
      setError('Network error during OTP process.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative mx-auto max-w-2xl px-4 pb-16 pt-6 sm:px-6 animate-in fade-in duration-300">
      {/* Back Navigation */}
      <button
        onClick={() => {
          if (setView) setView('dashboard');
          else navigate('/dashboard');
        }}
        className="group mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A20202] transition-all hover:text-[#850101]"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#A20202]/10 transition-transform group-hover:-translate-x-1">
          &larr;
        </span>
        Back to Profile
      </button>

      {/* Main Clean Container with Strict Red & White Theme */}
      <div className="overflow-hidden rounded-3xl border border-red-100 bg-white shadow-xl shadow-red-950/5">
        
        {/* Header Banner Section: Pure #A20202 background with crisp white typography */}
        <div className="relative bg-[#A20202] px-8 py-8 text-white">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <h2 className="font-['Fraunces',Georgia,serif] text-2xl font-bold tracking-tight sm:text-3xl">
            Account Settings
          </h2>
          <p className="mt-1.5 text-sm text-white/90">
            Manage your personal information and update your password security preferences.
          </p>
        </div>

        {/* Status Alerts */}
        {message && (
          <div className="mx-8 mt-6 p-4 bg-red-50 text-[#A20202] text-xs rounded-2xl border border-red-200 flex items-center gap-2.5 font-semibold animate-in zoom-in-95">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#A20202] text-white">✓</span> {message}
          </div>
        )}
        {error && (
          <div className="mx-8 mt-6 p-4 bg-red-50 text-[#A20202] text-xs rounded-2xl border border-red-200 flex items-center gap-2.5 font-semibold animate-in zoom-in-95">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#A20202] text-white">!</span> {error}
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-8 sm:p-10 space-y-6">
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 transition-all focus:border-[#A20202] focus:outline-none focus:ring-4 focus:ring-[#A20202]/10"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 transition-all focus:border-[#A20202] focus:outline-none focus:ring-4 focus:ring-[#A20202]/10"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          {/* Password Security Subsection */}
          <div className="border-t border-slate-100 pt-6 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Security & Password</h3>
                <p className="text-xs text-slate-500 mt-0.5">Keep your account secure by using a strong password.</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setError('');
                  setMessage('');
                  setOtpStep('request');
                  setShowOtpModal(true);
                }}
                className="text-xs font-bold text-[#A20202] hover:underline"
              >
                Forgot via OTP?
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Current Password
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 transition-all focus:border-[#A20202] focus:outline-none focus:ring-4 focus:ring-[#A20202]/10"
                placeholder="••••••••••••"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 transition-all focus:border-[#A20202] focus:outline-none focus:ring-4 focus:ring-[#A20202]/10"
                placeholder="••••••••••••"
              />

              {/* Dynamic Security Matrix Pills with Red & White Theme */}
              {newPassword && (
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold transition-all ${criteria.length ? 'bg-[#A20202] text-white shadow-sm' : 'bg-red-50/50 text-slate-400 border border-red-100'}`}>
                    <span>{criteria.length ? '✓' : '○'}</span> 8+ Characters
                  </div>
                  <div className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold transition-all ${criteria.uppercase ? 'bg-[#A20202] text-white shadow-sm' : 'bg-red-50/50 text-slate-400 border border-red-100'}`}>
                    <span>{criteria.uppercase ? '✓' : '○'}</span> Uppercase Letter
                  </div>
                  <div className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold transition-all ${criteria.lowercase ? 'bg-[#A20202] text-white shadow-sm' : 'bg-red-50/50 text-slate-400 border border-red-100'}`}>
                    <span>{criteria.lowercase ? '✓' : '○'}</span> Lowercase Letter
                  </div>
                  <div className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold transition-all ${criteria.special ? 'bg-[#A20202] text-white shadow-sm' : 'bg-red-50/50 text-slate-400 border border-red-100'}`}>
                    <span>{criteria.special ? '✓' : '○'}</span> Special Symbol
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setView && setView('dashboard')}
              className="rounded-xl px-6 py-3.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center rounded-xl bg-[#A20202] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#A20202]/25 transition-all hover:bg-[#8B0202] hover:shadow-xl hover:shadow-[#A20202]/35 focus:outline-none focus:ring-4 focus:ring-[#A20202]/20 disabled:opacity-50"
            >
              {isLoading ? 'Saving Changes...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>

      {/* --- FORGOT PASSWORD / OTP MODAL --- */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 space-y-6 border border-red-100 animate-in fade-in zoom-in-95 duration-150">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {otpStep === 'request' && 'Password Recovery'}
                {otpStep === 'verify' && 'Enter Verification Code'}
                {otpStep === 'reset' && 'Create New Password'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {otpStep === 'request' && `We'll send a 6-digit confirmation pin to ${email}`}
                {otpStep === 'verify' && `Please enter the 6-digit passcode sent to ${email}`}
                {otpStep === 'reset' && 'Enter a secure new password for your account'}
              </p>
            </div>

            {error && <p className="text-[#A20202] text-xs bg-red-50 p-3.5 rounded-2xl border border-red-200 font-semibold">{error}</p>}
            {message && <p className="text-[#A20202] text-xs bg-red-50 p-3.5 rounded-2xl border border-red-200 font-semibold">{message}</p>}

            {/* 6-Digit OTP Array Boxes */}
            {otpStep === 'verify' && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-3 text-center">Security PIN</label>
                <div className="flex justify-center gap-2">
                  {otpValues.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(e.target.value, index)}
                      onKeyDown={(e) => handleOtpKeyDown(e, index)}
                      className="w-12 h-12 bg-white border border-slate-200 rounded-2xl text-center text-xl font-bold text-slate-800 focus:outline-none focus:ring-4 focus:ring-[#A20202]/10 focus:border-[#A20202] transition-all"
                    />
                  ))}
                </div>
              </div>
            )}

            {otpStep === 'reset' && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">New Password</label>
                <input
                  type="password"
                  value={fpNewPassword}
                  onChange={(e) => setFpNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-4 focus:ring-[#A20202]/10 focus:border-[#A20202] transition-all"
                />
                <div className="mt-2.5 grid grid-cols-2 gap-2">
                  <div className={`flex items-center gap-1.5 p-2 rounded-xl text-[11px] font-semibold ${fpCriteria.length ? 'bg-[#A20202] text-white' : 'bg-red-50/50 text-slate-400 border border-red-100'}`}>
                    <span>{fpCriteria.length ? '✓' : '○'}</span> 8+ chars
                  </div>
                  <div className={`flex items-center gap-1.5 p-2 rounded-xl text-[11px] font-semibold ${fpCriteria.uppercase ? 'bg-[#A20202] text-white' : 'bg-red-50/50 text-slate-400 border border-red-100'}`}>
                    <span>{fpCriteria.uppercase ? '✓' : '○'}</span> Uppercase
                  </div>
                  <div className={`flex items-center gap-1.5 p-2 rounded-xl text-[11px] font-semibold ${fpCriteria.lowercase ? 'bg-[#A20202] text-white' : 'bg-red-50/50 text-slate-400 border border-red-100'}`}>
                    <span>{fpCriteria.lowercase ? '✓' : '○'}</span> Lowercase
                  </div>
                  <div className={`flex items-center gap-1.5 p-2 rounded-xl text-[11px] font-semibold ${fpCriteria.special ? 'bg-[#A20202] text-white' : 'bg-red-50/50 text-slate-400 border border-red-100'}`}>
                    <span>{fpCriteria.special ? '✓' : '○'}</span> Symbol
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowOtpModal(false);
                  setOtpStep('request');
                  setOtpValues(['', '', '', '', '', '']);
                  setFpNewPassword('');
                }}
                className="px-5 py-3 bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-200 transition-colors"
              >
                Cancel
              </button>

              {otpStep === 'request' && (
                <button
                  type="button"
                  onClick={() => handleOtpAction('request')}
                  disabled={isLoading}
                  className="px-6 py-3 bg-[#A20202] text-white text-xs font-bold rounded-xl hover:bg-[#850101] shadow-lg shadow-[#A20202]/20 transition-all disabled:opacity-50"
                >
                  {isLoading ? 'Sending...' : 'Send OTP'}
                </button>
              )}

              {otpStep === 'verify' && (
                <button
                  type="button"
                  onClick={() => handleOtpAction('verify')}
                  disabled={isLoading}
                  className="px-6 py-3 bg-[#A20202] text-white text-xs font-bold rounded-xl hover:bg-[#850101] shadow-lg shadow-[#A20202]/20 transition-all disabled:opacity-50"
                >
                  {isLoading ? 'Verifying...' : 'Verify Pin'}
                </button>
              )}

              {otpStep === 'reset' && (
                <button
                  type="button"
                  onClick={() => handleOtpAction('reset')}
                  disabled={isLoading}
                  className="px-6 py-3 bg-[#A20202] text-white text-xs font-bold rounded-xl hover:bg-[#850101] shadow-lg shadow-[#A20202]/20 transition-all disabled:opacity-50"
                >
                  {isLoading ? 'Updating...' : 'Change Password'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}