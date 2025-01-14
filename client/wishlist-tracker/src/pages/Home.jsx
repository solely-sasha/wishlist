import React from "react";
import { Link } from "react-router-dom";
import wishing from "../assets/wishing.webp";

export default function Home() {
  return (
    <div
      className="container mx-auto p-4"
      style={{
        backgroundImage: `url(${wishing})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="h-64 md:h-72 lg:h-96 flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-4 md:p-8 rounded">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">
            Welcome to the Wishlist Tracker!
          </h2>
          <p className="text-white mb-4 md:mb-6 text-center">
            Keep track of all your wishlists in one place.
            <br />
            Share with friends and family and everyone gets what they want 😉
          </p>
          <Link
            to="/anytime"
            className="bg-purple-500 flex justify-center text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded p-4">
          <h3 className="text-xl font-bold mb-2">Christmas Wishlist</h3>
          <p className="mb-4">All the gifts you want for Christmas.</p>
          <Link to="/christmas" className="text-blue-500 hover:underline">
            View Wishlist
          </Link>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h3 className="text-xl font-bold mb-2">Birthday Wishlist</h3>
          <p className="mb-4">Your birthday gift ideas.</p>
          <Link to="/birthday" className="text-blue-500 hover:underline">
            View Wishlist
          </Link>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h3 className="text-xl font-bold mb-2">Wedding Wishlist</h3>
          <p className="mb-4">Gifts for your special day.</p>
          <Link to="/wedding" className="text-blue-500 hover:underline">
            View Wishlist
          </Link>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h3 className="text-xl font-bold mb-2">Any Time Wishlist</h3>
          <p className="mb-4">Gifts for any occasion.</p>
          <Link to="/anytime" className="text-blue-500 hover:underline">
            View Wishlist
          </Link>
        </div>
      </div>
    </div>
  );
}
