import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Icons } from './Icons';

const LoginPage: React.FC = () => {
  const { login } = useAuth();

  return (
    <div className="bg-emerald-950 min-h-screen text-white bg-gradient-radial from-emerald-800 to-emerald-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-emerald-400" style={{textShadow: '2px 2px 8px rgba(0,6,0,0.2)'}}>
            EduAI
          </h1>
         <h1 className="text-3xl md:text-6xl font-bold mb-4 text-white" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.2)'}}>
            Giáo dục thông minh
          </h1>
          <h1 className="text-xl mb-12 text-white">
            Tác giả: Huỳnh Thanh Liêm - THPT Hòa Lạc - An Giang
            </h1>
          <button 
            onClick={login}
            className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg w-full max-w-xs mx-auto shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 flex items-center justify-center space-x-3"
          >
            <Icons name="google" className="w-6 h-6" />
            <span>Đăng nhập với Google</span>
          </button>
      </div>
    </div>
  );
};

export default LoginPage;