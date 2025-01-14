import React from "react";
import christmas from "../assets/christmas.avif";

export default function Christmas() {
  return (
    <div
      className="container mx-auto p-4 text-center"
      style={{
        backgroundImage: `url(${christmas})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <h2 className="text-3xl font-bold mb-4 text-green-600  shadow-lg shadow-slate-800  p-4 inline-block">
        Christmas Wishlist
      </h2>

      {/* Add more content and functionality as needed */}
    </div>
  );
}
