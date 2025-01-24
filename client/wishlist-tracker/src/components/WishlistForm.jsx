import React, { useState, useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

export default function WishlistForm({ theme }) {
  const { categories, addItem } = useContext(WishlistContext);

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
    addItem({ ...formData, theme });
    setFormData({
      name: "",
      price: "",
      description: "",
      link: "",
      image: "",
      category: "",
    });
  };

  const themeClasses = {
    christmas: {
      form: "bg-green-800 bg-opacity-50 text-slate-800",
      button: "bg-green-700 text-white hover:bg-white hover:text-green-800",
    },
    birthday: {
      form: "bg-blue-300",
      button: "bg-blue-500 hover:bg-blue-700",
    },
    newyear: {
      form: "bg-orange-200",
      button: "bg-orange-400 hover:bg-orange-500",
    },
    anytime: {
      form: "bg-purple-500",
      button: "bg-purple-700 hover:bg-purple-900",
    },
  };

  return (
    <div className={`rounded-md p-4 ${themeClasses[theme].form}`}>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-slate-700 text-center">
          Add Wishlist Item
        </h2>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-transparent border rounded-lg shadow border-gray-300 hover:border-slate-500 focus:ring-2 focus:ring-slate-200 py-2 px-4 block w-full appearance-none leading-normal"
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
            className="bg-transparent border rounded-lg shadow border-gray-300 hover:border-slate-500 focus:ring-2 focus:ring-slate-200 py-2 px-4 block w-full appearance-none leading-normal"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="bg-transparent border rounded-lg shadow border-gray-300 hover:border-slate-500 focus:ring-2 focus:ring-slate-200 py-2 px-4 block w-full appearance-none leading-normal"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Link</label>
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="bg-transparent border rounded-lg shadow border-gray-300 hover:border-slate-500 focus:ring-2 focus:ring-slate-200 py-2 px-4 block w-full appearance-none leading-normal"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="bg-transparent border rounded-lg shadow border-gray-300 hover:border-slate-500 focus:ring-2 focus:ring-slate-200 py-2 px-4 block w-full appearance-none leading-normal"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="bg-transparent border rounded-lg shadow border-gray-300 hover:border-slate-500 focus:ring-2 focus:ring-slate-200 py-2 px-4 block w-full appearance-none leading-normal"
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
          className={`text-white font-semibold py-2 rounded-lg shadow-md transition duration-300 ease-in-out mb-5 ${themeClasses[theme].button}`}
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
