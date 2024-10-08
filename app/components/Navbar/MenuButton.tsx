import React from 'react';

export const MenuButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden text-2xl leading-6 text-black">
      <span className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
        {children}
      </span>
      <span className="absolute left-0 inline-block translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
        {children}
      </span>
    </div>
  );
};
