import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faShare } from '@fortawesome/free-solid-svg-icons';
// Define the data for your tabs
const _tabs = [
  {
    name: 'Movies',
    cards: [
      {
        title: 'Movie 1',
        description: 'Description for Movie 1',
        imageUrl: './src/assets/images/th1.jpg',
      },
      {
        title: 'Movie 2',
        description: 'Description for Movie 2',
        imageUrl: './src/assets/images/th1.jpg',
      },
      {
        title: 'Movie 1',
        description: 'Description for Movie 1',
        imageUrl: './src/assets/images/th1.jpg',
      },
      {
        title: 'Movie 2',
        description: 'Description for Movie 2',
        imageUrl: './src/assets/images/th1.jpg',
      },
      {
        title: 'Movie 1',
        description: 'Description for Movie 1',
        imageUrl: './src/assets/images/th1.jpg',
      },
      {
        title: 'Movie 2',
        description: 'Description for Movie 2',
        imageUrl: './src/assets/images/th1.jpg',
      },
      {
        title: 'Movie 1',
        description: 'Description for Movie 1',
        imageUrl: './src/assets/images/th1.jpg',
      },
      {
        title: 'Movie 2',
        description: 'Description for Movie 2',
        imageUrl: './src/assets/images/th1.jpg',
      },
      {
        title: 'Movie 1',
        description: 'Description for Movie 1',
        imageUrl: './src/assets/images/th1.jpg',
      },
      {
        title: 'Movie 2',
        description: 'Description for Movie 2',
        imageUrl: './src/assets/images/th1.jpg',
      },
      // Add more cards as needed
    ],
  },
  {
    name: 'Series',
    cards: [
      {
        title: 'Series 1',
        description: 'Description for Series 1',
        imageUrl: './src/assets/images/meg2.jpg',
      },
      {
        title: 'Series 2',
        description: 'Description for Series 2',
        imageUrl: './src/assets/images/meg2.jpg',
      },
      {
        title: 'Series 1',
        description: 'Description for Series 1',
        imageUrl: './src/assets/images/meg2.jpg',
      },
      {
        title: 'Series 2',
        description: 'Description for Series 2',
        imageUrl: './src/assets/images/meg2.jpg',
      },
      {
        title: 'Series 1',
        description: 'Description for Series 1',
        imageUrl: './src/assets/images/meg2.jpg',
      },
      {
        title: 'Series 2',
        description: 'Description for Series 2',
        imageUrl: './src/assets/images/meg2.jpg',
      },
      {
        title: 'Series 1',
        description: 'Description for Series 1',
        imageUrl: './src/assets/images/meg2.jpg',
      },
      {
        title: 'Series 2',
        description: 'Description for Series 2',
        imageUrl: './src/assets/images/meg2.jpg',
      },
      {
        title: 'Series 1',
        description: 'Description for Series 1',
        imageUrl: './src/assets/images/meg2.jpg',
      },
      {
        title: 'Series 2',
        description: 'Description for Series 2',
        imageUrl: './src/assets/images/meg2.jpg',
      },
    ],
  },
  {
    name: 'Anime',
    cards: [
      {
        title: 'Anime 1',
        description: 'Description for Anime 1',
        imageUrl: './src/assets/images/op.jpg',
      },
      {
        title: 'Anime 2',
        description: 'Description for Anime 2',
        imageUrl: './src/assets/images/op.jpg',
      },
      {
        title: 'Anime 1',
        description: 'Description for Anime 1',
        imageUrl: './src/assets/images/op.jpg',
      },
      {
        title: 'Anime 2',
        description: 'Description for Anime 2',
        imageUrl: './src/assets/images/op.jpg',
      },
      {
        title: 'Anime 1',
        description: 'Description for Anime 1',
        imageUrl: './src/assets/images/op.jpg',
      },
      {
        title: 'Anime 2',
        description: 'Description for Anime 2',
        imageUrl: './src/assets/images/op.jpg',
      },
      {
        title: 'Anime 1',
        description: 'Description for Anime 1',
        imageUrl: './src/assets/images/op.jpg',
      },
      {
        title: 'Anime 2',
        description: 'Description for Anime 2',
        imageUrl: './src/assets/images/op.jpg',
      },

    ],
  },
];

const Tabs = styled.div`
  background: #212016;
  width: 98%;
  height: 800px;
  margin: 20px auto;
  padding: 1em;
  border-bottom: 1px solid white; /* Add a bottom border */
`;


const TabsNav = styled.nav`
  display: flex;
  border-bottom: 1px solid lightgray;
`;

const TabsNavButton = styled.button`
  flex: 1;
  background: none;
  border: 1px solid lightgray;
  border-bottom: 0;
  padding: 1em 2em;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  height: 70px;

  &:hover {
    background-color: deepskyblue;
    color: #fff;
  }

  & + & {
    margin-left: -1px;
  }
`;

const TabsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 300px;
  height: 350px;
  border: 1px solid lightgray;
  margin: 0.5em;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Add this property to make the image fit within its container */
  }

  div {
    padding: 1em;

    h3 {
      margin: 0;
    }

    .card-buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 1em;

      button {
        flex: 1;
        padding: 0.5em;
        margin: 0 0.25em;
        background-color: transparent;
        color: skyblue;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center; /* Center icon and text vertically */

        /* Styles for the icon */
        svg {
          margin-right: 0.25em; /* Add spacing between icon and text */
        }

        &:hover {
          background-color: #fff;
          color: #000;
        }
      }
    }
  }
`;


class TabsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: _tabs,
      activeTab: 0,
    };
  }

  handleClick(index) {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    const buttons = this.state.items.map((item, i) => (
      <TabsNavButton
        key={i}
        onClick={() => this.handleClick(i)}
        style={this.state.activeTab === i ? { backgroundColor: 'deepskyblue', color: '#fff' } : {}}
      >
        {item.name}
      </TabsNavButton>
    ));

    const cards = this.state.items[this.state.activeTab].cards.map((card, i) => (
      <Card key={i}>
        <img style={{width: "300px",height: "350px"}} src={card.imageUrl} alt={card.title} />
        <div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          
            <button className="download-button">
              <FontAwesomeIcon icon={faDownload} /> Download
            </button>
            <button className="share-button">
              <FontAwesomeIcon icon={faShare} /> Share
            </button>
        
        </div>
      </Card>
    ));

    return (
      <Tabs>
        <TabsNav>{buttons}</TabsNav>
        <TabsContent>{cards}</TabsContent>
      </Tabs>
    );
  }
}

export default TabsComponent;
