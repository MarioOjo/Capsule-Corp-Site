import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-blue-900 to-black px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-cyan-300 drop-shadow-md">
          Welcome to Capsule Corp.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-200 mb-6">
          Discover futuristic tech, exclusive gear, and Saiyan-approved products from the Dragon Ball universe.
        </p>
        <Link to="/shop">
          <button className="px-6 py-3 bg-cyan-500 text-black font-bold rounded hover:bg-cyan-400 transition">
            Enter the Store
          </button>
        </Link>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-r from-black via-gray-900 to-black px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Featured Gear</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {['Saiyan Armor', 'Capsule Pod', 'Dragon Radar', 'Gravity Room Pass'].map((product, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
              <div className="h-40 bg-gray-700 rounded mb-4 flex items-center justify-center text-xl font-semibold text-cyan-300">
                {product}
              </div>
              <p className="text-gray-300 text-sm">
                Get your hands on {product}—designed for fighters, scientists, and space travelers alike.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center bg-gradient-to-b from-black via-blue-950 to-black">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4">About Capsule Corp.</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Founded by Dr. Brief and led by Bulma, Capsule Corporation is the world’s leader in portable tech and space-age innovation. From vehicles in capsules to battle-grade armor, everything is built for those who live life at over 9000!
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 text-center py-6 border-t border-gray-800">
        <p>© 2025 Capsule Corp. | All rights reserved | Powered by Saiyan Energy™</p>
      </footer>
    </div>
  );
}