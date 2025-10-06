import React, { useEffect, useState } from "react";
import { getDataLs, removieDataLs } from "../../Utility/LS";
import { useLoaderData } from "react-router";
import SingleCart from "./SingleCart";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    const storedId = getDataLs();
    const covertedStoredId = storedId.map((id) => parseInt(id));
    const filteredData = data.filter((item) =>
      covertedStoredId.includes(item.id)
    );
    setCart(filteredData);
  }, []);
  const handleRemove = (id) => {
    MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
    removieDataLs(id);

    setCart((prev) => prev.filter((p) => p.id !== id));
  };
  const handleSort = (type) => {
    setSort(type);
    if (type === "asc") {
      const sortedList = [...cart].sort((a, b) => a.price - b.price);
      setCart(sortedList);
    } else if (type === "dsc") {
      const sortedList = [...cart].sort((a, b) => b.price - a.price);
      setCart(sortedList);
    }
  };
  return (
    <div className="mx-auto max-w-6xl my-6 bg-gray-50 p-10 rounded-2xl">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold p-4">Cart</h1>
        <label className="w-sm">
          <select
            className="select select-border"
            value={sort}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="none">Sort By Price</option>
            <option value="asc">Low-&gt;High</option>
            <option value="dsc">High-&gt;Low</option>
          </select>
        </label>
        <h1 className="text-2xl font-semibold p-4">
          Total items : {cart.length}
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        {cart.map((product) => (
          <SingleCart product={product} handleRemove={handleRemove} />
        ))}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Cart;
