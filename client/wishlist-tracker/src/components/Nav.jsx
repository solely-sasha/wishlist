import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link
            to="/"
            className="block p-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/christmas"
            className="block p-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Christmas Wishlist
          </Link>
        </li>
        <li>
          <Link
            to="/birthday"
            className="block p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Birthday Wishlist
          </Link>
        </li>
        <li>
          <Link
            to="/wedding"
            className="block p-2 bg-pink-500 text-white rounded hover:bg-pink-700"
          >
            Wedding Wishlist
          </Link>
        </li>
        <li>
          <Link
            to="/anytime"
            className="block p-2 bg-purple-500 text-white rounded hover:bg-purple-700"
          >
            Any Time Wishlist
          </Link>
        </li>
      </ul>
    </nav>
  );
}
