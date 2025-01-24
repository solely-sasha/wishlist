import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
    navigate(`/search-results?query=${query}`);
    setQuery("");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Search Wishlist</h2>
      <form onSubmit={handleSearch} className="flex items-center space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-64 p-2 border rounded mb-4"
          placeholder="Enter search query"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
        >
          Search
        </button>
      </form>
    </div>
  );
}
