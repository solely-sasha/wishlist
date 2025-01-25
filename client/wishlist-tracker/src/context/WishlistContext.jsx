import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data);
        console.log("Fetched categories:", response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const fetchWishlist = async () => {
    try {
      const response = await axios.get("/api/wishlist");
      setItems(response.data);
      // console.log("Fetched wishlist items:", response.data);
    } catch (error) {
      console.error("Error fetching wishlist items:", error);
    }
  };

  const addItem = async (item) => {
    try {
      const response = await axios.post("/api/wishlist/item", item);
      setItems((prevItems) => [...prevItems, response.data]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
    fetchWishlist();
  };

  const updateItem = async (itemId, updates) => {
    try {
      const response = await axios.put(`/api/wishlist/item/${itemId}`, updates);
      setItems((prevItems) => {
        const updatedItems = prevItems.map((item) =>
          item._id !== itemId ? item : { ...item, ...updates }
        );
        console.log(response);
        return updatedItems;
      });
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const deleteItem = async (id) => {
    // console.log("Request to delete item with ID:", id);
    try {
      await axios.delete(`/api/wishlist/item/${id}`);
      setItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } catch (error) {
      console.error(
        "Error deleting item:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

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
  };

  useEffect(() => {
    fetchWishlist();
  }, []);
  return (
    <WishlistContext.Provider
      value={{
        categories,
        items,
        filteredItems,
        addItem,
        updateItem,
        deleteItem,
        themeClasses,
        setSelectedCategory,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
