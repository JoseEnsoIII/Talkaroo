import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DropdownComponent from "../components/dropdown"; // Rename the imported component

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #191970;
  height: 60px;
  padding: 0 20px; /* Add some padding for better spacing */
  font-family: "Montserrat", sans-serif;
`;

const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;

const NavLinks = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavLinkItem = styled.li`
  margin-left: 30px;
  position: relative;
  font-family: "Montserrat", sans-serif;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
`;

const Dropdown = styled.div`
  border: 1px solid white; /* Add your desired border style here */
`;

const Navbar = () => {
  const animeDropdownItems = ["Adventure", "Isekai", "Echi"];
  const moviesDropdownItems = ["Action", "Drama", "Comedy"];
  const seriesDropdownItems = ["Season 1", "Season 2", "Season 3"];

  return (
    <StyledNavbar>
      <Logo>
        <NavLink to="/">ReactFlix</NavLink>
      </Logo>
      <NavLinks>
        <NavLinkItem>
          <NavLink to="/Home">Home</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <DropdownComponent label="Movies" items={moviesDropdownItems} /> {/* Use the renamed component here */}
        </NavLinkItem>
        <NavLinkItem>
          <DropdownComponent label="Anime" items={animeDropdownItems} /> {/* Use the renamed component here */}
        </NavLinkItem>
        <NavLinkItem>
          <DropdownComponent label="Series" items={seriesDropdownItems} /> {/* Use the renamed component here */}
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/login">Login</NavLink>
        </NavLinkItem>
      </NavLinks>
    </StyledNavbar>
  );
};

export default Navbar;
