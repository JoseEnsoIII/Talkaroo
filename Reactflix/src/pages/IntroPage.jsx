import React from "react";
import Navbar from "../components/navbar";
import styled from "styled-components";
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from '../components/footer';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 800px;
  border: 1px solid #000;
  border-radius: 25px;
  margin: 40px auto; 
  backgroundColor: '#fff',
  font-family: 'Montserrat', sans-serif;

  /* Media Query for screens with width less than or equal to 600px */
  @media (max-width: 600px) {
    width: 400px;
    height: 310px;
  }

  /* Media Query for screens with width less than or equal to 400px */
  @media (max-width: 400px) {
    height: 320px;
    width:350px; 
  }
`;

const ContentSection = styled.section`
  text-align: center;
  height: 1200px; /* Set the section height */

  /* Media Query for screens with width less than or equal to 600px */
  @media (max-width: 600px) {
    height: auto; /* Reset height for smaller screens */
    padding: 20px; /* Add some padding for better readability */
  }

  /* Media Query for screens with width less than or equal to 400px */
  @media (max-width: 400px) {
    height: auto; /* Reset height for smaller screens */
    padding: 10px; /* Adjust padding for better readability */
  }
`;

const iconStyle1 = {
  color: "white",
  fontSize: "24px",
  marginRight: "10px",
  border: "1px solid blue",
  padding: "5px",
  borderRadius: "0%",
  width: "50px",
  backgroundColor: "blue",
};
const iconStyle2 = {
  color: "white",
  fontSize: "24px",
  marginRight: "10px",
  border: "1px solid white",
  padding: "5px",
  width: "50px",
  borderRadius: "0%",
  backgroundColor: "black",
};
const iconStyle3 = {
  color: "white",
  fontSize: "24px",
  marginRight: "10px",
  border: "1px solid blue",
  padding: "5px",
  width: "50px",
  borderRadius: "0%",
  backgroundColor: "blue",
};
const iconStyle4 = {
  color: "white",
  fontSize: "24px",
  marginRight: "10px",
  border: "1px solid white",
  width: "50px",
  padding: "5px",
  borderRadius: "0%",
  backgroundColor: "blue",
};

const StyledLink = styled(Link)`
  margin: 10px;
  height: 50px;
  color: black;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  background-color: yellow;
`;
const CenteredContent = styled.div`
  margin-top: 30px;
  color: white;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  width: 800px;
  margin: 0 auto; /* Horizontally center the content */

  /* Media Query for screens with width less than or equal to 600px */
  @media (max-width: 600px) {
    width: 90%; 
  }
`;

const IntroPage = () => {
  return (
    <section style={{ backgroundColor: "#212016", height: "780px" }}>
      <Navbar />
      <PageWrapper style={{ backgroundColor: "black" }}>
        <ContentSection>
          <div>
            <h1 style={{ color: "white" }}><strong>ReactFlix</strong></h1>
            <p style={{ color: "white" }}>
              Please help us by sharing this site with your friends. Thanks!
            </p>
            <p style={{ color: "white" }}>Send Request any Movies Using These our Social Media Account</p>
            <a
              href="https://www.facebook.com/your_facebook_page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook style={iconStyle3} />
            </a>
            <a
              href="https://twitter.com/your_twitter_username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter style={iconStyle1} />
            </a>
            <a
              href="https://www.instagram.com/your_instagram_username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={iconStyle2} />
            </a>

            <a
              href="https://www.facebook.com/your_facebook_page"
              style={{
                height: "50px",
                color: "white",
                textAlign: "center",
                fontFamily: "Montserrat, sans-serif",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={iconStyle4} />
            </a>
            <a
              href="https://www.facebook.com/your_facebook_page"
              style={{
                height: "50px",
                color: "white",
                textAlign: "center",
                fontFamily: "Montserrat, sans-serif",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={iconStyle4} />
            </a>
            <br />
            <StyledLink to="/Home">
              Browse All Movie,Series and Anime Here
            </StyledLink>
          </div>
        </ContentSection>
      </PageWrapper>
      <CenteredContent>
        <p>
          Looking for something fun to watch now or later today? Too many
          suspicious free movie sites on the internet that you don’t know which
          one to trust? Stop looking as <strong>ReactFlix</strong> is your stop from now on.
          Here, you can search for your movie and watch it with only one click -
          No need to register and log in, No need to pay for anything, No need
          to bear unnecessary and harmful ads or pop-ups. Only regularly updated
          and full HD and high-quality movies are on <strong>ReactFlix</strong> free movies
          site! Not only that, but this website is also the best place to watch
          free movies on mobile as well! When you go on to the mobile web
          version of this website, you don’t have to constantly close the ads
          and pop-ups. Your movies are just 1 click away with multiple subtitles
          and features on the media player! Perfect for binge-watcher!
        </p>
      </CenteredContent>
      <Footer />
    </section>
  );
};

export default IntroPage;
