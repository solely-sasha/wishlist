const express = require("express");
const categoriesRouter = express.Router();
const { v4: uuidv4 } = require("uuid");
const { categories } = require("../data");

// GET all categories
categoriesRouter.get("/", (req, res) => {
  res.send(categories);
});

// GET category by ID
categoriesRouter.get("/:id", (req, res) => {
  const id = req.params.id;

  const category = categories.find((category) => category._id === id);
  if (category) {
    res.send(category);
  } else {
    res.status(404).send({ message: "Category not found" });
  }
});

// POST a new category
categoriesRouter.post("/", (req, res) => {
  const newCategory = req.body;
  newCategory._id = uuidv4();
  categories.push(newCategory);
  res.status(200).send({ message: "category added", category: newCategory });
});

// PUT update a category
categoriesRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  const updatedCategory = req.body;
  const index = categories.findIndex((category) => category._id === id);

  if (index !== -1) {
    categories[index] = updatedCategory;
    res.send({ message: "Category updated", category: updatedCategory });
  } else {
    res.status(404).send({ message: "Category not found" });
  }
});

// DELETE a category
categoriesRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = categories.findIndex((category) => category._id === id);

  if (index !== -1) {
    categories.splice(index, 1);
    res.send({ message: "Category deleted" });
  } else {
    res.status(404).send({ message: "Category not found" });
  }
});

module.exports = categoriesRouter;
