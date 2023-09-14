import React, { useState } from 'react';
import SimplePagination from '../components/pagination';
import styled from 'styled-components';

// Define styled components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  border-top: 1px solid white;
 
`;
const Header = styled.h1`
  color: #fff;
  margin-left: -80%; 
  margin-bottom: 30px;
  font-size: 40px;
  margin-top :-100px;
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
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  background-color: #007BFF;
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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -180px; /* Adjust the margin-top value as needed */
`;

function App() {
  const itemsPerPage = 14; // Number of items per page
  const totalItems = 5 * 4 * 5; // 5 horizontal rows x 4 vertical columns x 5 pages
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the range of items to display for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.from({ length: itemsPerPage }, (_, index) => ({
    id: indexOfFirstItem + index + 1,
    imageSrc: `https://via.placeholder.com/150x150?text=Image${indexOfFirstItem + index + 1}`,
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
              <DownloadButton>Download</DownloadButton>
              <ShareButton>Share</ShareButton>
            </CardButtons>
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
