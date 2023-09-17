import React from "react";
import Carousel from "nuka-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


function MyCarousel() {
  const carouselData = [
    {
      imageSrc: "./src/assets/images/spidey.jpg",
      link: "/playing",
      text: "The Flash",
      description: "Barry Allen, aka The Flash, returns in an action-packed adventure. Can he overcome his greatest challenge yet and save Central City from impending doom?"
    },
    {
      imageSrc: "./src/assets/images/transformer.jpg",
      link: "/playing",
      text: "Transformer: Rise of The Beast",
      description: "Join the Autobots and Decepticons in their latest battle for Earth. Explosive action, epic showdowns, and new robotic heroes await."
    },
    {
      imageSrc: "./src/assets/images/got.jpg",
      link: "/playing",
      text: "Guardians of the Galaxy Vol. 3",
      description: "Star-Lord and his crew face new challenges and old foes in this cosmic sequel. Prepare for a galactic adventure like no other."
    },
    {
      imageSrc: "./src/assets/images/ig.jpg",
      link: "/playing",
      text: "Indiana Jones and the Dial of Destiny",
      description: "Indiana Jones embarks on another thrilling quest in search of a mystical artifact. Ancient mysteries and heart-pounding excitement await."
    },
    {
      imageSrc: "./src/assets/images/d.jpg",
      link: "/playing",
      text: "The Last Voyage of the Demeter",
      description: "Witness the horrifying journey of the Demeter, a ship carrying Dracula to England. Can the crew survive the terror that lurks in the darkness?"
    },
    {
      imageSrc: "./src/assets/images/s.jpg",
      link: "/playing",
      text: "Spider-Man: Across the Spider-Verse",
      description: "Spider-Man teams up with other Spideys from different dimensions to save the multiverse. Swing into action with your friendly neighborhood hero."
    },
  ];

  return (
    <Carousel
    autoplay={true}
    wrapAround={true}
    speed={1000}
    slidesToShow={1}
    style={{
      height: "600px", // Set the height to 600px
      backgroundColor: "#212016", // Set the background color
    }}
    renderCenterLeftControls={({ previousSlide }) => (
      <button
        onClick={previousSlide}
        className="carousel-button"
        style={{ left: "50px", background: "transparent", border: "none", color: "black" }}
      >
        <FontAwesomeIcon icon={faArrowLeft} size="2x" color="black" style={{ fontSize: "40px" }} />
      </button>
    )}
    renderCenterRightControls={({ nextSlide }) => (
      <button
        onClick={nextSlide}
        className="carousel-button"
        style={{ right: "50px", background: "transparent", border: "none", color: "black" }}
      >
        <FontAwesomeIcon icon={faArrowRight} size="2x" color="black" style={{ fontSize: "40px" }} />
      </button>
    )}
  >
    {carouselData.map((item, index) => (
      <a key={index} href={item.link} className="carousel-item">
        <div style={{ position: "relative" }}>
          <img
            src={item.imageSrc}
            alt={`Image ${index + 1}`}
            style={{ width: "100%", height: "550px" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: "5px 10px",
              fontSize: "50px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            <div>{item.text}</div>
            <div style={{ fontSize: "20px" }}>{item.description}</div>
          </div>
        </div>
      </a>
    ))}
  </Carousel>
  );
}

export default MyCarousel;
