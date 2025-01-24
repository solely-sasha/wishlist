import React, { useContext } from "react";
import WishlistLayout from "../components/WishlistLayout";
import { WishlistContext } from "../context/WishlistContext";


export default function Anytime() {
  const anytime =
    "https://images.unsplash.com/photo-1533985062386-ef0837f31bc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lzaGluZ3xlbnwwfHwwfHx8MA%3D%3D";
  const theme = "anytime";
  const { items } = useContext(WishlistContext);
  const title = "Anytime Wishlist";
  const h2ClassName =
    "text-3xl bg-white font-bold mb-4 text-purple-600 shadow-2xl mt-4 shadow-purple-600 p-4 inline-block";

  return (
    <WishlistLayout
      theme={theme}
      items={items}
      title={title}
      backgroundImage={anytime}
      h2ClassName={h2ClassName}
    />
  );
}
