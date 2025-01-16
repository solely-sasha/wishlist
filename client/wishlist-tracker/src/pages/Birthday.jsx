import React, { useContext } from "react";
import WishlistForm from "../components/WishlistForm";
import WishlistItem from "../components/WishlistItem";
import { WishlistContext } from "../context/WishlistContext";
import birthday from "../assets/birthday.jpg";

export default function Birthday() {
  const { items } = useContext(WishlistContext);

  return (
    <div
      className="container mx-auto text-center p-4"
      style={{
        backgroundImage: `url(${birthday})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <h2 className="text-3xl bg-white font-bold mb-4 text-blue-600 shadow-2xl mt-4 shadow-blue-600 p-4 inline-block">
        Birthday Wishlist
      </h2>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/3">
          <WishlistForm />
        </div>
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <WishlistItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
