// src/components/NavBar.js
import React from 'react';

const NavBar = () => {
  const navItems = ['Home', 'Products', 'Battle Gear', 'Capsules', 'Training', 'Cart'];

  return (
    <nav className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-saiyan-blue/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center space-x-8 py-4">
          {navItems.map(item => (
            <span
              key={item}
              className="hover:text-saiyan-blue cursor-pointer font-medium transition-colors border-b-2 border-transparent hover:border-saiyan-blue"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
