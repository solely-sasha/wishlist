import React from "react";
import { Link } from "react-router-dom";
import wishing from "../assets/wishing.webp";

const getFeaturedList = () => {
  const month = new Date().getMonth();
  if (month === 11) {
    return {
      name: "Christmas Wishlist",
      path: "/christmas",
      image:
        "https://media.istockphoto.com/id/2168140255/photo/christmas-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=BeFm7CT5M5evJsO12fC_eQ35ZaydewMpgyGVCcURA70=",
    };
  } else if (month === 0) {
    return {
      name: "New Year Wishlist",
      path: "/newyear",
      image:
        "https://media.istockphoto.com/id/1837747771/photo/vintage-gold-and-blue-fireworks-and-bokeh-in-new-year-eve-and-copy-space-abstract-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Vj_JAvQcwOx4_MP0tl4oFxMpeeBiTp6IB-qr-0pQzoI=",
    };
  } else if (month === 6 || month === 7 || month === 8) {
    return {
      name: "Summer Wishlist",
      path: "/summer",
      image:
        "https://images.unsplash.com/photo-1561571994-3c61c554181a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxzdW1tZXJ8ZW58MHx8MHx8fDA%3D",
    };
  } else if (month === 9) {
    return {
      name: "Halloween Wishlist",
      path: "/halloween",
      image:
        "https://media.istockphoto.com/id/2166855991/photo/halloween-scene-pumpkin-on-wooden-table-in-graveyard-at-moonlight-contain-unrecognizable.webp?a=1&b=1&s=612x612&w=0&k=20&c=b3Y8j9U6rYPLxBHls8Vkz6LFzWbRZMn9apyIVBPEHc0=",
    };
  } else if (month === 4) {
    return {
      name: "Mother's Day Wishlist",
      path: "/mothersday",
      image:
        "https://images.unsplash.com/photo-1457153797314-80e6a376a555?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW90aGVyJ3MlMjBkYXl8ZW58MHx8MHx8fDA%3D",
    };
  } else if (month === 5) {
    return {
      name: "Father's Day Wishlist",
      path: "/fathersday",
      image:
        "https://media.istockphoto.com/id/1492368317/photo/stylish-fathers-day-concept-top-view-shot-of-coffee-cup-necktie-bow-tie-accessories-giftbox.webp?a=1&b=1&s=612x612&w=0&k=20&c=wqeUruj0zvftEWb_kpFFHVFqMsDRfVf4Wy2nXtw4TSE=",
    };
  } else if (month === 1) {
    return {
      name: "Valentine's Wishlist",
      path: "/valentines",
      image:
        "https://media.istockphoto.com/id/1861170037/photo/hearts-for-love.webp?a=1&b=1&s=612x612&w=0&k=20&c=4FwUasc9ZjD9MN_T7WGCk6UPspRpbdqlY1K9I3pFw8k=",
    };
  } else {
    return {
      name: "Birthday Wishlist",
      path: "/birthday",
      image:
        "https://media.istockphoto.com/id/1925708330/photo/party-cupcakes-in-hats-in-a-row.webp?a=1&b=1&s=612x612&w=0&k=20&c=B8q3mwEnEIEo4O2juoPKLmcFN86xXcsz57Vso67p83k=",
    };
  }
};
export default function Home() {
  const featuredList = getFeaturedList();
  return (
    <div
      className="container mx-auto p-4"
      style={{
        backgroundImage: `url(${wishing})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="h-64 md:h-72 lg:h-96 flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-4 md:p-8 rounded">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">
            Welcome to the Wishlist Tracker!
          </h2>
          <p className="text-white mb-4 md:mb-6 text-center">
            Keep track of all your wishlists in one place.
            <br />
            Share with friends and family and everyone gets what they want 😉
          </p>
          <Link
            to="/anytime"
            className="bg-purple-500 flex justify-center text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 ">
        <div className="bg-white background shadow-md rounded p-4 h-64 flex flex-col justify-between ">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2">{featuredList.name} </h3>

            <p className="mb-4">
              Check out our featured wishlist for this season.
            </p>
            <div className="relative w-full h-40">
              <img
                src={featuredList.image}
                className="w-full h-full object-cover"
              />

              <Link
                to={featuredList.path}
                className=" absolute top-0 left-0 w-full h-full flex items-center justify-center text-white dropshadow-lg bg-black bg-opacity-50
                text-2xl font-semibold font-mono hover:underline "
              >
                View Wishlist
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded p-4 h-64 flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-2">Recent Activity</h3>
          <p className="mb-4">See your recently added items</p>
          <Link to="/recent" className="text-blue-500 hover:underline">
            View Recent Activity
          </Link>
        </div>
        <div className="bg-white shadow-md rounded p-4 h-64 flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-2">Search Wishlist</h3>
          <p className="mb-4">Find specific items or wishlists quickly</p>
          <Link
            to="/search"
            className=" flex items-center justify-center text-white dropshadow-lg bg-blue-900 bg-opacity-50
                      text-2xl font-semibold font-mono hover:bg-slate-400 hover:text-slate-700
   px-4 py-2 rounded"
          >
            Search Now
          </Link>
        </div>
        <div className="bg-white shadow-md rounded p-4 h-64 flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-2">Any Time Wishlist</h3>
          <p className="mb-4">Gifts for any occasion.</p>
          <Link to="/anytime" className="text-blue-500 hover:underline">
            View Wishlist
          </Link>
        </div>
      </div>
    </div>
  );
}
