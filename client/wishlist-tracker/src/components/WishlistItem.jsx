import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";

export default function WishlistItem({ item, theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const { deleteItem } = useContext(WishlistContext);

  const handleDelete = () => {
    deleteItem(item._id);
  };
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h3 className="text-lg font-bold mb-2 text-slate-800">
        {item.name} -
        <span>
          {" "}
          <Link
            to={`/categories/${item.category}`}
            className=" text-sm text-slate-700 hover:text-blue-700"
          >
            {item.category}
          </Link>{" "}
        </span>
      </h3>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-700 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hover:bg-gray-900 rounded"
      >
        {isOpen ? "Hide Details" : "Show Details"}
      </button>
      <button
        onClick={handleDelete}
        className="relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-red-500 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:bg-red-700 rounded mt-2 ml-2"
      >
        Delete
      </button>
      {isOpen && (
        <>
          <div>
            <p className="mb-4">{item.description}</p>
            <p className="mb-4">${item.price}</p>
            {item.link && (
              <Link
                to={item.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Now
              </Link>
            )}
            {item.image && (
              <img src={item.image} alt={item.name} className="mt-4" />
            )}
          </div>
        </>
      )}
    </div>
  );
}
