import React, { useState } from "react";
import axios from "axios";

const Apis = () => {
  const [product, setProduct] = useState([]);

  const handleApi = () => {
    let apiIs = "https://fakestoreapi.com/products";
    axios
      .get(apiIs)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5">
      <button
        onClick={handleApi}
        className="px-4 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition-colors mb-6"
      >
        Get Products
      </button>

      {product.length > 0 ? (
        <ul className="space-y-3">
          {product.map((item) => (
            <li
              key={item.id}
              className="border p-3 rounded-md shadow hover:shadow-md transition-shadow bg-white"
            >
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-gray-600 mt-1">Price: ${item.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h1 className="text-center text-gray-500 text-xl">Click "Get Products" to load data</h1>
      )}
    </div>
  );
};

export default Apis;

