import React, { useEffect } from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "../components/navbar";
import Carousel from "../components/nukacarousel";
import TabbedHome from "../components/TabbedHome";
import FlexWrap from "../components/multiplecard";
import Footer from "../components/footer";

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
      {/* Slide 1 */}
      {/* ... Slide 1 content ... */}

      {/* Slide 2 */}
      {/* ... Slide 2 content ... */}

      {/* Slide 3 */}
      {/* ... Slide 3 content ... */}

      {/* Slide 4 */}
      {/* ... Slide 4 content ... */}
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
      style={{ backgroundColor: "#212016" }}
      id="slider4-2j"
    >
      <Navbar />
      <Carousel
        autoplay={true}
        wrapAround={true}
        speed={1000}
        slidesToShow={1}
      ></Carousel>
      <h1 style={{fontSize:"40px", marginLeft:"30px", color:"#fff", }}>| Trending Movies</h1>
     <TabbedHome />
     <FlexWrap />
      <Footer />
    </section>
  );
};

export default Home;
