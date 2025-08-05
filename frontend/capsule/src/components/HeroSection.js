// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => (
  <section className="bg-gradient-to-br from-saiyan-orange via-orange-400 to-red-500 h-[600px] relative overflow-hidden">
    <div className="absolute inset-0 bg-black/10"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
      <div className="grid grid-cols-12 gap-8 items-center h-full">
        <div className="col-span-7">
          <div className="space-y-8">
            <h2 className="text-6xl font-saiyan font-black text-white leading-tight drop-shadow-2xl">
              SUMMER SAIYAN SALE
            </h2>
            <p className="text-xl text-white/90 font-medium leading-relaxed drop-shadow-lg">
              Power up your training with legendary gear! Up to 50% off battle equipment and capsule technology.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-saiyan-blue px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-saiyan-blue transition-all shadow-xl">
                View Collection
              </button>
            </div>
            <div className="flex items-center space-x-6 pt-6">
              <div className="flex space-x-3">
                {[
                  'from-capsule-yellow to-saiyan-orange',
                  'from-red-500 to-red-600',
                  'from-blue-500 to-saiyan-blue'
                ].map((gradient, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 bg-gradient-to-br ${gradient} rounded-full shadow-lg border-2 border-white`}
                  />
                ))}
              </div>
              <span className="text-white/90 font-medium drop-shadow">Collect all 7 Dragon Balls</span>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="relative">
            <img
              className="w-full h-96 rounded-2xl shadow-2xl border-4 border-white/20"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/df5468d5f3-d0e515adcc93a2193bb1.png"
              alt="Goku riding golden nimbus cloud"
            />
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-capsule-yellow to-saiyan-orange rounded-full shadow-xl border-4 border-white animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-xl border-4 border-white animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
