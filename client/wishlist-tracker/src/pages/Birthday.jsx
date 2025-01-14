import React from "react";
import birthday from "../assets/birthday.jpg";

export default function Birthday() {
  return (
    <div
      className="container mx-auto p-4 text-center"
      style={{
        backgroundImage: `url(${birthday})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      Birthday
    </div>
  );
}
