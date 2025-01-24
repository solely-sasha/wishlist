import React, { useContext } from "react";
import WishlistLayout from "../components/WishlistLayout";
import { WishlistContext } from "../context/WishlistContext";
import birthday from "../assets/birthday.jpg";

export default function Birthday() {
  const theme = "birthday";
  const { items } = useContext(WishlistContext);
  const title = "Birthday Wishlist";
  const h2ClassName =
    "text-3xl bg-white font-bold mb-4 text-blue-600 shadow-2xl mt-4 shadow-blue-600 p-4 inline-block";

  return (
    <WishlistLayout
      theme={theme}
      items={items}
      title={title}
      backgroundImage={birthday}
      h2ClassName={h2ClassName}
    />
  );
}
