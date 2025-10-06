import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Card from "../FeaturedProducts/Card";

const Product = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const searchedProduct = term
    ? data.filter((item) => item.name.trim().toLowerCase().includes(term))
    : data;
  return (
    <div className="min-h-[70vh] mx-auto max-w-6xl py-6">
      <div className="flex justify-between p-2">
        <h1 className="text-2xl font-bold pb-4">All Products</h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search product here"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 p-6 md:grid-cols-3 gap-6">
        {searchedProduct.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
