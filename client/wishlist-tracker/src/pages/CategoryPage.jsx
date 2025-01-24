import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
import WishlistItem from "../components/WishlistItem";

export default function CategoryPage() {
  const { category } = useParams();
  const { items } = useContext(WishlistContext);

  const filteredItems = items.filter((item) => item.category === category);

  return (
    <div className="container mx-auto text-center p-4">
      <h2 className="text-2xl font-bold mb-4">Category: {category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <WishlistItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
