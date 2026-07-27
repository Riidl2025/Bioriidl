import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setView, user, handleLogout, getInitials }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setShowDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDashboardClick = () => {
    setShowDropdown(false);
    if (navigate) navigate('/dashboard');
    if (setView) setView('dashboard');
  };

  const handleProfileClick = () => {
    setShowDropdown(false);
    if (navigate) navigate('/dashboard');
    if (setView) setView('profile');
  };

  // Safe fallback if getInitials function is not passed as a prop
  const renderInitials = (name) => {
    if (typeof getInitials === 'function') {
      return getInitials(name);
    }
    if (!name) return 'AS';
    const parts = name.trim().split(' ');
    return parts.length >= 2 ? `${parts[0][0]}${parts[1][0]}`.toUpperCase() : name.substring(0, 2).toUpperCase();
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl cursor-pointer flex items-center" onClick={handleDashboardClick}>
          <span className="font-extrabold text-gray-900">r</span>
          <span className="font-extrabold text-[#A20202]">ii</span>
          <span className="font-extrabold text-gray-900">dl</span>
          <span className="font-medium text-[#A20202] ml-2">Member Hub</span>
        </div>
        
        {/* User Initials with Dropdown */}
        <div className="relative" ref={menuRef}>
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-10 h-10 rounded-full bg-[#A20202] text-white font-bold flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A20202] transition-transform active:scale-95 cursor-pointer shadow-md hover:bg-[#850101]"
            aria-label="User menu"
          >
            {renderInitials(user?.name)}
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-xl rounded-lg py-2 w-44 z-50 animate-in fade-in zoom-in-95 duration-150">
              <button 
                onClick={handleDashboardClick} 
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Dashboard
              </button>
              <button 
                onClick={handleProfileClick} 
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                View Profile
              </button>
              <div className="border-t border-gray-100 my-1"></div>
              <button 
                onClick={() => { setShowDropdown(false); if (handleLogout) handleLogout(); }} 
                className="block w-full text-left px-4 py-2 text-sm text-[#A20202] font-bold hover:bg-red-50 cursor-pointer"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;