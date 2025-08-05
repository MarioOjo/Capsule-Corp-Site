// src/components/FeatureCard.js
import React from 'react';

const FeatureCard = ({ icon, title, description, gradient }) => (
  <div className="text-center group">
    <div
      className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}
    >
      <i className={`fa-solid fa-${icon} text-white text-2xl`}></i>
    </div>
    <h4 className="text-2xl font-bold text-gray-800 mb-4">{title}</h4>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default FeatureCard;
