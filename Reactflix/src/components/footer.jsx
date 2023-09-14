import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #212016;
  color: #fff;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100px;

  /* Media Query for screens with width less than or equal to 600px */
  @media (max-width: 600px) {
    min-height: 150px; /* Adjust the height as needed */
  }

  /* Media Query for screens with width less than or equal to 400px */
  @media (max-width: 400px) {
    min-height: 200px; /* Adjust the height as needed */
  }
`;

const FooterText = styled.p`
  margin: 30px auto 0;
  font-size: 14px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  width: 800px;

  /* Media Query for screens with width less than or equal to 600px */
  @media (max-width: 600px) {
    width: 90%; /* Adjust the width for smaller screens */
  }
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: underline;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        <strong>ReactFlix</strong> is a Free Movies streaming app with zero ads. We let you watch movies online without having to register or pay, with over 10,000 movies and TV-Series. You can also download full movies from MoviesCloud and watch them later if you want.
      </FooterText>
      <FooterText>
        <a href="/term">Terms of Service</a> | <a href="/contact">Contact</a> | <FooterLink href="#">Sitemap</FooterLink>
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;
