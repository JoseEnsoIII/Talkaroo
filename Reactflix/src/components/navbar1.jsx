import {useState} from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Dropdown from '../components/dropdown';
import { FaSearch } from 'react-icons/fa';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #191970;
  height: 60px;
  padding: 0 20px; /* Add some padding for better spacing */
`;

const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavLinkItem = styled.li`
  margin-left: 20px;
  position: relative;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
`;

const SearchButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.clicked ? "#191970" : "#fff"};
  font-size: 13px;
  cursor: pointer;
  transition: color 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    color: #fff;
  }
`;


const Navbar = () => {
  const [searchClicked, setSearchClicked] = useState(false);

  const animeDropdownItems = ["Adventure", "Isekai", "Echi"];
  const moviesDropdownItems = ["Action", "Drama", "Comedy"];
  const seriesDropdownItems = ["Season 1", "Season 2", "Season 3"];

  const handleSearchClick = () => {
    setSearchClicked(!searchClicked);
  };

  return (
    <StyledNavbar>
      <Logo>
        <NavLink to="/">ReactFlix</NavLink>
      </Logo>
      <NavLinks>
        <NavLinkItem><NavLink to="/Home">Home</NavLink></NavLinkItem>
        <NavLinkItem>
          <Dropdown label="Movies" items={moviesDropdownItems} />
        </NavLinkItem>
        <NavLinkItem>
          <Dropdown label="Anime" items={animeDropdownItems} />
        </NavLinkItem>
        <NavLinkItem>
          <Dropdown label="Series" items={seriesDropdownItems} />
        </NavLinkItem>
        <NavLinkItem>
       <SearchButton clicked={searchClicked} onClick={handleSearchClick}>
            Search
            <FaSearch style={{ marginLeft: '10px' }} />
          </SearchButton>
        </NavLinkItem>
        <NavLinkItem><NavLink to="/login">Login</NavLink></NavLinkItem>
      </NavLinks>
    </StyledNavbar>
  );
};

export default Navbar;
