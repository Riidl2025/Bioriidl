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

  // --- API Interaction ---
  const handleAction = async (actionStep) => {
    setIsLoading(true);
    setErrorMessage('');

    const payload = {
      email,
      step: actionStep,
      ...(actionStep === 'verify' && { otp }),
      ...(actionStep === 'reset' && { newPassword }),
    };

    try {
      const response = await fetch('http://localhost:8000/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        if (actionStep === 'request') setStep('verify');
        else if (actionStep === 'verify') setStep('reset');
        else if (actionStep === 'reset') {
          // Success: Redirect to Dashboard
          navigate('/dashboard');
        }
      } else {
        setErrorMessage(data.message || 'An error occurred. Please try again.');
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
          <p className="text-red-600 text-sm mb-4 text-center bg-red-50 p-2 rounded">{errorMessage}</p>
        )}

        {/* --- Step 1: Request OTP --- */}
        {step === 'request' && (
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a20202] outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={() => handleAction('request')}
              disabled={isLoading}
              className="w-full bg-[#a20202] hover:bg-red-900 text-white font-semibold py-3 rounded-lg transition"
            >
              {isLoading ? 'Sending...' : 'Send OTP'}
            </button>
          </div>
        )}

        {/* --- Step 2: Verify OTP --- */}
        {step === 'verify' && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a20202] outline-none"
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              onClick={() => handleAction('verify')}
              disabled={isLoading}
              className="w-full bg-[#a20202] hover:bg-red-900 text-white font-semibold py-3 rounded-lg transition"
            >
              {isLoading ? 'Verifying...' : 'Verify OTP'}
            </button>
          </div>
        )}

        {/* --- Step 3: Reset Password --- */}
        {step === 'reset' && (
          <div className="space-y-4">
            <input
              type="password"
              placeholder="New Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a20202] outline-none"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              onClick={() => handleAction('reset')}
              disabled={isLoading}
              className="w-full bg-[#a20202] hover:bg-red-900 text-white font-semibold py-3 rounded-lg transition"
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