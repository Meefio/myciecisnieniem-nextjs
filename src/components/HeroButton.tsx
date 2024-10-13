import React from 'react';

interface HeroButtonProps {
  children: string;
  className?: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({ children, className }) => {
  return (
    <button className={`border-[3px] rounded-xl inset-3 border-white text-white bg-main-color py-3 px-12 hover:bg-secondary-color transition-colors transition-duration-300 ${className}`}>{children}</button>
  );
}

export default HeroButton;
