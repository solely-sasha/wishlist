import React, { useContext } from "react";
import WishlistForm from "../components/WishlistForm";
import { WishlistContext } from "../context/WishlistContext";
import WishlistItem from "../components/WishlistItem";

export default function NewYear() {
  const { items } = useContext(WishlistContext);
  const theme = "newyear";
  const filteredItems = Array.isArray(items)
    ? items.filter((item) => item.theme === theme)
    : [];

  return (
    <div
      className="container mx-auto p-4 text-center"
      style={{
        backgroundImage: `url("https://media.istockphoto.com/id/1837747771/photo/vintage-gold-and-blue-fireworks-and-bokeh-in-new-year-eve-and-copy-space-abstract-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Vj_JAvQcwOx4_MP0tl4oFxMpeeBiTp6IB-qr-0pQzoI=")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <h2 className="text-3xl font-bold mb-4 bg-orange-200 opacity-80 rounded text-slate-700  shadow-lg shadow-yellow-800  p-4 inline-block">
        New Year Wishlist
      </h2>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/3">
          <WishlistForm theme="newyear" />
        </div>
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {filteredItems.map((item, index) => (
              <WishlistItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
