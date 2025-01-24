import React, { useContext } from "react";
import christmas from "../assets/christmas.avif";
import { WishlistContext } from "../context/WishlistContext";
import WishlistLayout from "../components/WishlistLayout";

export default function Christmas() {
  const { items } = useContext(WishlistContext);
  const theme = "christmas";
  const title = "Christmas Wishlist";
  const h2ClassName = " text-green-600 shadow-lg shadow-green-800";

  return (
    <WishlistLayout
      theme={theme}
      items={items}
      title={title}
      backgroundImage={christmas}
      h2ClassName={h2ClassName}
    />
  );
}
