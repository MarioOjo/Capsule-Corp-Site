import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Saiyan Battle Armor",
    powerLevel: "9000+",
    description: "Elite Saiyan combat gear with energy absorption technology",
    price: "299",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/2395797406-0b1495743d04eddc3fd5.png",
  },
  {
    id: 2,
    name: "Gravity Chamber",
    powerLevel: "50000+",
    description: "Train under extreme gravity conditions up to 500x Earth gravity",
    price: "15999",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/43e28df86d-b72d92b389d88e498710.png",
  },
  {
    id: 3,
    name: "Elite Scouter",
    powerLevel: "1M+",
    description: "Advanced power level detection with combat analysis",
    price: "1299",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/2d967b598f-8cc6444dbec152dabcfa.png",
  },
];

const ProductsSection = () => {
  return (
    <section
      id="products"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-saiyan font-bold text-gray-800 mb-4">Featured Battle Gear</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Equipment tested by the strongest warriors in the universe
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
