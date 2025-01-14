const express = require("express");
const { wishlist } = require("../data");
const wishlistRouter = express.Router();

// GET all wishlist items
wishlistRouter.get("/", (req, res) => {
  res.send(wishlist);
});

// GET wishlist item by ID
wishlistRouter.get("/item/:id", (req, res) => {
  const id = req.params.id;

  const item = wishlist.find((item) => item._id === id);
  if (item) {
    res.send(item);
  } else {
    res.status(404).send({ message: "item not found" });
  }
});

// POST a new wishlist item
wishlistRouter.post("/item", (req, res) => {
  const newItem = req.body;
  newItem._id = uuidv4();
  wishlist.push(newItem);
});
// PUT update a wishlist item
wishlistRouter.put("/item/:id", (req, res) => {
  const id = req.params.id;
  const updatedWishlist = req.body;
  const index = wishlist.findIndex((item) => item._id === id);

  if (index !== -1) {
    const updatedItem = Object.assign(wishlist[index], updatedWishlist);
    res.send({ message: "Item updated", item: updatedItem });
  } else {
    res.status(404).send({ message: "Item not found" });
  }
  // wishlist[index] = { ...wishlist[index], ...updatedItem };
  // res.send({ message: "item updated" }, wishlist[index]);
});
// DELETE a wishlist item
wishlistRouter.delete("/item/:id", (req, res) => {
  const id = req.params.id;
  const index = wishlist.findIndex((item) => item._id === id);

  if (index !== -1) {
    wishlist.splice(index, 1);
    res.send({ message: "item deleted" });
  } else {
    res.status(404).send({ message: "item not found" });
  }
});

module.exports = wishlistRouter;
