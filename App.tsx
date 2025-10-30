import React, { createContext, useContext, useState, useEffect } from 'react';

// --- 1. CONTEXTS AND UTILITIES (for standalone file) ---

// Define the IconName type and Icons map
const iconMap = {
  presentation: (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.06C3.933 21.407 3 20.864 3 20V8.688Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14.25a6 6 0 0 0-5.223 3.324L7.86 21.41a.54.54 0 0 1-.506.004L3.656 18.06A4.5 4.5 0 0 1 5.12 15.151l1.621-1.621" />
    </svg>
  ),
  summary: (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3m-3 3h3m-3 3h3m-3 3h3M3 20.25h18A2.25 2.25 0 0 0 23.25 18V5.25A2.25 2.25 0 0 0 21 3H3.75A.75.75 0 0 0 3 3.75v16.5Z" />
    </svg>
  ),
  email: (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.688a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  ),
  quiz: (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 17.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 14.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM8.25 14.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    </svg>
  ),
  lessonPlan: (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625A3.375 3.375 0 0 0 16.125 8.25h-3.5a.75.75 0 0 0-.75.75v3.5a3.375 3.375 0 0 0 3.375 3.375h2.625Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 12a.75.75 0 0 0 0 1.5.75.75 0 0 0 0-1.5ZM12 7.5h.008v.008H12V7.5Zm-.375 2.25a.375.375 0 1 0 .75 0 .375.375 0 0 0-.75 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 6 4.5h12A2.25 2.25 0 0 1 20.25 6.75v10.5A2.25 2.25 0 0 1 18 19.5Z" />
    </svg>
  ),
  rubric: (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m3 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    </svg>
  ),
};

const Icon = ({ name, className }) => {
  const SvgComponent = iconMap[name];
  if (!SvgComponent) return null;
  return <SvgComponent className={className} />;
};
// End of Icons component

// Auth Context Mock
const AuthContext = createContext({ user: null, login: () => {}, logout: () => {} });
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Use null for logged out, or an object for logged in
  
  // Mock login and auth setup
  useEffect(() => {
    // In a real app, this would check Firebase/localStorage
    setUser({ id: 'user-id-123', name: 'Student' }); 
  }, []);

  const login = () => setUser({ id: 'user-id-123', name: 'Student' });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
// End of Auth Context Mock

// LoginPage Mock
const LoginPage = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
    <div className="p-8 rounded-lg shadow-2xl bg-gray-800 max-w-sm w-full text-center">
      <h2 className="text-3xl font-extrabold mb-4 text-emerald-400">Đăng Nhập</h2>
      <p className="mb-6 text-gray-400">Vui lòng đăng nhập để sử dụng công cụ AI.</p>
      <button 
        onClick={useContext(AuthContext).login}
        className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-lg font-semibold transition duration-300 shadow-md transform hover:scale-[1.02]"
      >
        Đăng nhập
      </button>
    </div>
  </div>
);
// End of LoginPage Mock

// Header Mock
const Header = () => {
    const { logout } = useAuth();
    return (
        <header className="bg-emerald-900 shadow-lg sticky top-0 z-10">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-emerald-400">
                    <span className="text-white">AI </span>
                    <span className="hidden sm:inline">Phục Vụ Giáo Dục</span>
                </h1>
                <button 
                    onClick={logout}
                    className="py-2 px-4 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium transition duration-300"
                >
                    Đăng Xuất
                </button>
            </div>
        </header>
    );
};
// End of Header Mock

// FeatureCard Component
const FeatureCard = ({ direction, icon, title, description, bgColor, url }) => {
  
  const handleClick = () => {
    // CHỨC NĂNG QUAN TRỌNG: Xử lý chuyển hướng
    if (url) {
      // Đảm bảo URL có protocol để trình duyệt biết đây là một liên kết bên ngoài
      const fullUrl = url.startsWith('http') ? url : `https://${url}`;
      window.open(fullUrl, '_blank');
    } else {
      // Ví dụ: có thể chuyển hướng đến một trang nội bộ trong ứng dụng
      console.log(`Chuyển đến trang nội bộ: ${title}`);
    }
  };

  return (
    <div 
      className={`
        max-w-md w-full p-6 rounded-2xl shadow-xl transition-all duration-300 transform 
        hover:scale-[1.03] hover:shadow-emerald-500/50 cursor-pointer 
        flex items-start space-x-4
        ${direction === 'left' ? 'lg:mr-auto' : 'lg:ml-auto'}
        ${bgColor}
      `}
      onClick={handleClick}
    >
      <div className={`p-3 rounded-full ${bgColor.replace('-500', '-700')} shadow-md`}>
        <Icon name={icon} className="w-8 h-8 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-1 text-white">{title}</h3>
        <p className="text-sm text-gray-100">{description}</p>
        {url && (
            <span className="text-xs mt-2 inline-block font-medium text-white/80 border-b border-white/50">
                Mở ứng dụng &rarr;
            </span>
        )}
      </div>
    </div>
  );
};
// End of FeatureCard Component


// --- 2. APP DATA AND MAIN COMPONENT ---

const features = [
  {
    icon: 'presentation',
    title: 'Tạo bài thuyết trình',
    description: 'Tạo dàn ý và nội dung cho bài thuyết trình chuyên nghiệp.',
    bgColor: 'bg-lime-500',
    // Đã thêm protocol https:// để đảm bảo chuyển hướng chính xác
    url: 'https://videotuongtacai.netlify.app', 
  },
  {
    icon: 'summary',
    title: 'Tóm tắt văn bản',
    description: 'Rút gọn tài liệu dài thành những điểm chính, dễ hiểu.',
    bgColor: 'bg-red-500',
  },
  {
    icon: 'email',
    title: 'Soạn Email',
    description: 'Soạn thảo email chuyên nghiệp cho phụ huynh và đồng nghiệp.',
    bgColor: 'bg-sky-500',
  },
  {
    icon: 'quiz',
    title: 'Tạo câu hỏi trắc nghiệm',
    description: 'Tự động tạo câu hỏi trắc nghiệm từ nội dung cho trước.',
    bgColor: 'bg-yellow-500',
  },
  {
    icon: 'lessonPlan',
    title: 'Soạn giáo án',
    description: 'Tạo giáo án chi tiết theo từng chủ đề và cấp học.',
    bgColor: 'bg-orange-500',
  },
  {
    icon: 'rubric',
    title: 'Tạo Rubric chấm điểm',
    description: 'Thiết kế các tiêu chí chấm điểm rõ ràng và nhất quán.',
    bgColor: 'bg-purple-500',
  },
];

const leftFeatures = features.slice(0, 3);
const rightFeatures = features.slice(3, 6);

const PencilSVG = () => (
  // Bút chì đã được làm lại cho phù hợp với phong cách hiện đại và Tailwind
  <svg viewBox="0 0 100 400" className="w-24 md:w-32 h-auto drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
      {/* Tip */}
      <polygon points="50,400 30,350 70,350" fill="#EADBC8" /> 
      {/* Collar */}
      <polygon points="30,350 70,350 70,330 30,330" fill="#F8DE7E" /> 
      {/* Body Section 1 (Blue) */}
      <polygon points="30,330 70,330 70,260 30,260" fill="#3B82F6" />
      {/* Body Section 2 (Red) */}
      <polygon points="30,260 70,260 70,190 30,190" fill="#EF4444" />
      {/* Body Section 3 (Yellow) */}
      <polygon points="30,190 70,190 70,120 30,120" fill="#FBBF24" /> 
      {/* Body Section 4 (Green) */}
      <polygon points="30,120 70,120 70,50 30,50" fill="#22C55E" /> 
      {/* Eraser Metal Holder */}
      <polygon points="30,50 70,50 70,30 30,30" fill="#A1A1AA" />
      {/* Eraser */}
      <polygon points="30,30 70,30 70,0 30,0" fill="#F472B6" /> 
  </svg>
);

const App = () => {
  const { user } = useAuth();

  // Đã thêm gradient để giao diện đẹp hơn
  const appClasses = "min-h-screen text-white overflow-x-hidden p-0 m-0 bg-emerald-950"

  if (!user) {
    // Chạy trong AuthProvider để có thể đăng nhập
    return (
      <div className={appClasses}>
        <LoginPage />
      </div>
    )
  }

  return (
    <div className={appClasses}>
      <Header />
      <main className="container mx-auto p-4 sm:p-8 flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mt-8 mb-12 text-emerald-300 drop-shadow-lg">
            Bộ Công Cụ AI Cho Giáo Viên
        </h2>

        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-4 mt-6">
          <div className="w-full lg:w-2/5 flex flex-col gap-6 items-center lg:items-end">
            {leftFeatures.map((feature) => (
              <FeatureCard
                key={feature.title}
                direction="left"
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                bgColor={feature.bgColor}
                url={feature.url}
              />
            ))}
          </div>

          <div className="w-1/5 hidden lg:flex justify-center items-center px-4">
            <PencilSVG />
          </div>
          
          <div className="w-full lg:w-2/5 flex flex-col gap-6 items-center lg:items-start">
            {rightFeatures.map((feature) => (
              <FeatureCard
                key={feature.title}
                direction="right"
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                bgColor={feature.bgColor}
                url={feature.url}
              />
            ))}
          </div>
        </div>
      </main>
      <style>{`
        /* Thêm font Inter và gradient nền đẹp mắt */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
          background-color: #0d1a1b; /* Dark background */
        }
        .bg-gradient-radial {
          background-image: radial-gradient(circle at 50% 0%, #102a28 0%, #0d1a1b 70%);
        }
      `}</style>
    </div>
  );
};

// Phải bọc App trong AuthProvider để useContext hoạt động
export default () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);
