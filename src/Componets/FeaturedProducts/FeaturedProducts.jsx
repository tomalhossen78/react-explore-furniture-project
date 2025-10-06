import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router";

const FeaturedProducts = ({ data }) => {
  const sliceData = data.slice(0, 9);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between p-4">
        <h1 className="text-2xl font-bold pb-4">Featured Products</h1>
        <button onClick={() => navigate("/products")} className="btn">
          All Product
        </button>
      </div>
      <div className="grid grid-cols-1 p-6 md:grid-cols-3 gap-6">
        {sliceData.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
