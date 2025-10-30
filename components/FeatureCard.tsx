import React from 'react';
import { Icons, IconName } from './Icons';

interface FeatureCardProps {
  icon: IconName;
  title: string;
  description: string;
  bgColor: string;
  direction: 'left' | 'right';
  url?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, bgColor, direction, url }) => {
  const isRight = direction === 'right';
  const isClickable = !!url;

  const containerClasses = [
    'w-full',
    'max-w-md',
    'lg:max-w-md',
    'p-6',
    'flex',
    'items-center',
    'gap-4',
    'rounded-lg',
    'shadow-lg',
    bgColor,
    isRight ? 'clip-arrow-right' : 'clip-arrow-left',
    'transition-transform',
    'duration-300',
    'block', // Ensure anchor tag behaves like a block element
    isClickable ? 'hover:scale-105' : '',
    isClickable && (isRight ? 'hover:translate-x-2' : 'hover:-translate-x-2'),
    !isClickable ? 'cursor-default' : ''
  ].filter(Boolean).join(' ');
  
  const contentPadding = isRight 
    ? { paddingLeft: '1rem', paddingRight: '2.5rem' } 
    : { paddingLeft: '2.5rem', paddingRight: '1rem' };

  const CardContent = (
    <>
      <div className={`flex-shrink-0 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center ${isRight ? '' : 'order-last'}`}>
        <Icons name={icon} className="w-8 h-8 text-white" />
      </div>
      <div className={`flex-grow ${isRight ? 'text-left' : 'text-right'}`}>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-white/80 text-base">{description}</p>
      </div>
    </>
  );

  if (isClickable) {
    return (
      <a
        href={url}
        className={containerClasses}
        style={contentPadding}
        aria-label={`Mở ${title}`}
      >
        {CardContent}
      </a>
    );
  }

  return (
    <div 
      className={containerClasses} 
      style={contentPadding}
    >
      {CardContent}
    </div>
  );
};

export default FeatureCard;