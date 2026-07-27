import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Lock, Mail } from "lucide-react";
import {
  login,
  requestSignupOtp,
  verifySignupOtp,
  googleLogin,
} from "./api/authApi";
import { useAuth } from "../../../context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";

const ACCENT = "#A20202";

const AuthPage = () => {
  const navigate = useNavigate();
  const { setUser, user, isLoading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] =
    useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState("auto");
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState("auto");

  // Signup is now two steps: fill the form ("form"), then confirm the
  // emailed code ("otp"). Only after "otp" succeeds does the account exist.
  const [signupStep, setSignupStep] = useState("form");
  const [otp, setOtp] = useState("");
  const [otpMessage, setOtpMessage] = useState(""); // green confirmation banner
  const [resendCooldown, setResendCooldown] = useState(0); // seconds left until resend is allowed
  const [resendLoading, setResendLoading] = useState(false);
  // NEW: local, inline validation message shown right under the OTP field
  // whenever the user tries to type/paste a non-digit character.
  const [otpFieldError, setOtpFieldError] = useState("");

  // Ticks the cooldown down every second while it's active
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  useEffect(() => {
    if (!isLoading && user) {
      navigate("/dashboard", { replace: true });
    }
  }, [isLoading, user, navigate]);

  const passwordRequirements = [
    {
      label: "At least 8 characters",
      met: formData.password.length >= 8,
    },
    {
      label: "At least 1 uppercase letter",
      met: /[A-Z]/.test(formData.password),
    },
    {
      label: "At least 1 lowercase letter",
      met: /[a-z]/.test(formData.password),
    },
    {
      label: "At least 1 number",
      met: /\d/.test(formData.password),
    },
  ];
  const isPasswordValid = passwordRequirements.every(
    (requirement) => requirement.met,
  );
  const isPasswordVisible =
    passwordVisibility === "visible" ||
    (passwordVisibility === "auto" && isPasswordFocused);
  const isConfirmPasswordVisible =
    confirmPasswordVisibility === "visible" ||
    (confirmPasswordVisibility === "auto" && isConfirmPasswordFocused);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(isPasswordVisible ? "hidden" : "visible");
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility(
      isConfirmPasswordVisible ? "hidden" : "visible",
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggle = (loginMode) => {
    setIsLogin(loginMode);
    setError("");
    setSignupStep("form"); // reset so switching modes never gets stuck on the OTP screen
    setOtpMessage("");
    setResendCooldown(0);
    setOtp("");
    setOtpFieldError(""); // clear any leftover OTP validation message
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

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
        // Signup no longer creates the account directly — it sends an OTP
        // to the email first. The account is only created once that OTP
        // is verified in handleOtpSubmit below.
        const data = await requestSignupOtp({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        setSignupStep("otp");
        setOtpMessage(data.message || "OTP sent to your email");
        setResendCooldown(30); // matches the backend's 30s cooldown
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

  // NEW: dedicated change handler for the OTP field.
  // - Strips out any character that isn't a digit (0-9).
  // - Caps the value at 6 digits.
  // - If the user typed/pasted something that included non-digit
  //   characters, we show an inline "numbers only" message.
  const handleOtpChange = (e) => {
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

    // Extra guard: block submission if the OTP isn't a clean 6-digit number
    // (covers edge cases like autofill injecting non-numeric text).
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
      // Backend sends secondsLeft when the cooldown is still active —
      // use it directly instead of guessing a new countdown
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
    <main className="min-h-screen bg-white flex items-center justify-center px-5 py-10">
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
            <div
              role="alert"
              className="mb-5 rounded-xl border border-red-200 bg-red-50 text-red-700 text-sm p-3"
            >
              {error}
            </div>
          )}

          {otpMessage && !error && (
            <div
              role="status"
              className="mb-5 rounded-xl border border-green-200 bg-green-50 text-green-700 text-sm p-3"
            >
              {otpMessage}
            </div>
          )}

          {!isLogin && signupStep === "otp" ? (
            /* --- OTP verification screen (signup, step 2) --- */
            <form className="space-y-6" onSubmit={handleOtpSubmit}>
              <p className="text-gray-600 text-sm">
                We sent a 6-digit code to <strong>{formData.email}</strong>
              </p>

              <div>
                <label
                  htmlFor="otp"
                  className="block text-xs font-semibold tracking-wide text-gray-500 mb-2"
                >
                  ENTER OTP
                </label>
                {/*
                  Wrapper div follows the same pattern as the other fields
                  (email/password): the ACCENT color lives on the wrapper so
                  the border lights up on focus, while the input text itself
                  stays a plain, readable black/dark-gray — not red.
                */}
                <div
                  className="relative flex items-center border-b-2 border-gray-200 focus-within:border-current transition-colors"
                  style={{ color: ACCENT }}
                >
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    // Placeholder "123456" removed per request — label above
                    // already tells the user what to do.
                    value={otp}
                    onChange={handleOtpChange}
                    required
                    maxLength={6}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    autoComplete="one-time-code"
                    autoFocus
                    aria-invalid={otpFieldError ? "true" : "false"}
                    aria-describedby={
                      otpFieldError ? "otp-error" : undefined
                    }
                    // text-black (not ACCENT) so the digits the user types
                    // are always plain black, regardless of focus/border color
                    className="w-full bg-transparent py-2 text-black placeholder-gray-400 focus:outline-none"
                  />
                </div>

                {/* Inline "numbers only" validation message */}
                {otpFieldError && (
                  <p
                    id="otp-error"
                    role="alert"
                    className="mt-2 text-sm text-red-600"
                  >
                    {otpFieldError}
                  </p>
                )}
              </div>

              <div className="flex justify-end -mt-2">
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendCooldown > 0 || resendLoading}
                  className="text-sm font-medium hover:underline disabled:no-underline disabled:text-gray-400 disabled:cursor-not-allowed"
                  style={resendCooldown > 0 || resendLoading ? undefined : { color: ACCENT }}
                >
                  {resendLoading
                    ? "Sending..."
                    : resendCooldown > 0
                      ? `Resend OTP in ${resendCooldown}s`
                      : "Resend OTP"}
                </button>
              </div>

              {/*
                Button width now matches the "Sign in/up with Google" button
                (which renders at width="320") instead of stretching full-width.
                max-w-[320px] + mx-auto keeps it centered and still responsive
                on very small screens.
              */}
              <button
                type="submit"
                disabled={loading}
                className="w-full max-w-[320px] mx-auto block text-white py-4 rounded-full font-semibold shadow-lg transition-transform duration-200 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ backgroundColor: ACCENT }}
              >
                {loading ? "Verifying..." : "Verify & Create Account"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setSignupStep("form");
                  setError("");
                  setOtpMessage("");
                  setResendCooldown(0);
                  setOtp("");
                  setOtpFieldError("");
                }}
                className="w-full text-sm font-medium hover:underline"
                style={{ color: ACCENT }}
              >
                &larr; Back to signup form
              </button>
            </form>
          ) : (
            /* --- Normal login / signup form --- */
            <>
              <form className="space-y-7" onSubmit={handleSubmit}>
                {!isLogin && (
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold tracking-wide text-gray-500 mb-2"
                    >
                      FULL NAME
                    </label>
                    <div
                      className="relative flex items-center border-b-2 border-gray-200 focus-within:border-current transition-colors"
                      style={{ color: ACCENT }}
                    >
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
                      <User
                        size={18}
                        className="absolute right-0 text-gray-400"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold tracking-wide text-gray-500 mb-2"
                  >
                    EMAIL ADDRESS
                  </label>
                  <div
                    className="relative flex items-center border-b-2 border-gray-200 focus-within:border-current transition-colors"
                    style={{ color: ACCENT }}
                  >
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
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold tracking-wide text-gray-500 mb-2"
                  >
                    PASSWORD
                  </label>
                  <div
                    className="relative flex items-center border-b-2 border-gray-200 focus-within:border-current transition-colors"
                    style={{ color: ACCENT }}
                  >
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
                      onClick={togglePasswordVisibility}
                      className="absolute right-0 flex items-center justify-center text-gray-400 hover:text-current focus:outline-none"
                      aria-label={
                        isPasswordVisible ? "Hide password" : "Show password"
                      }
                      title={
                        isPasswordVisible ? "Hide password" : "Show password"
                      }
                    >
                      {isPasswordVisible ? (
                        <Eye size={18} />
                      ) : (
                        <EyeOff size={18} />
                      )}
                    </button>
                  </div>

                  {!isLogin && (
                    <ul className="mt-3 space-y-1.5 text-sm" aria-live="polite">
                      {passwordRequirements.map((requirement) => (
                        <li
                          key={requirement.label}
                          className={
                            requirement.met ? "font-medium" : "text-gray-400"
                          }
                          style={
                            requirement.met ? { color: ACCENT } : undefined
                          }
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
                    <label
                      htmlFor="confirmPassword"
                      className="block text-xs font-semibold tracking-wide text-gray-500 mb-2"
                    >
                      CONFIRM PASSWORD
                    </label>
                    <div
                      className="relative flex items-center border-b-2 border-gray-200 focus-within:border-current transition-colors"
                      style={{ color: ACCENT }}
                    >
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
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute right-0 flex items-center justify-center text-gray-400 hover:text-current focus:outline-none"
                        aria-label={
                          isConfirmPasswordVisible
                            ? "Hide confirm password"
                            : "Show confirm password"
                        }
                        title={
                          isConfirmPasswordVisible
                            ? "Hide confirm password"
                            : "Show confirm password"
                        }
                      >
                        {isConfirmPasswordVisible ? (
                          <Eye size={18} />
                        ) : (
                          <EyeOff size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {isLogin && (
                  <div className="flex justify-end -mt-2">
                    <button
                      type="button"
                      onClick={() => navigate("/forgot-password")}
                      className="text-sm font-medium hover:underline"
                      style={{ color: ACCENT }}
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}

                {/*
                  Button width now matches the Google button (width="320")
                  instead of stretching the full width of the form column.
                */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full max-w-[320px] mx-auto block text-white py-4 rounded-full font-semibold shadow-lg transition-transform duration-200 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ backgroundColor: ACCENT }}
                >
                  {loading
                    ? "Please wait..."
                    : isLogin
                      ? "Login"
                      : "Create Account"}
                </button>
              </form>

              <div className="flex items-center gap-3 mt-8">
                <hr className="flex-1 border-gray-200" />
                <span className="text-gray-400 text-xs font-medium">OR</span>
                <hr className="flex-1 border-gray-200" />
              </div>

              <div className="mt-5 flex justify-center">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={() =>
                    setError("Google sign-in failed. Please try again.")
                  }
                  theme="outline"
                  size="large"
                  shape="pill"
                  text={isLogin ? "signin_with" : "signup_with"}
                  width="320"
                />
              </div>
            </>
          )}

          <footer className="mt-8 text-gray-600">
            {isLogin ? (
              <>
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={() => handleToggle(false)}
                  className="font-semibold hover:underline"
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
                  className="font-semibold hover:underline"
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
    </main>
  );
};

export default AuthPage;