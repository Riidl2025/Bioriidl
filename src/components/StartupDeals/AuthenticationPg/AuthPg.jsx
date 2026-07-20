import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { login, signup } from "./api/authApi";
import { useAuth } from "../../../context/AuthContext";

const AuthPage = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
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
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState("auto");
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState("auto");

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
  const isPasswordValid = passwordRequirements.every((requirement) => requirement.met);
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

      setError(requestError.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#A20202] via-[#8a0202] to-black flex items-center justify-center px-5 py-10">

      <section
        className="max-w-xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden"
        aria-label="Authentication Section"
      >
        <article className="p-8 md:p-12">

          <header className="mb-8 text-center">

            <h2 className="text-4xl font-bold text-[#A20202]">
              {isLogin ? "Login" : "Create Account"}
            </h2>

            <p className="text-gray-500 mt-2">
              {isLogin
                ? "Login to continue."
                : "Join us and create your account."}
            </p>

          </header>


          {/* Toggle Buttons */}

          <nav
            className="flex bg-gray-100 rounded-xl p-1 mb-8"
            aria-label="Authentication Toggle"
          >
            <button
              type="button"
              onClick={() => handleToggle(true)}
              className={`w-1/2 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isLogin
                  ? "bg-[#A20202] text-white"
                  : "text-gray-600"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => handleToggle(false)}
              className={`w-1/2 py-3 rounded-lg font-semibold transition-all duration-300 ${
                !isLogin
                  ? "bg-[#A20202] text-white"
                  : "text-gray-600"
              }`}
            >
              Signup
            </button>
          </nav>

          {error && (
            <div
              role="alert"
              className="mb-5 rounded-xl border border-red-200 bg-red-50 text-red-700 text-sm p-3"
            >
              {error}
            </div>
          )}

          {/* Form */}

          <form className="space-y-5" onSubmit={handleSubmit}>

            {!isLogin && (
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium mb-2"
                >
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#A20202]"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block font-medium mb-2"
              >
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#A20202]"
              />
            </div>


            <div>
              <label
                htmlFor="password"
                className="block font-medium mb-2"
              >
                Password
              </label>

              <div className="relative">
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
                  className="w-full border rounded-xl p-4 pr-14 focus:outline-none focus:ring-2 focus:ring-[#A20202]"
                />
                <button
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex w-14 items-center justify-center text-gray-500 hover:text-[#A20202] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A20202]"
                  aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                  title={isPasswordVisible ? "Hide password" : "Show password"}
                >
                  {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {!isLogin && (
                <ul className="mt-3 space-y-1.5 text-sm" aria-live="polite">
                  {passwordRequirements.map((requirement) => (
                    <li
                      key={requirement.label}
                      className={requirement.met ? "text-green-700" : "text-gray-500"}
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
                  className="block font-medium mb-2"
                >
                  Confirm Password
                </label>

                <div className="relative">
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
                    className="w-full border rounded-xl p-4 pr-14 focus:outline-none focus:ring-2 focus:ring-[#A20202]"
                  />
                  <button
                    type="button"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute inset-y-0 right-0 flex w-14 items-center justify-center text-gray-500 hover:text-[#A20202] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A20202]"
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
                    {isConfirmPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            )}


            {isLogin && (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => navigate("/forgot-password")}
                  className="text-sm text-[#A20202] font-medium hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}


            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#A20202] hover:bg-[#880101] transition-all duration-300 text-white py-4 rounded-xl font-semibold shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Please wait..." : isLogin ? "Login" : "Create Account"}
            </button>

          </form>

          <footer className="mt-8 text-center text-gray-600">

            {isLogin ? (
              <>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => handleToggle(false)}
                  className="text-[#A20202] font-semibold"
                >
                  Signup
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => handleToggle(true)}
                  className="text-[#A20202] font-semibold"
                >
                  Login
                </button>
              </>
            )}

          </footer>

        </article>

      </section>

    </main>
  );
};

export default AuthPage;
