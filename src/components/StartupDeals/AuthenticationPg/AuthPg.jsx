import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Lock, Mail } from "lucide-react";
import { login, signup, googleLogin } from "./api/authApi";
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
      const data = isLogin
        ? await login({ email: formData.email, password: formData.password })
        : await signup({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          });

      setUser(data);
      navigate("/dashboard", { replace: true });
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
              {isLogin ? "Login" : "Create Account"}
            </h2>
            <p className="text-gray-500 mt-2">
              {isLogin
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
                  <User size={18} className="absolute right-0 text-gray-400" />
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
                  title={isPasswordVisible ? "Hide password" : "Show password"}
                >
                  {isPasswordVisible ? <Eye size={18} /> : <EyeOff size={18} />}
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

            <button
              type="submit"
              disabled={loading}
              className="w-full text-white py-4 rounded-full font-semibold shadow-lg transition-transform duration-200 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
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
