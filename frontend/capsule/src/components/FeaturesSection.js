import React from "react";

const features = [
  {
    id: 1,
    icon: "fa-rocket",
    title: "Instant Transmission Shipping",
    description: "Get your gear delivered faster than Goku's teleportation",
    bgFrom: "from-saiyan-blue",
    bgTo: "to-blue-600",
  },
  {
    id: 2,
    icon: "fa-shield",
    title: "Battle-Tested Quality",
    description: "Every product survives planet-destroying explosions",
    bgFrom: "from-saiyan-orange",
    bgTo: "to-red-500",
  },
  {
    id: 3,
    icon: "fa-star",
    title: "Legendary Support",
    description: "24/7 customer service by Z-Fighter experts",
    bgFrom: "from-capsule-yellow",
    bgTo: "to-yellow-500",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map(({ id, icon, title, description, bgFrom, bgTo }) => (
            <div
              key={id}
              className="text-center group cursor-default"
            >
              <div
                className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 ease-in-out bg-gradient-to-br ${bgFrom} ${bgTo}`}
              >
                <i className={`fa-solid ${icon} text-white text-2xl`}></i>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">{title}</h4>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
