import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getDataLs, setDataLs } from "../../Utility/LS";

const ProductDetails = () => {
  const handleCart = (id) => {
    setDataLs(id);
  };
  console.log(getDataLs());
  const navigate = useNavigate();
  const state = useLocation().state;
  const { category, description, image, name, price, material, id } = state;
  return (
    <div className="flex items-center justify-center p-10">
      <div className="card bg-base-100 w-96 shadow-md">
        <figure>
          <div className="object-cover h-[270px]">
            <img className="" src={image} alt="Shoes" />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">${price}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{material}</div>
            <div className="badge badge-outline">category : {category}</div>
            <div className="flex justify-between items-center gap-2 w-full">
              <button
                onClick={() => handleCart(id)}
                className="btn btn-outline btn-warning w-1/2"
              >
                Add to Cart
              </button>
              <button
                onClick={() => navigate(-1)}
                className="btn btn-outline btn-secondary w-1/2"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
