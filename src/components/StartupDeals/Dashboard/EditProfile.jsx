import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = ({ user, setView, onProfileUpdated }) => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  // Password change section fields
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Password visibility states (true = visible/eye open, false = hidden/eye closed)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showFpNewPassword, setShowFpNewPassword] = useState(false);

  // Forgot Password / OTP modal state
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpStep, setOtpStep] = useState('request'); // 'request', 'verify', 'reset'

  // Resend OTP cooldown timer state (30 seconds)
  const [resendCooldown, setResendCooldown] = useState(0);

  // 6-digit OTP array state
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const [fpNewPassword, setFpNewPassword] = useState('');

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Countdown timer effect for OTP resend timeout
  useEffect(() => {
    let timer;
    if (resendCooldown > 0) {
      timer = setInterval(() => {
        setResendCooldown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendCooldown]);

  // Password criteria helper
  const getPasswordCriteria = (pwd) => ({
    length: pwd.length >= 8,
    uppercase: /[A-Z]/.test(pwd),
    lowercase: /[a-z]/.test(pwd),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
  });

  // Handle individual digit input change and auto-focus next box
  const handleOtpChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle backspace navigation between OTP blocks
  const handleOtpKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (newPassword) {
      const criteria = getPasswordCriteria(newPassword);
      if (!criteria.length || !criteria.uppercase || !criteria.lowercase || !criteria.special) {
        setError('Please meet all password criteria requirements.');
        return;
      }
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/dashboard', {
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
        if (response.status === 401 || (data.message && data.message.toLowerCase().includes('token'))) {
          throw new Error('Incorrect current password or session expired.');
        }
        throw new Error(data.message || 'Failed to update profile');
      }

      setMessage('Account settings updated successfully in the database!');

      if (onProfileUpdated) {
        onProfileUpdated(data);
      }

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

  // 2. Forgot Password / OTP multi-step actions
  const handleOtpAction = async (actionStep) => {
    setError('');
    setMessage('');

    if (actionStep === 'reset') {
      const criteria = getPasswordCriteria(fpNewPassword);
      if (!criteria.length || !criteria.uppercase || !criteria.lowercase || !criteria.special) {
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
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        if (actionStep === 'request') {
          setOtpStep('verify');
          setMessage('OTP sent successfully to your email.');
          setResendCooldown(30); // Start 30-second cooldown on request/resend
        } else if (actionStep === 'verify') {
          setOtpStep('reset');
          setMessage('OTP verified successfully! Now set your new password.');
        } else if (actionStep === 'reset') {
          setMessage('Password successfully changed !');
          setShowOtpModal(false);
          setOtpStep('request');
          setOtpValues(['', '', '', '', '', '']);
          setFpNewPassword('');
          setResendCooldown(0);
        }
      } else {
        setError(data.message || data.error || 'An error occurred.');
      }
    } catch (err) {
      setError('Network error during OTP workflow.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderPasswordChecklist = (pwd) => {
    const criteria = getPasswordCriteria(pwd);
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 p-3.5 bg-slate-50/85 rounded-xl border border-slate-200/60 text-xs">
        <div className={`flex items-center gap-2 transition-colors ${criteria.length ? 'text-[#A20202] font-medium' : 'text-slate-400'}`}>
          <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${criteria.length ? 'bg-red-100 text-[#A20202]' : 'bg-slate-200 text-slate-500'}`}>
            {criteria.length ? '✓' : '•'}
          </span>
          At least 8 characters
        </div>
        <div className={`flex items-center gap-2 transition-colors ${criteria.uppercase ? 'text-[#A20202] font-medium' : 'text-slate-400'}`}>
          <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${criteria.uppercase ? 'bg-red-100 text-[#A20202]' : 'bg-slate-200 text-slate-500'}`}>
            {criteria.uppercase ? '✓' : '•'}
          </span>
          1 uppercase letter
        </div>
        <div className={`flex items-center gap-2 transition-colors ${criteria.lowercase ? 'text-[#A20202] font-medium' : 'text-slate-400'}`}>
          <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${criteria.lowercase ? 'bg-red-100 text-[#A20202]' : 'bg-slate-200 text-slate-500'}`}>
            {criteria.lowercase ? '✓' : '•'}
          </span>
          1 lowercase letter
        </div>
        <div className={`flex items-center gap-2 transition-colors ${criteria.special ? 'text-[#A20202] font-medium' : 'text-slate-400'}`}>
          <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${criteria.special ? 'bg-red-100 text-[#A20202]' : 'bg-slate-200 text-slate-500'}`}>
            {criteria.special ? '✓' : '•'}
          </span>
          1 special character
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto pb-16 px-4 sm:px-6">
      {/* Top Navigation Back Button */}
      <button
        onClick={() => {
          if (setView) setView('dashboard');
          else navigate('/dashboard');
        }}
        className="inline-flex items-center gap-2 mb-6 text-sm font-semibold text-slate-600 hover:text-[#A20202] transition-colors bg-white px-4 py-2 rounded-xl shadow-xs border border-slate-200/85"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Dashboard
      </button>

      <div className="bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-200/80 overflow-hidden">
        {/* Header Banner */}
        <div className="bg-[#A20202] px-8 py-8 text-white relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Account Settings</h2>
          <p className="text-red-100 text-sm mt-1.5">Manage your personal credentials and enhance security settings.</p>
        </div>

        <div className="p-6 sm:p-10">
          {message && (
            <div className="mb-6 p-4 bg-emerald-50 text-emerald-900 text-sm rounded-2xl border border-emerald-200/80 flex items-center gap-3 font-medium shadow-xs">
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">✓</span>
              <span>{message}</span>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-rose-50 text-rose-900 text-sm rounded-2xl border border-rose-200/80 flex items-center gap-3 font-medium shadow-xs">
              <span className="w-6 h-6 rounded-full bg-[#A20202] text-white flex items-center justify-center text-xs">!</span>
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSave}>
            {/* Personal Information Section */}
            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-[#A20202]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Personal Information
              </h3>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:bg-white focus:ring-2 focus:ring-[#A20202]/15 focus:border-[#A20202] focus:outline-none transition-all shadow-xs"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:bg-white focus:ring-2 focus:ring-[#A20202]/15 focus:border-[#A20202] focus:outline-none transition-all shadow-xs"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Security Settings Section */}
            <div className="border-t border-slate-100 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold tracking-widest uppercase text-slate-400 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#A20202]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Security & Password
                </h3>

                <button
                  type="button"
                  onClick={() => {
                    setError('');
                    setMessage('');
                    setOtpStep('request');
                    setResendCooldown(0);
                    setShowOtpModal(true);
                  }}
                  className="text-xs text-[#A20202] font-bold hover:underline bg-red-50 px-3 py-1.5 rounded-lg border border-red-100 transition-all"
                >
                  Forgot Password ?
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Current Password</label>
                  <div className="relative">
                    <input
                      type={showCurrentPassword ? 'text' : 'password'}
                      className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:bg-white focus:ring-2 focus:ring-[#A20202]/15 focus:border-[#A20202] focus:outline-none transition-all shadow-xs"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors"
                      aria-label="Toggle current password visibility"
                    >
                      {showCurrentPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">New Password</label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:bg-white focus:ring-2 focus:ring-[#A20202]/15 focus:border-[#A20202] focus:outline-none transition-all shadow-xs"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors"
                      aria-label="Toggle new password visibility"
                    >
                      {showNewPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      )}
                    </button>
                  </div>
                  {renderPasswordChecklist(newPassword)}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#A20202] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#850101] shadow-md shadow-red-900/10 hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isLoading && (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {isLoading ? 'Saving Changes...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* --- FORGOT PASSWORD OTP MODAL FLOW --- */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 space-y-6 border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#A20202] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                {otpStep === 'request' && 'Reset Password via OTP'}
                {otpStep === 'verify' && 'Verify OTP Code'}
                {otpStep === 'reset' && 'Set New Password'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {otpStep === 'request' && `We will send a verification security token code to ${email}`}
                {otpStep === 'verify' && `Enter the 6-digit verification code sent to your email address`}
                {otpStep === 'reset' && 'Configure a secure brand new account password below'}
              </p>
            </div>

            {error && <p className="text-[#A20202] text-xs bg-rose-50 p-3.5 rounded-xl border border-rose-200 font-medium">{error}</p>}
            {message && <p className="text-emerald-700 text-xs bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 font-medium">{message}</p>}

            {/* 6 Separate Input Blocks Divided 3 & 3 with Resend Option Always Visible */}
            {otpStep === 'verify' && (
              <div className="py-2">
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="text-[11px] font-extrabold tracking-wider uppercase text-slate-400">Security Code</span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#A20202] bg-red-50/80 px-2.5 py-1 rounded-full border border-red-100/60">
                    <svg className="w-3.5 h-3.5 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Encrypted</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 sm:gap-2.5">
                  {/* First Group of 3 */}
                  <div className="flex gap-2">
                    {otpValues.slice(0, 3).map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleOtpChange(e.target.value, index)}
                        onKeyDown={(e) => handleOtpKeyDown(e, index)}
                        className="w-10 h-13 bg-slate-50/90 border border-red-300 rounded-xl text-center text-2xl font-black text-slate-800 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#A20202]/15 focus:border-[#A20202] transition-all shadow-xs" />
                    ))}
                  </div>

                  {/* Decorative Dash Separator */}
                  <div className="flex items-center justify-center w-4 text-slate-300 font-bold text-lg select-none">
                    —
                  </div>

                  {/* Second Group of 3 */}
                  <div className="flex gap-2">
                    {otpValues.slice(3, 6).map((digit, index) => {
                      const actualIndex = index + 3;
                      return (
                        <input
                          key={actualIndex}
                          ref={(el) => (inputRefs.current[actualIndex] = el)}
                          type="text"
                          maxLength="1"
                          value={digit}
                          onChange={(e) => handleOtpChange(e.target.value, actualIndex)}
                          onKeyDown={(e) => handleOtpKeyDown(e, actualIndex)}
                          className="w-10 h-13 bg-slate-50/90 border border-red-300 rounded-xl text-center text-2xl font-black text-slate-800 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#A20202]/15 focus:border-[#A20202] transition-all shadow-xs"
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Resend Code Section Always Visible with 30-Second Cooldown */}
                <div className="flex items-center justify-between mt-4 text-xs">
                  <span className="text-slate-500">Didn't receive the code?</span>
                  <button
                    type="button"
                    disabled={resendCooldown > 0 || isLoading}
                    onClick={() => {
                      handleOtpAction('request');
                    }}
                    className={`font-bold transition-all ${
                      resendCooldown > 0 || isLoading
                        ? 'text-slate-400 cursor-not-allowed'
                        : 'text-[#A20202] hover:underline cursor-pointer'
                    }`}
                  >
                    {resendCooldown > 0 ? `Resend OTP (${resendCooldown}s)` : 'Resend OTP'}
                  </button>
                </div>
              </div>
            )}

            {/* Also show resend option during request step if desired, or keep it standard */}
            {otpStep === 'request' && (
              <div className="py-2">
                <p className="text-xs text-slate-600 mb-2">Click below to generate and dispatch your secure one-time passcode.</p>
              </div>
            )}

            {otpStep === 'reset' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">New Password</label>
                <div className="relative">
                  <input
                    type={showFpNewPassword ? 'text' : 'password'}
                    value={fpNewPassword}
                    onChange={(e) => setFpNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#A20202]/20 focus:border-[#A20202] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowFpNewPassword(!showFpNewPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors"
                    aria-label="Toggle reset password visibility"
                  >
                    {showFpNewPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    )}
                  </button>
                </div>
                {renderPasswordChecklist(fpNewPassword)}
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              {/* Persistent secondary resend button at the footer if user is in 'verify' step */}
              {otpStep === 'verify' ? (
                <button
                  type="button"
                  disabled={resendCooldown > 0 || isLoading}
                  onClick={() => handleOtpAction('request')}
                  className={`text-xs font-bold transition-all ${
                    resendCooldown > 0 || isLoading
                      ? 'text-slate-300 cursor-not-allowed'
                      : 'text-[#A20202] hover:underline cursor-pointer'
                  }`}
                >
                  {resendCooldown > 0 ? `Resend OTP in ${resendCooldown}s` : 'Resend OTP Now'}
                </button>
              ) : (
                <div></div>
              )}

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowOtpModal(false);
                    setOtpStep('request');
                    setOtpValues(['', '', '', '', '', '']);
                    setFpNewPassword('');
                    setResendCooldown(0);
                  }}
                  className="px-4 py-2.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>

                {otpStep === 'request' && (
                  <button
                    type="button"
                    onClick={() => handleOtpAction('request')}
                    disabled={isLoading}
                    className="px-5 py-2.5 bg-[#A20202] text-white text-xs font-bold rounded-xl hover:bg-[#850101] shadow-sm transition-all disabled:opacity-50"
                  >
                    {isLoading ? 'Sending...' : 'Send OTP'}
                  </button>
                )}

                {otpStep === 'verify' && (
                  <button
                    type="button"
                    onClick={() => handleOtpAction('verify')}
                    disabled={isLoading}
                    className="px-5 py-2.5 bg-[#A20202] text-white text-xs font-bold rounded-xl hover:bg-[#850101] shadow-sm transition-all disabled:opacity-50"
                  >
                    {isLoading ? 'Verifying...' : 'Verify OTP'}
                  </button>
                )}

                {otpStep === 'reset' && (
                  <button
                    type="button"
                    onClick={() => handleOtpAction('reset')}
                    disabled={isLoading}
                    className="px-5 py-2.5 bg-[#A20202] text-white text-xs font-bold rounded-xl hover:bg-[#850101] shadow-sm transition-all disabled:opacity-50"
                  >
                    {isLoading ? 'Updating...' : 'Update Password'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;