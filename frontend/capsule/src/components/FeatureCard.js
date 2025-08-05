import React from 'react';

const FeatureCard = ({ iconClass, title, description, bgGradientFrom, bgGradientTo }) => {
  return (
    <div className="text-center group feature-card bg-white rounded-lg p-6 shadow-md
                    transition-transform-shadow duration-300 ease-in-out
                    hover:-translate-y-2 hover:scale-105 hover:shadow-custom-hover">
      <div
        className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl
                    bg-gradient-to-br from-${bgGradientFrom} to-${bgGradientTo}
                    group-hover:scale-110 transition-transform duration-300 ease-in-out
                    animate-pulse-slow`}
      >
        <i className={`${iconClass} text-white text-2xl`}></i>
      </div>
      <h4 className="text-2xl font-bold text-gray-800 mb-4">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
