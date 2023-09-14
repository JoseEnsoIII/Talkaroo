import React from 'react';
import ReactDOM from 'react-dom';

const Card = (props) => (
  <div className="card">
    <img src={props.imgUrl} alt={props.title} />
    <div className="card-content">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </div>
);

const CardContainer = (props) => (
  <div className="cards-container">
    {props.cards.map((card) => (
      <Card
        key={card.id}
        title={card.title}
        content={card.content}
        imgUrl={card.imgUrl}
      />
    ))}
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          cards: [
            { id: 1, title: 'CARD 1', content: 'Clark Kent', imgUrl: 'https://unsplash.it/200/200' },
            // Add more card data here...
          ],
        },
        // Add more items here...
      ],
      activeTab: 0, // Set the initial active tab index
    };
  }

  render() {
    return (
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>React Card Slider</h1>
        <CardContainer cards={this.state.items[this.state.activeTab].cards} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
