import React from "react";
import { Link } from "react-router";
import { setDataLs } from "../../Utility/LS";
import { ToastContainer } from "react-toastify";

const Card = ({ product }) => {
  const { category, description, image, name, price, material, id } = product;
  const handleCart = (id) => {
    setDataLs(id);
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-md">
        <figure>
          <div className="object-cover h-[230px]">
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
              <Link
                to={`/products/${id}`}
                state={product}
                className="btn btn-success w-1/2"
              >
                View Details
              </Link>
              <button
                onClick={() => handleCart(id)}
                className="btn btn-outline w-1/2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Card;
