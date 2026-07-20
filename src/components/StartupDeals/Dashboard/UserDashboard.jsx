import Navbar from './Navbar';
import DashboardView from './DashboardView';
import EditProfile from './EditProfile';

const UserDashboard = () => {
  const [view, setView] = useState('dashboard');
  const [user, setUser] = useState({ name: '', email: '' });

  // ... (Keep your useEffect/handleLogout logic here)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar setView={setView} user={user} handleLogout={handleLogout} getInitials={getInitials} />
      <main className="max-w-6xl mx-auto py-10 px-6">
        {view === 'dashboard' ? <DashboardView /> : <EditProfile user={user} setView={setView} />}
      </main>
    </div>
  );
};