import React, { useState, useRef, useEffect } from 'react';

const Navbar = ({ setView, user, handleLogout, getInitials }) => {
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setShowSettingsMenu(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl cursor-pointer" onClick={() => setView('dashboard')}>
          <span className="font-extrabold text-gray-900">r</span>
          <span className="font-extrabold text-[#A20202]">ii</span>
          <span className="font-extrabold text-gray-900">dl</span>
          <span className="font-medium text-[#A20202] ml-2">Member Hub</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#A20202] text-white font-bold flex items-center justify-center">
            {getInitials(user.name)}
          </div>
          <div className="relative" ref={menuRef}>
            <button onClick={() => setShowSettingsMenu(!showSettingsMenu)} className="p-2 text-gray-600 hover:text-[#A20202]">
              ⚙️
            </button>
            {showSettingsMenu && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-xl rounded-lg py-2 w-40 z-50">
                <button onClick={() => {setView('profile'); setShowSettingsMenu(false)}} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Edit Profile</button>
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-[#A20202] font-bold">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;