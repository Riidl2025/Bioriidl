import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "./api/authApi";
import { useAuth } from "../../../context/AuthContext";

export default function UserProfile() {
  const navigate = useNavigate();
  const { user, setUser, isLoading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } finally {
      setUser(null);
      navigate("/startupdeals/auth", { replace: true });
    }
  };

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-600">
        Loading profile...
      </main>
    );
  }

  if (!user) {
    return <Navigate to="/startupdeals/auth" replace />;
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12">
      <section className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/60 md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A20202]">
          User Profile
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          Welcome, {user.name}
        </h1>
        <p className="mt-3 text-slate-600">
          You are signed in to your Bioriidl account.
        </p>

        <dl className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          <div className="p-5">
            <dt className="text-sm font-medium text-slate-500">Full name</dt>
            <dd className="mt-1 font-semibold text-slate-900">{user.name}</dd>
          </div>
          <div className="p-5">
            <dt className="text-sm font-medium text-slate-500">Email address</dt>
            <dd className="mt-1 font-semibold text-slate-900">{user.email}</dd>
          </div>
        </dl>

        <button
          type="button"
          onClick={handleLogout}
          className="mt-8 rounded-xl bg-[#A20202] px-6 py-3 font-semibold text-white transition hover:bg-[#880101]"
        >
          Log out
        </button>
      </section>
    </main>
  );
}
