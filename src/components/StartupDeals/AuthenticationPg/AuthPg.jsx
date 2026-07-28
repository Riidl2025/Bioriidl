import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Lock, Mail, KeyRound, X, Check } from "lucide-react";
import { 
  login, 
  signup, 
  googleLogin, 
  forgotPasswordRequest, 
  verifyOtp, 
  resetPassword,
  requestSignupOtp,
  verifySignupOtp 
} from "./api/authApi";
import { useAuth } from "../../../context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";

const ACCENT = "#A20202";

const AuthPage = () => {
  const navigate = useNavigate();
  const { setUser, user, isLoading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  
  // States: 'auth', 'forgot_email', 'forgot_otp', 'forgot_new'
  const [step, setStep] = useState("auth");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signupStep, setSignupStep] = useState("form"); // 'form' or 'otp'
  
  // Signup OTP states
  const [otp, setOtp] = useState("");
  const [otpFieldError, setOtpFieldError] = useState("");
  const [otpMessage, setOtpMessage] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);
  const [resendLoading, setResendLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: ["", "", "", "", "", ""],
    newPassword: "",
    confirmNewPassword: "",
  });

  const otpRefs = useRef([]);
  const [resendTimer, setResendTimer] = useState(23);

  // Timer for Modal Forgot Password OTP
  useEffect(() => {
    let interval;
    if (isModalOpen && step === "forgot_otp" && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isModalOpen, step, resendTimer]);

  // Timer for Signup OTP Cooldown
  useEffect(() => {
    let interval;
    if (!isLogin && signupStep === "otp" && resendCooldown > 0) {
      interval = setInterval(() => {
        setResendCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isLogin, signupStep, resendCooldown]);

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
  const [isNewPasswordFocused, setIsNewPasswordFocused] = useState(false);
  const [isConfirmNewPasswordFocused, setIsConfirmNewPasswordFocused] = useState(false);

  const [passwordVisibility, setPasswordVisibility] = useState("auto");
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState("auto");
  const [newPasswordVisibility, setNewPasswordVisibility] = useState("auto");
  const [confirmNewPasswordVisibility, setConfirmNewPasswordVisibility] = useState("auto");

  useEffect(() => {
    if (!isLoading && user && !isModalOpen) {
      navigate("/dashboard", { replace: true });
    }
  }, [isLoading, user, navigate, isModalOpen]);

  const passwordRequirements = [
    { label: "At least 8 characters", met: formData.password.length >= 8 },
    { label: "At least 1 uppercase letter", met: /[A-Z]/.test(formData.password) },
    { label: "At least 1 lowercase letter", met: /[a-z]/.test(formData.password) },
    { label: "At least 1 number", met: /\d/.test(formData.password) },
  ];

  const newPasswordRequirements = [
    { label: "At least 8 characters", met: formData.newPassword.length >= 8 },
    { label: "1 uppercase letter", met: /[A-Z]/.test(formData.newPassword) },
    { label: "1 lowercase letter", met: /[a-z]/.test(formData.newPassword) },
    { label: "1 special character", met: /[^A-Za-z0-9]/.test(formData.newPassword) },
  ];

  const isPasswordValid = passwordRequirements.every((req) => req.met);
  const isNewPasswordValid = newPasswordRequirements.every((req) => req.met);

  const isPasswordVisible = passwordVisibility === "visible" || (passwordVisibility === "auto" && isPasswordFocused);
  const isConfirmPasswordVisible = confirmPasswordVisibility === "visible" || (confirmPasswordVisibility === "auto" && isConfirmPasswordFocused);
  const isNewPasswordVisible = newPasswordVisibility === "visible" || (newPasswordVisibility === "auto" && isNewPasswordFocused);
  const isConfirmNewPasswordVisible = confirmNewPasswordVisibility === "visible" || (confirmNewPasswordVisibility === "auto" && isConfirmNewPasswordFocused);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Modal OTP change handler (6 individual split digit boxes)
  const handleModalOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...formData.otp];
    newOtp[index] = value.substring(value.length - 1);
    setFormData({ ...formData, otp: newOtp });

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleModalOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !formData.otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleToggle = (loginMode) => {
    setIsLogin(loginMode);
    setSignupStep("form");
    setError("");
    setSuccessMessage("");
    setOtp("");
    setOtpFieldError("");
  };

  const openForgotPasswordModal = () => {
    setIsModalOpen(true);
    setStep("forgot_email");
    setError("");
    setSuccessMessage("");
  };

  const closeForgotPasswordModal = () => {
    setIsModalOpen(false);
    setStep("auth");
    setError("");
    setSuccessMessage("");
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setLoading(true);
    try {
      await forgotPasswordRequest(formData.email);
      setSuccessMessage("OTP sent successfully to your email.");
      setResendTimer(23);
      setStep("forgot_otp");
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Failed to send OTP. Please check your email.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const otpString = formData.otp.join("");
    if (otpString.length < 6) {
      setError("Please enter the complete 6-digit OTP.");
      return;
    }
    setError("");
    setSuccessMessage("");
    setLoading(true);
    try {
      await verifyOtp(formData.email, otpString);
      setSuccessMessage("OTP verified successfully! Now set your new password.");
      setStep("forgot_new");
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!isNewPasswordValid) {
      setError("Please meet all password requirements.");
      return;
    }

    setLoading(true);
    try {
      await resetPassword(formData.email, formData.newPassword);
      setSuccessMessage("Password reset successfully! Please login with your new password.");
      setTimeout(() => {
        closeForgotPasswordModal();
        setIsLogin(true);
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!isLogin && !isPasswordValid) {
      setError("Please meet all password requirements.");
      return;
    }

    try {
      setLoading(true);

      if (isLogin) {
        const data = await login({
          email: formData.email,
          password: formData.password,
        });
        setUser(data);
        navigate("/dashboard", { replace: true });
      } else {
        const data = await requestSignupOtp({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        setSignupStep("otp");
        setOtpMessage(data.message || "OTP sent to your email");
        setResendCooldown(30);
      }
    } catch (requestError) {
      if (isLogin && requestError.status === 401) {
        setIsLogin(true);
        setError("Wrong email or password.");
        return;
      }

      setError(
        requestError.message || "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleMainOtpChange = (e) => {
    const rawValue = e.target.value;
    const digitsOnly = rawValue.replace(/[^0-9]/g, "").slice(0, 6);

    if (rawValue !== digitsOnly) {
      setOtpFieldError("Please enter numbers only.");
    } else {
      setOtpFieldError("");
    }

    setOtp(digitsOnly);
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!/^\d{6}$/.test(otp)) {
      setOtpFieldError("Please enter a valid 6-digit numeric code.");
      return;
    }

    try {
      setLoading(true);
      const data = await verifySignupOtp({ email: formData.email, otp });
      setUser(data);
      navigate("/dashboard", { replace: true });
    } catch (requestError) {
      setError(requestError.message || "Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendCooldown > 0 || resendLoading) return;

    setError("");
    setOtpMessage("");
    try {
      setResendLoading(true);
      const data = await requestSignupOtp({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      setOtpMessage(data.message || "A new OTP has been sent to your email");
      setResendCooldown(30);
    } catch (requestError) {
      if (requestError.status === 429) {
        setResendCooldown(requestError.data?.secondsLeft ?? 30);
      }
      setError(requestError.message || "Could not resend OTP. Please try again.");
    } finally {
      setResendLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    setError("");
    setSuccessMessage("");
    try {
      setLoading(true);
      const data = await googleLogin(credentialResponse.credential);
      setUser(data);
      navigate("/dashboard", { replace: true });
    } catch (requestError) {
      setError(
        requestError.message || "Google sign-in failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-5 py-10 relative">
      <section
        className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 relative"
        aria-label="Authentication Section"
      >
        {/* Left: Form */}
        <article className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
          <header className="mb-8">
            <h2 className="text-4xl font-bold" style={{ color: ACCENT }}>
              {!isLogin && signupStep === "otp"
                ? "Verify Your Email"
                : isLogin
                  ? "Login"
                  : "Create Account"}
            </h2>
            <p className="text-gray-500 mt-2">
              {!isLogin && signupStep === "otp"
                ? "Enter the code we just sent you."
                : isLogin
                  ? "Login to continue."
                  : "Join us and create your account."}
            </p>
          </header>

          {error && (
            <div role="alert" className="mb-5 rounded-xl border border-red-200 bg-red-50 text-red-700 text-sm p-3">
              {error}
            </div>
          )}

          {successMessage && !isModalOpen && (
            <div role="status" className="mb-5 rounded-xl border border-green-200 bg-green-50 text-green-700 text-sm p-3">
              {successMessage}
            </div>
          )}

          {otpMessage && (
            <div role="status" className="mb-5 rounded-xl border border-blue-200 bg-blue-50 text-blue-700 text-sm p-3">
              {otpMessage}
            </div>
          )}

          {!isLogin && signupStep === "otp" ? (
            /* Signup OTP Verification Form */
            <form className="space-y-7" onSubmit={handleOtpSubmit}>
              <div>
                <label htmlFor="signup-otp" className="block text-xs font-semibold tracking-wide text-gray-500 mb-2">
                  ENTER 6-DIGIT OTP
                </label>
                <div className="relative flex items-center border-b-2 border-gray-200 focus-within:border-current transition-colors" style={{ color: ACCENT }}>
                  <input
                    type="text"
                    id="signup-otp"
                    name="otp"
                    placeholder="123456"
                    value={otp}
                    onChange={handleMainOtpChange}
                    maxLength={6}
                    required
                    className="w-full bg-transparent py-2 pr-8 text-gray-800 tracking-widest text-lg placeholder-gray-400 focus:outline-none"
                  />
                  <KeyRound size={18} className="absolute right-0 text-gray-400" />
                </div>
                {otpFieldError && <p className="text-xs text-red-600 mt-1">{otpFieldError}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full text-white py-4 rounded-full font-semibold shadow-lg transition-transform duration-200 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                style={{ backgroundColor: ACCENT }}
              >
                {loading ? "Verifying..." : "Confirm & Register"}
              </button>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Didn't receive code?</span>
                <button
                  type="button"
                  disabled={resendCooldown > 0 || resendLoading}
                  onClick={handleResendOtp}
                  className={`font-semibold cursor-pointer ${resendCooldown > 0 ? "text-gray-400 cursor-not-allowed" : ""}`}
                  style={resendCooldown === 0 ? { color: ACCENT } : undefined}
                >
                  {resendLoading ? "Resending..." : resendCooldown > 0 ? `Resend in ${resendCooldown}s` : "Resend OTP"}
                </button>
              </div>
            </form>
          ) : (
            /* Main Login / Signup Initial Form */
            <form className="space-y-7" onSubmit={handleSubmit}>
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold tracking-wide text-gray-500 mb-2">
                    FULL NAME
                  </label>
                  <div className="relative flex items-center border-b-2 border-gray-200 focus-within:border-current transition-colors" style={{ color: ACCENT }}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent py-2 pr-8 text-gray-800 placeholder-gray-400 focus:outline-none"
                    />
                    <User size={18} className="absolute right-0 text-gray-400" />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-xs font-semibold tracking-wide text-gray-500 mb-2">
                  EMAIL ADDRESS
                </label>
                <div className="relative flex items-center border-b-2 border-gray-200 focus-within:border-current transition-colors" style={{ color: ACCENT }}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent py-2 pr-8 text-gray-800 placeholder-gray-400 focus:outline-none"
                  />
                  <Mail size={18} className="absolute right-0 text-gray-400" />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-semibold tracking-wide text-gray-500 mb-2">
                  PASSWORD
                </label>
                <div className="relative flex items-center border-b-2 border-gray-200 focus-within:border-current transition-colors" style={{ color: ACCENT }}>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="********"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
                    required
                    minLength={isLogin ? undefined : 8}
                    className="w-full bg-transparent py-2 pr-8 text-gray-800 placeholder-gray-400 focus:outline-none"
                  />
                  <button
                    type="button"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => setPasswordVisibility(isPasswordVisible ? "hidden" : "visible")}
                    className="absolute right-0 flex items-center justify-center text-gray-400 hover:text-current focus:outline-none cursor-pointer"
                    aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                  >
                    {isPasswordVisible ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </div>

                {!isLogin && (
                  <ul className="mt-3 space-y-1.5 text-sm" aria-live="polite">
                    {passwordRequirements.map((requirement) => (
                      <li
                        key={requirement.label}
                        className={requirement.met ? "font-medium" : "text-gray-400"}
                        style={requirement.met ? { color: ACCENT } : undefined}
                      >
                        <span aria-hidden="true" className="mr-2 font-bold">
                          {requirement.met ? "✓" : "•"}
                        </span>
                        {requirement.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-xs font-semibold tracking-wide text-gray-500 mb-2">
                    CONFIRM PASSWORD
                  </label>
                  <div className="relative flex items-center border-b-2 border-gray-200 focus-within:border-current transition-colors" style={{ color: ACCENT }}>
                    <input
                      type={isConfirmPasswordVisible ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="********"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      onFocus={() => setIsConfirmPasswordFocused(true)}
                      onBlur={() => setIsConfirmPasswordFocused(false)}
                      required
                      minLength={8}
                      className="w-full bg-transparent py-2 pr-8 text-gray-800 placeholder-gray-400 focus:outline-none"
                    />
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => setConfirmPasswordVisibility(isConfirmPasswordVisible ? "hidden" : "visible")}
                      className="absolute right-0 flex items-center justify-center text-gray-400 hover:text-current focus:outline-none cursor-pointer"
                      aria-label={isConfirmPasswordVisible ? "Hide confirm password" : "Show confirm password"}
                    >
                      {isConfirmPasswordVisible ? <Eye size={18} /> : <EyeOff size={18} />}
                    </button>
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex justify-end -mt-2">
                  <button
                    type="button"
                    onClick={openForgotPasswordModal}
                    className="text-sm font-medium hover:underline cursor-pointer"
                    style={{ color: ACCENT }}
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full text-white py-4 rounded-full font-semibold shadow-lg transition-transform duration-200 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                style={{ backgroundColor: ACCENT }}
              >
                {loading
                  ? "Please wait..."
                  : isLogin
                    ? "Login"
                    : "Create Account"}
              </button>
            </form>
          )}

          <div className="flex items-center gap-3 mt-8">
            <hr className="flex-1 border-gray-200" />
            <span className="text-gray-400 text-xs font-medium">OR</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          <div className="mt-5 flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => setError("Google sign-in failed. Please try again.")}
              theme="outline"
              size="large"
              shape="pill"
              text={isLogin ? "signin_with" : "signup_with"}
              width="320"
            />
          </div>

          <footer className="mt-8 text-gray-600">
            {isLogin ? (
              <>
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={() => handleToggle(false)}
                  className="font-semibold hover:underline cursor-pointer"
                  style={{ color: ACCENT }}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => handleToggle(true)}
                  className="font-semibold hover:underline cursor-pointer"
                  style={{ color: ACCENT }}
                >
                  Login
                </button>
              </>
            )}
          </footer>
        </article>

        {/* Right: Accent panel */}
        <aside
          className="relative order-1 md:order-2 hidden md:flex items-center justify-center overflow-hidden p-12"
          style={{
            background: `linear-gradient(135deg, ${ACCENT} 0%, #6e0101 60%, #1a0000 100%)`,
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          aria-hidden="true"
        >
          <div className="relative z-10 text-right text-white max-w-xs">
            <h3 className="text-4xl font-extrabold leading-tight mb-4">
              {isLogin ? (
                <>
                  WELCOME
                  <br />
                  BACK!
                </>
              ) : (
                <>
                  HELLO
                  <br />
                  THERE!
                </>
              )}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {isLogin
                ? "Login to continue where you left off."
                : "Create an account to get started with us."}
            </p>
          </div>
        </aside>
      </section>

      {/* Forgot Password Dialog Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 md:p-8 relative overflow-hidden">
            <button
              onClick={closeForgotPasswordModal}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* STEP 1: Forgot Email */}
            {step === "forgot_email" && (
              <>
                <header className="mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: `${ACCENT}15`, color: ACCENT }}>
                    <KeyRound size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Forgot Password
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Enter your registered email address to receive an OTP.
                  </p>
                </header>

                {error && (
                  <div role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 text-red-700 text-xs p-3">
                    {error}
                  </div>
                )}

                <form className="space-y-5" onSubmit={handleSendOtp}>
                  <div>
                    <label htmlFor="modal-reset-email" className="block text-xs font-semibold tracking-wide text-gray-500 mb-2">
                      EMAIL ADDRESS
                    </label>
                    <div className="relative flex items-center border-b-2 border-gray-200 focus-within:border-current transition-colors" style={{ color: ACCENT }}>
                      <input
                        type="email"
                        id="modal-reset-email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent py-2 pr-8 text-gray-800 placeholder-gray-400 focus:outline-none text-sm"
                      />
                      <Mail size={18} className="absolute right-0 text-gray-400" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full text-white py-3 rounded-full font-semibold shadow-md transition-transform duration-200 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer text-sm"
                    style={{ backgroundColor: ACCENT }}
                  >
                    {loading ? "Sending OTP..." : "Send OTP"}
                  </button>
                </form>
              </>
            )}

            {/* STEP 2: Verify OTP */}
            {step === "forgot_otp" && (
              <>
                <header className="mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-red-50 text-red-700">
                    <KeyRound size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Verify OTP Code
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Enter the 6-digit verification code sent to your email address
                  </p>
                </header>

                {successMessage && (
                  <div role="status" className="mb-4 rounded-xl border border-green-200 bg-green-50 text-green-700 text-xs p-3">
                    {successMessage}
                  </div>
                )}

                {error && (
                  <div role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 text-red-700 text-xs p-3">
                    {error}
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleVerifyOtp}>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold tracking-wide text-gray-500">SECURITY CODE</span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium text-red-700 bg-red-50 border border-red-100">
                        <Lock size={12} /> Encrypted
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1.5">
                        {formData.otp.slice(0, 3).map((digit, index) => (
                          <input
                            key={index}
                            ref={(el) => (otpRefs.current[index] = el)}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleModalOtpChange(index, e.target.value)}
                            onKeyDown={(e) => handleModalOtpKeyDown(index, e)}
                            className="w-12 h-14 text-center text-xl font-bold text-gray-800 bg-white border border-red-700 rounded-2xl focus:outline-none focus:ring-1 focus:ring-red-600 transition-all shadow-xs"
                          />
                        ))}
                      </div>

                      <span className="text-gray-300 font-light text-xl">-</span>

                      <div className="flex gap-1.5">
                        {formData.otp.slice(3, 6).map((digit, index) => {
                          const actualIndex = index + 3;
                          return (
                            <input
                              key={actualIndex}
                              ref={(el) => (otpRefs.current[actualIndex] = el)}
                              type="text"
                              maxLength={1}
                              value={digit}
                              onChange={(e) => handleModalOtpChange(actualIndex, e.target.value)}
                              onKeyDown={(e) => handleModalOtpKeyDown(actualIndex, e)}
                              className="w-12 h-14 text-center text-xl font-bold text-gray-800 bg-white border border-red-700 rounded-2xl focus:outline-none focus:ring-1 focus:ring-red-600 transition-all shadow-xs"
                            />
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                      <span>Didn&apos;t receive the code?</span>
                      <button
                        type="button"
                        disabled={resendTimer > 0 || loading}
                        onClick={handleSendOtp}
                        className="font-semibold cursor-pointer disabled:text-gray-400 disabled:cursor-not-allowed"
                        style={resendTimer === 0 ? { color: ACCENT } : undefined}
                      >
                        {resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : "Resend OTP"}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || formData.otp.join("").length < 6}
                    className="w-full text-white py-3 rounded-full font-semibold shadow-md transition-transform duration-200 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer text-sm"
                    style={{ backgroundColor: ACCENT }}
                  >
                    {loading ? "Verifying..." : "Verify Code"}
                  </button>
                </form>
              </>
            )}

            {/* STEP 3: Reset Password */}
            {step === "forgot_new" && (
              <>
                <header className="mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-red-50 text-red-700">
                    <Lock size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Set New Password
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Enter a secure new password for your account.
                  </p>
                </header>

                {successMessage && (
                  <div role="status" className="mb-4 rounded-xl border border-green-200 bg-green-50 text-green-700 text-xs p-3">
                    {successMessage}
                  </div>
                )}

                {error && (
                  <div role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 text-red-700 text-xs p-3">
                    {error}
                  </div>
                )}

                <form className="space-y-5" onSubmit={handleResetPassword}>
                  <div>
                    <label htmlFor="newPassword" className="block text-xs font-semibold tracking-wide text-gray-500 mb-2">
                      NEW PASSWORD
                    </label>
                    <div className="relative flex items-center border-b-2 border-gray-200 focus-within:border-current transition-colors" style={{ color: ACCENT }}>
                      <input
                        type={isNewPasswordVisible ? "text" : "password"}
                        id="newPassword"
                        name="newPassword"
                        placeholder="********"
                        value={formData.newPassword}
                        onChange={handleChange}
                        onFocus={() => setIsNewPasswordFocused(true)}
                        onBlur={() => setIsNewPasswordFocused(false)}
                        required
                        className="w-full bg-transparent py-2 pr-8 text-gray-800 placeholder-gray-400 focus:outline-none text-sm"
                      />
                      <button
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => setNewPasswordVisibility(isNewPasswordVisible ? "hidden" : "visible")}
                        className="absolute right-0 flex items-center justify-center text-gray-400 hover:text-current focus:outline-none cursor-pointer"
                        aria-label={isNewPasswordVisible ? "Hide new password" : "Show new password"}
                      >
                        {isNewPasswordVisible ? <Eye size={18} /> : <EyeOff size={18} />}
                      </button>
                    </div>

                    <ul className="mt-2.5 space-y-1 text-xs" aria-live="polite">
                      {newPasswordRequirements.map((requirement) => (
                        <li
                          key={requirement.label}
                          className={requirement.met ? "font-medium" : "text-gray-400"}
                          style={requirement.met ? { color: ACCENT } : undefined}
                        >
                          <span aria-hidden="true" className="mr-1.5 font-bold">
                            {requirement.met ? "✓" : "•"}
                          </span>
                          {requirement.label}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !isNewPasswordValid}
                    className="w-full text-white py-3 rounded-full font-semibold shadow-md transition-transform duration-200 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer text-sm"
                    style={{ backgroundColor: ACCENT }}
                  >
                    {loading ? "Resetting..." : "Reset Password"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default AuthPage;