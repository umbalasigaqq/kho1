import React from 'react';
import { useAuth } from './context/AuthContext';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import FeatureCard from './components/FeatureCard';
import { IconName } from './components/Icons';

interface Feature {
  icon: IconName;
  title: string;
  description: string;
  bgColor: string;
  url?: string;
}


// FeatureCard Component
// Đã thêm isComingSoon để hiển thị nhãn "Sắp ra mắt"
const FeatureCard = ({ direction, icon, title, description, bgColor, url, isComingSoon }) => {
  
  const handleClick = () => {
    // CHỨC NĂNG QUAN TRỌNG: Xử lý chuyển hướng
    if (url) {
      // Đảm bảo URL có protocol để trình duyệt biết đây là một liên kết bên ngoài
      const fullUrl = url.startsWith('http') ? url : `https://${url}`;
      window.open(fullUrl, '_blank');
    } else {
      // Nếu không có URL và không phải sắp ra mắt, thì không làm gì cả
      console.log(`Chuyển đến trang nội bộ: ${title}`);
    }
  };
  const isClickable = !!url && !isComingSoon;

  return (
    <div 
      className={`
        max-w-md w-full p-6 rounded-2xl shadow-xl transition-all duration-300 
        flex items-start space-x-4 relative 
        ${direction === 'left' ? 'lg:mr-auto' : 'lg:ml-auto'}
        ${bgColor}
        ${isClickable ? 'cursor-pointer hover:scale-[1.03] hover:shadow-emerald-500/50 transform' : 'cursor-default opacity-75'}
      `}
      onClick={isClickable ? handleClick : undefined}
    >
      {isComingSoon && (
        // Nhãn "Sắp ra mắt" đã được thay đổi để khớp với kiểu dáng trong hình ảnh (màu cam, bo tròn, nổi bật)
        <div className="absolute top-0 right-0 -mt-3 -mr-3 px-6 py-2 bg-orange-500 text-white font-semibold text-sm rounded-full shadow-lg transform translate-x-1/2 -translate-y-1/2 z-10">
          Sắp ra mắt
        </div>
      )}

      <div className={`p-3 rounded-full ${bgColor.replace('-500', '-700')} shadow-md`}>
        <Icon name={icon} className="w-8 h-8 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-1 text-white">{title}</h3>
        <p className="text-sm text-gray-100">{description}</p>
        {url && !isComingSoon && (
            <span className="text-xs mt-2 inline-block font-medium text-white/80 border-b border-white/50">
                Mở ứng dụng &rarr;
            </span>
        )}
      </div>
    </div>
  );
};
// End of FeatureCard Component



const features: Feature[] = [
  {
    icon: 'presentation',
    title: 'Tạo Video tương tác với AI',
    description: 'Biến bất kỳ video nào thành một bài giảng hấp dẫn với các câu hỏi trắc nghiệm.',
    bgColor: 'bg-lime-500',
    url: 'https://videotuongtacai.netlify.app',
    isComingSoon: true,
  },
  {
    icon: 'summary',
    title: 'Tóm tắt văn bản',
    description: 'Rút gọn tài liệu dài thành những điểm chính, dễ hiểu.',
    bgColor: 'bg-red-500',
    isComingSoon: false,
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
  <svg viewBox="0 0 100 400" className="w-24 md:w-32 h-auto drop-shadow-2xl">
    <polygon points="50,400 30,350 70,350" fill="#EADBC8" />
    <polygon points="50,400 30,350 50,350" fill="#D3C5B3" />
    <polygon points="30,350 70,350 70,330 30,330" fill="#F8DE7E" />
    <polygon points="30,350 50,350 50,330 30,330" fill="#F4D03F" />
    <polygon points="30,330 70,330 70,260 30,260" fill="#3B82F6" />
    <polygon points="30,330 50,330 50,260 30,260" fill="#2563EB" />
    <polygon points="30,260 70,260 70,190 30,190" fill="#EF4444" />
    <polygon points="30,260 50,260 50,190 30,190" fill="#DC2626" />
    <polygon points="30,190 70,190 70,120 30,120" fill="#FBBF24" />
    <polygon points="30,190 50,190 50,120 30,120" fill="#F59E0B" />
    <polygon points="30,120 70,120 70,50 30,50" fill="#22C55E" />
    <polygon points="30,120 50,120 50,50 30,50" fill="#16A34A" />
    <polygon points="30,50 70,50 70,30 30,30" fill="#A1A1AA" />
    <polygon points="30,50 50,50 50,30 30,30" fill="#71717A" />
    <polygon points="30,30 70,30 70,0 30,0" fill="#F472B6" />
    <polygon points="30,30 50,30 50,0 30,0" fill="#EC4899" />
  </svg>
);

const App: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <LoginPage />;
  }

  return (
    <div className="bg-emerald-950 min-h-screen text-white bg-gradient-radial from-emerald-800 to-emerald-950 overflow-x-hidden">
      <Header />
      <main className="container mx-auto p-4 sm:p-8 flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mt-8 mb-12 text-emerald-300 drop-shadow-lg">
            GIẢI PHÁP AI ĐỒNG HÀNH CÙNG GIÁO VIÊN
        </h2>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-4 mt-12">
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
    </div>
  );
};

export default App;
