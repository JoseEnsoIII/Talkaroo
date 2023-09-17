import React from 'react';
import styled from 'styled-components';
import TrendCard from '../cards/trend-card'; // Import the MovieCard component

const Tabs = styled.div`
  background: transparent;
  width: 100%;
  height: 800px;
  margin: 20px auto;
  padding: 1em;
  margin-left: auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TabsNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-left: auto; /* Push the tabs to the right */
`;

const TabsNavButton = styled.button`
  flex: 1;
  background: none;
  border: none;
  padding: 1em 2em;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  height: 70px;
  font-size: 20px; /* Set the font size to 20px */

  &:hover {
    background-color: #212016;
    color: #fff;
    text-decoration: underline;
  }

  & + & {
    margin-left: -1px;
  }
`;

const MontserratTitle = styled.h1`
  font-size: 40px;
  margin-left: 30px;
  color: #000;
  font-family: 'Montserrat', sans-serif; /* Apply Montserrat font */
  border: none;
`;

class TabsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: 'Movies',
          movies: [
            {
              title: 'Movie 1',
              imageUrl: './src/assets/images/spidey.jpg',
              year: '2021',
              duration: '120min',
              rating: '7.5',
            },
            // Add more movies for the Movies tab here
          ],
        },
        {
          name: 'Series',
          movies: [
            {
              title: 'Series 1',
              imageUrl: 'image2.jpg',
              year: '2022',
              duration: '45min',
              rating: '8.0',
            },
            // Add more series data for the Series tab here
          ],
        },
        {
          name: 'Anime',
          movies: [
            {
              title: 'Anime 1',
              imageUrl: 'image3.jpg',
              year: '2023',
              duration: '30min',
              rating: '9.0',
            },
            // Add more anime data for the Anime tab here
          ],
        },
      ],
      activeTab: 0,
    };
  }

  handleClick(index) {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    const { items, activeTab } = this.state;

    const buttons = items.map((item, i) => (
      <TabsNavButton
        key={i}
        onClick={() => this.handleClick(i)}
        style={activeTab === i ? { color: 'deepskyblue' } : {}}
      >
        {item.name}
      </TabsNavButton>
    ));

    const cards = items[activeTab].movies.map((movie, i) => (
      <TrendCard key={i} {...movie} />
    ));

    return (
      <Tabs>
        <HeaderContainer>
          <MontserratTitle className="montserrat-font">
            Trending {items[activeTab].name}
          </MontserratTitle>
          <TabsNav>{buttons}</TabsNav>
        </HeaderContainer>
        <div>{cards}</div>
      </Tabs>
    );
  }
}

export default TabsComponent;
