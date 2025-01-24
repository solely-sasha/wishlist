import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";

export default function CategorySearch() {
  const { categories, setSelectedCategory } = useContext(WishlistContext);
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    navigate(`/categories/${e.target.value}`);
    e.target.value = "";
  };

  return (
    <div className="mb-4">
      <select
        className="w-full p-2 border rounded"
        onChange={handleCategoryChange}
      >
        <option value="">Search By Category</option>

        {categories.map((category) => (
          <option key={category._id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
