import React from "react";
import { Link } from "react-router-dom";
import CategorySearch from "./CategorySearch";

export default function Nav() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="block p-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/christmas"
            className="block p-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Christmas Wishlist
          </Link>
          <Link
            to="/birthday"
            className="block p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Birthday Wishlist
          </Link>
        </div>
        <div className="mt-4 md:mt-0">
          <CategorySearch />
        </div>
      </div>
    </nav>
  );
}
