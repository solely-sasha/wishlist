const express = require("express");
const morgan = require("morgan");
const wishlistRouter = require("./Routes/wishlistRouter");
const categoriesRouter = require("./Routes/categoriesRouter");
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/wishlist", wishlistRouter);
app.use("/api/categories", categoriesRouter);

app.listen("4000", () => {
  console.log("Server is running on port 4000");
});
