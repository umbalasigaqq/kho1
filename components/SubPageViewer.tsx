import React from 'react';
import { Icons } from './Icons';

interface SubPageViewerProps {
  url: string;
  onClose: () => void;
}

const SubPageViewer: React.FC<SubPageViewerProps> = ({ url, onClose }) => {
  return (
    <div className="w-full h-full flex flex-col animate-fade-in-up">
      <div className="mb-4">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          aria-label="Quay về trang chủ"
        >
          <Icons name="arrowLeft" className="w-6 h-6" />
          <span className="font-semibold">Quay về trang chủ</span>
        </button>
      </div>
      <div className="flex-grow w-full h-[calc(100vh-150px)]">
        <iframe
          src={url}
          title="Nội dung trang con"
          className="w-full h-full border-0 rounded-lg shadow-2xl"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default SubPageViewer;
