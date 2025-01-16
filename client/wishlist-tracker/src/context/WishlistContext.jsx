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
        console.log("Fetched categories:", response.data); // Add this line
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  return (
    <WishlistContext.Provider
      value={{
        categories,
        items: filteredItems,
        addItem,
        setSelectedCategory,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
