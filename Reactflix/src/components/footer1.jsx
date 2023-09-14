import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  width: 98.8%;
  padding: 10px;
  margin: 10px auto; /* Center horizontally using margin */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: center; /* Center text horizontally */
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-direction: column;
`;

const FooterLink = styled.li`
  margin: 2px 0; /* Reduce vertical margin */
  transition: color 0.3s; /* Add transition for smooth color change */
  &:hover {
    color: blue; /* Change text color to blue on hover */
  }
`;

const SocialLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-direction: column;
`;

const SocialLink = styled.li`
  margin: 2px 0; /* Reduce vertical margin */
  transition: color 0.3s; /* Add transition for smooth color change */
  &:hover {
    color: blue; /* Change text color to blue on hover */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink><strong>About Us</strong></FooterLink>
        <FooterLink>Terms of Service</FooterLink>
        <FooterLink>Contact</FooterLink>
        <FooterLink>Sitemap</FooterLink>
      </FooterLinks>
      <FooterLinks>
        <FooterLink><strong>Movies</strong></FooterLink>
        <FooterLink>TV Series</FooterLink>
        <FooterLink>Top IMDb</FooterLink>
      </FooterLinks>
      <FooterLinks>
        <FooterLink><strong>Genre</strong></FooterLink>
        <FooterLink>Action</FooterLink>
        <FooterLink>Comedy</FooterLink>
        <FooterLink>Drama</FooterLink>
        <FooterLink>Fantasy</FooterLink>
        <FooterLink>Horror</FooterLink>
        <FooterLink>Mystery</FooterLink>
      </FooterLinks>
      <SocialLinks>
        <SocialLink><strong>Connect us</strong></SocialLink>
        <SocialLink>Join Group Telegram</SocialLink>
        <SocialLink>Join Group Reddit</SocialLink>
        <SocialLink>Join Twitter</SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
