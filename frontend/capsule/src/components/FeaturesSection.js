import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    iconClass: 'fa-solid fa-rocket',
    title: 'Instant Transmission Shipping',
    description: "Get your gear delivered faster than Goku's teleportation",
    bgGradientFrom: 'saiyan-blue',
    bgGradientTo: 'blue-600',
  },
  {
    iconClass: 'fa-solid fa-shield',
    title: 'Battle-Tested Quality',
    description: 'Every product survives planet-destroying explosions',
    bgGradientFrom: 'saiyan-orange',
    bgGradientTo: 'red-500',
  },
  {
    iconClass: 'fa-solid fa-star',
    title: 'Legendary Support',
    description: '24/7 customer service by Z-Fighter experts',
    bgGradientFrom: 'capsule-yellow',
    bgGradientTo: 'yellow-500',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map(({ iconClass, title, description, bgGradientFrom, bgGradientTo }) => (
            <FeatureCard
              key={title}
              iconClass={iconClass}
              title={title}
              description={description}
              bgGradientFrom={bgGradientFrom}
              bgGradientTo={bgGradientTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
