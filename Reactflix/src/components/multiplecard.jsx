import React, { useState } from "react";
import SimplePagination from "../components/pagination";
import styled from "styled-components"; 
import { Link } from 'react-router-dom';
import ModalContentWrapper from '../Modal/login';

// Styled-components styles (same as before)
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  border-top: 1px solid white;
`;

const Header = styled.h1`
  color: #000;
  margin-left: -80%;
  margin-bottom: 30px;
  font-size: 40px;
  margin-top: -100px;
`;
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, 1fr); /* Adjust to 3 vertical rows */
  gap: 10px;
  max-width: 1200px; /* Limit the grid width if needed */
  width: 100%;
  height: 600px; /* Set the fixed height of the grid */
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black; /* Add black border */
  border-radius: 5px;
  padding: 10px;
  background-color: white; /* Add white background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Add hover effect */
  }
`;


const CardImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const CardDescription = styled.p`
  margin: 10px 0;
`;

const CardButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const DownloadButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
`;

const ShareButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
`;
const ModalWrapper = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalContent = styled.div`
  background-color: #fff;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  max-width: 400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
`;

const ModalMessage = styled.p`
  margin-bottom: 20px;
`;

const LoginButton = styled.button`
  margin-top: 10px;
  margin: 10px;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
`;
const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  cursor: pointer;
`;
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -180px; /* Adjust the margin-top value as needed */
`;


// Rest of your styled-components and the App component

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setShowLogin(false);
  };

  const openLoginComponent = () => {
    setShowLogin(true);
  };

  const closeLoginComponent = () => {
    setShowLogin(false);
  };

  const onLoginClick = () => {
    openLoginComponent();
  };
  const itemsPerPage = 14; // Number of items per page
  const totalItems = 5 * 4 * 5; // 5 horizontal rows x 4 vertical columns x 5 pages

  // Calculate the range of items to display for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = Array.from({ length: itemsPerPage }, (_, index) => ({
    id: indexOfFirstItem + index + 1,
    imageSrc: `https://via.placeholder.com/150x150?text=Image${
      indexOfFirstItem + index + 1
    }`,
    description: `Item ${indexOfFirstItem + index + 1} Description`,
  }));
  return (
    <AppContainer>
      <Header>| New Movies</Header>
      <CardGrid>
        {currentItems.map((item) => (
          <Card key={item.id}>
            <CardImage src={item.imageSrc} alt={`Item ${item.id}`} />
            <CardDescription>{item.description}</CardDescription>
            <CardButtons>
              <DownloadButton onClick={openModal}>Download</DownloadButton>
              <ShareButton onClick={openModal}>Share</ShareButton>
            </CardButtons>
            <ModalWrapper visible={modalVisible}>
              <ModalContent>
                <CloseButton onClick={closeModal}>&times;</CloseButton>
                <ModalMessage style={{fontSize:"20px", color:"#000", }}>
                  You need to log in or register first to perform this action.
                </ModalMessage>
                <Link to="/login"> {/* Use Link for "Log In" */}
      <LoginButton>Log In</LoginButton>
    </Link>
    <Link to="/reg"> {/* Use Link for "Not Registered Yet?" */}
      <LoginButton>Not Registered Yet?</LoginButton>
    </Link>
              </ModalContent>
            </ModalWrapper>

            {showLogin && (
              <ModalContentWrapper />
            )}
          </Card>
        ))}
      </CardGrid>
      <PaginationContainer>
        <SimplePagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </PaginationContainer>
    </AppContainer>
  );
}

export default App;
