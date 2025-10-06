import React from "react";

const SingleCart = ({ product, handleRemove }) => {
  const { category, description, image, name, price, material, id } = product;
  return (
    <div>
      <div className="bg-base-100 shadow-md flex overflow-hidden rounded-2xl border-1 border-gray-200">
        <figure className="flex-1">
          <div className="object-cover h-[100px]">
            <img className="" src={image} alt="Shoes" />
          </div>
        </figure>
        <div className="card-body flex-2">
          <h2 className="card-title text-2xl m-0">{name}</h2>
          <p>{description}</p>
          <div className="badge badge-secondary text-xl p-4">
            Price : ${price}
          </div>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">{material}</div>
            <div className="badge badge-outline">category : {category}</div>

            <button
              onClick={() => handleRemove(id)}
              className="btn btn-outline w-1/2"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
