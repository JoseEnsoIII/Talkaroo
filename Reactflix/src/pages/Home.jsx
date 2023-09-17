import React, { useEffect } from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "../Header/navbar";
import Carousel from "../components/nukacarousel";
import TabbedHome from "../components/TabbedHome";
import FlexWrap from "../components/multiplecard";
import Footer from '../Footer/footer';

const MySlider = () => {
  // Renamed the locally defined Slider component
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <SlickSlider {...settings}>
      
    </SlickSlider>
  );
};

const Home = () => {
  useEffect(() => {
    document.title = "ReactFlix | Watch Movies";
  }, []);

  return (
    <section
      className="slider4 mbr-embla cid-tEzwvrEiry"
      style={{ backgroundColor: "#fff" }}
      id="slider4-2j"
    >
      <Navbar />
      <Carousel
        autoplay={true}
        wrapAround={true}
        speed={1000}
        slidesToShow={1}
      ></Carousel>
     <TabbedHome />
     <FlexWrap />
      <Footer />
    </section>
  );
};

export default Home;
