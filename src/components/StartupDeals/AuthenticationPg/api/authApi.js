const AUTH_API_URL =
  import.meta.env.VITE_AUTH_API_URL ?? "http://localhost:8000/api/auth";

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
    throw error;
  }

  return data;
}

export const signup = (userData) =>
  request("/signup", {
    method: "POST",
    body: JSON.stringify(userData),
  });

export const login = (credentials) =>
  request("/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });

export const getProfile = () => request("/dashboard");

export const logout = () => request("/logout", { method: "POST" });
