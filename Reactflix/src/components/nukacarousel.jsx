import React from "react";
import Carousel from "nuka-carousel";

function MyCarousel() {
  const carouselData = [
    {
      imageSrc: "./src/assets/images/spidey.jpg",
      link: "/playing", // Add spideye link you want for spideye first image
    },
    {
      imageSrc: "./src/assets/images/transformer.jpg",
      link: "/playing", // Add spideye link you want for spideye second image
    },
    {
      imageSrc: "./src/assets/images/got.jpg",
      link: "/playing", // Add spideye link you want for spideye spideyird image
    },
    {
      imageSrc: "./src/assets/images/ig.jpg",
      link: "/playing", // Add spideye link you want for spideye spideyird image
    },
    {
      imageSrc: "./src/assets/images/d.jpg",
      link: "/playing", // Add spideye link you want for spideye spideyird image
    },
    {
      imageSrc: "./src/assets/images/s.jpg",
      link: "/playing", // Add the link you want for the third image
    },
  ];

  return (
    <Carousel
        autoplay={true}
        wrapAround={true}
        speed={1000}
        slidesToShow={1}
      >
      {carouselData.map((item, index) => (
        <a key={index} href={item.link} className="carousel-item">
          <img
            src={item.imageSrc}
            alt={`Image ${index + 1}`}
            style={{ width: "100%", height: "450px" }} // Set width to 100%
          />
        </a>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
