const AUTH_API_URL = import.meta.env.VITE_AUTH_API_URL ?? "/api/auth";

async function request(path, options = {}) {
  const { headers, ...requestOptions } = options;

  const response = await fetch(`${AUTH_API_URL}${path}`, {
    credentials: "include",
    ...requestOptions,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message ?? "Unable to complete the request.");
    error.status = response.status;
    error.data = data; // exposes extra fields like redirectTo or secondsLeft
    throw error;
  }

  return data;
}

export const requestSignupOtp = (userData) =>
  request("/signup", {
    method: "POST",
    body: JSON.stringify({ step: "request", ...userData }),
  });

export const verifySignupOtp = ({ email, otp }) =>
  request("/signup", {
    method: "POST",
    body: JSON.stringify({ step: "verify", email, otp }),
  });

export const login = (credentials) =>
  request("/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });

//Frontend: sending the note to your backend
export const googleLogin = (credential) =>
  request("/google", {
    method: "POST",
    body: JSON.stringify({ credential }),
  });

export const getProfile = () => request("/dashboard");

export const logout = () => request("/logout", { method: "POST" });