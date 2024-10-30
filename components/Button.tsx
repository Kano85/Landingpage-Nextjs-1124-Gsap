import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        px-6 py-2 
        bg-blue-500 
        text-white 
        font-semibold 
        rounded-lg 
        shadow-md 
        hover:bg-blue-600 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-400 
        focus:ring-opacity-75 
        active:bg-blue-700 
        transform active:scale-95
        transition duration-150 ease-in-out
      "
    >
      {children}
    </button>
  );
};

export default Button;
