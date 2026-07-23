import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();

  // --- State Management ---
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState('request'); // States: 'request', 'verify', 'reset'
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // --- API Interaction ---
  const handleAction = async (actionStep) => {
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    const payload = {
      email,
      step: actionStep,
      ...(actionStep === 'verify' && { otp }),
      ...(actionStep === 'reset' && { newPassword }),
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
          setStep('verify');
          setSuccessMessage('OTP sent successfully to your email.');
        } else if (actionStep === 'verify') {
          setStep('reset');
          setSuccessMessage('OTP verified successfully! Please enter your new password.');
        } else if (actionStep === 'reset') {
          setSuccessMessage('Password updated successfully!');
          setTimeout(() => {
            navigate('/dashboard');
          }, 1200);
        }
      } else {
        setErrorMessage(data.message || data.error || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  // --- UI Render ---
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4 font-sans">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-2xl font-bold text-[#a20202] mb-6 text-center">
          {step === 'request' && 'Forgot Password'}
          {step === 'verify' && 'Verify OTP'}
          {step === 'reset' && 'Set New Password'}
        </h2>

        {errorMessage && (
          <p className="text-red-600 text-sm mb-4 text-center bg-red-50 p-2 rounded border border-red-200">
            {errorMessage}
          </p>
        )}

        {successMessage && (
          <p className="text-green-600 text-sm mb-4 text-center bg-green-50 p-2 rounded border border-green-200">
            {successMessage}
          </p>
        )}

        {/* --- Step 1: Request OTP --- */}
        {step === 'request' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your registered email"
                value={email}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a20202] outline-none"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              onClick={() => handleAction('request')}
              disabled={isLoading || !email}
              className="w-full bg-[#a20202] hover:bg-red-900 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
            >
              {isLoading ? 'Sending...' : 'Send OTP'}
            </button>
          </div>
        )}

        {/* --- Step 2: Verify OTP --- */}
        {step === 'verify' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Verification Code</label>
              <input
                type="text"
                maxLength="6"
                placeholder="Enter 6-digit OTP"
                value={otp}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center tracking-widest font-bold text-lg focus:ring-2 focus:ring-[#a20202] outline-none"
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button
              onClick={() => handleAction('verify')}
              disabled={isLoading || !otp}
              className="w-full bg-[#a20202] hover:bg-red-900 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
            >
              {isLoading ? 'Verifying...' : 'Verify OTP'}
            </button>
          </div>
        )}

        {/* --- Step 3: Reset Password --- */}
        {step === 'reset' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">New Password</label>
              <input
                type="password"
                placeholder="At least 6 characters"
                value={newPassword}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a20202] outline-none"
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <button
              onClick={() => handleAction('reset')}
              disabled={isLoading || !newPassword}
              className="w-full bg-[#a20202] hover:bg-red-900 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
            >
              {isLoading ? 'Updating...' : 'Update Password'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;