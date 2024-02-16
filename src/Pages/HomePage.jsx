import React from "react";
import Carousel from "../components/Carousel";
import vmrural from "../assets/carousel/vmrural.jpeg";
import vmsportif from "../assets/carousel/vmsportif.jpeg";

const HomePage = () => {
  const images = [
    { src: vmrural, alt: "Image  1" },
    { src: vmsportif, alt: "Image  2" },
  ];

  return (
    <div>
      <h2>Home page</h2>
      <Carousel images={images} />
    </div>
  );
};

export default HomePage;
