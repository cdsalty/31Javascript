import React, {Component} from 'react';

import Button from './components/Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    };
  }

  // Get Random Quote Data
  componentDidMount() {
    fetch(
      'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json'
    )
      .then((res) => res.json()) // go through response and parse the body/data
      // .then((data) => console.log(data)); // verify the data is coming in. (Layout is a list of quotes)
      // read note at bottom
      .then((data) =>
        this.setState({
          quotes: data // verify in the render
        })
      );
  }

  handleNextClick = () => {
    console.log('Successful Connection');
  };

  render() {
    // console.log(this.state.quotes); // CONFIRMING DATA BEING SETUP
    return (
      <div className="App" id="quote-box">
        <Button handleClick={this.handleNextClick} buttonDisplayName="Next Quote" />
      </div>
    );
  }
}

export default App;

// https://codepen.io/freeCodeCamp/full/qRZeGZ

/*

my way v.s. the suggest route

.then((data) =>
  this.setState({
    quotes: data
  });

  *Suggested 
.then((quotes) =>){
  this.setState({
    quotes: quotes
  });
}

*/
