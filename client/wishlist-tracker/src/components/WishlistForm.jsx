import React, { useState, useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

export default function WishlistForm() {
  const { categories, addItem } = useContext(WishlistContext);
  console.log("Categories in WishlistForm:", categories); // Add this line

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    link: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    setFormData({
      name: "",
      price: "",
      description: "",
      link: "",
      image: "",
      category: "",
    });
  };

  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-500 rounded-md opacity-80 h-screen flex justify-center items-center">
      <div className="py-8 px-6 max-w-md bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Add Wishlist Item
          </h2>
          <div className="mb-5">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border rounded-lg shadow border-gray-300 hover:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="bg-transparent border rounded-lg shadow border-gray-300 hover:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="bg-transparent border rounded-lg shadow border-gray-300 hover:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 mb-2">Link</label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="bg-transparent border rounded-lg shadow border-gray-300 hover:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 mb-2">Image URL</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="bg-transparent border rounded-lg shadow border-gray-300 hover:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="bg-transparent border rounded-lg shadow border-gray-300 hover:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal"
            >
              <option value="">Select Category</option>
              {Array.isArray(categories) &&
                categories.map((cat) => (
                  <option key={cat._id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white  font-semibold py-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-700 transition duration-300 ease-in-out mb-5"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}
