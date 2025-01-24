import React from "react";
import WishlistForm from "../components/WishlistForm";
import WishlistItem from "../components/WishlistItem";

const WishlistLayout = ({
  theme,
  items,
  title,
  backgroundImage,
  h2ClassName,
}) => {
  const filteredItems = Array.isArray(items)
    ? items.filter((item) => item.theme === theme)
    : [];

  return (
    <div
      className="container mx-auto p-4 text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <h2 className={`${h2ClassName} text-3xl font-bold mb-4 p-4 inline-block`}>
        {title}
      </h2>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/3">
          <WishlistForm theme={theme} />
        </div>
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {filteredItems.map((item, index) => (
              <WishlistItem key={index} item={item} theme={theme} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistLayout;
