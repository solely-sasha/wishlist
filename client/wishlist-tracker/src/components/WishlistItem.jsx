import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function WishlistItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-blue-500 hover:underline"
      >
        {isOpen ? "Hide Details" : "Show Details"}
      </button>
      {isOpen && (
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
      )}
    </div>
  );
}
