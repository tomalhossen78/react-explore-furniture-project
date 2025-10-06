import React from "react";
import FeaturedProducts from "../../Componets/FeaturedProducts/FeaturedProducts";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="min-h-[70vh] mx-auto max-w-6xl py-6">
      <FeaturedProducts data={data} />
    </div>
  );
};

export default Home;
