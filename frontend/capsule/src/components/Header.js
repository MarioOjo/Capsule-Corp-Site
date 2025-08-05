// src/components/Header.js
import React from 'react';

const Header = () => (
  <header className="bg-gradient-to-r from-saiyan-blue to-blue-600 shadow-lg">
    <div className="max-w-6xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-capsule-yellow to-saiyan-orange rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <i className="fa-solid fa-capsules text-saiyan-blue text-xl"></i>
          </div>
          <h1 className="text-2xl font-saiyan font-bold text-white tracking-wider">CAPSULE CORP.</h1>
        </div>
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Find Dragon Balls..." 
              className="w-full px-4 py-3 bg-white/90 backdrop-blur border-2 border-white/20 rounded-xl pr-12 focus:outline-none focus:ring-2 focus:ring-capsule-yellow transition-all"
            />
            <i className="fa-solid fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-saiyan-blue text-lg"></i>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <i className="fa-regular fa-user text-white text-xl hover:text-capsule-yellow transition-colors cursor-pointer"></i>
          <div className="relative">
            <i className="fa-solid fa-shopping-cart text-white text-xl hover:text-capsule-yellow transition-colors cursor-pointer"></i>
            <span className="absolute -top-2 -right-2 bg-saiyan-orange text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg">3</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
