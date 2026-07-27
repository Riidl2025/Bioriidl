import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { logout } from '../AuthenticationPg/api/authApi';
import Navbar from './Navbar';
import DashboardView from './DashboardView';
import EditProfile from './EditProfile';

const UserDashboard = () => {
  const [searchParams] = useSearchParams();
  const initialView = searchParams.get('view') === 'profile' ? 'profile' : 'dashboard';
  const [view, setView] = useState(initialView);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      // Clear local session even if the API call fails.
    }
    setUser(null);
    navigate('/startupdeals/auth', { replace: true });
  };

  const getInitials = (name) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        setView={setView}
        user={user || { name: '', email: '' }}
        handleLogout={handleLogout}
        getInitials={getInitials}
      />
      <main className="max-w-6xl mx-auto py-10 px-6">
        {view === 'dashboard' ? <DashboardView /> : <EditProfile user={user} setView={setView} />}
      </main>
    </div>
  );
};

export default UserDashboard;