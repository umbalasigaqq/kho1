import React from 'react';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto flex justify-between items-center text-white p-4">
        <h2 className="text-xl font-bold">Giáo dục thông minh - EduAI</h2>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-[#EC4899] rounded-full flex items-center justify-center font-bold text-lg border-2 border-white/50">
            {user.initial}
          </div>
          <span className="hidden sm:inline font-semibold">{user.name}</span>
          <button 
            onClick={logout}
            className="bg-gradient-to-r from-[#ef4444] to-[#f97316] hover:opacity-90 transition-opacity text-white font-semibold py-2 px-5 rounded-full shadow-lg shadow-black/20"
            aria-label="Đăng xuất"
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;