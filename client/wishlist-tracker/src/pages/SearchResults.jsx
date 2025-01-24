import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import WishlistItem from "../components/WishlistItem";
import { WishlistContext } from "../context/WishlistContext";
import Search from "./Search";

export default function SearchResults() {
  const location = useLocation();
  const { items } = useContext(WishlistContext);
  const searchQuery = new URLSearchParams(location.search).get("query");

  console.log("Search query:", searchQuery);
  console.log("Items:", items);

  if (!searchQuery) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">No search query provided</h2>
      </div>
    );
  }

  const filteredItems = Array.isArray(items)
    ? items.filter(
        (item) =>
          (item.name &&
            item.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (item.description &&
            item.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  console.log("Filtered items:", filteredItems);

  return (
    <>
      <Search />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">
          Search Results for "{searchQuery}"
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <WishlistItem key={index} item={item} />
            ))
          ) : (
            <p>No items found</p>
          )}
        </div>
      </div>
    </>
  );
}
