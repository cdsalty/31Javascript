import React, {Component} from 'react';

import Button from './components/Button';
import './App.css';

class App extends Component {
  handleNextClick = () => {
    console.log('Successful Connection');
  };

  render() {
    return (
      <div className="App" id="quote-box">
        <Button handleClick={this.handleNextClick} buttonDisplayName="Next Quote" />
      </div>
    );
  }
}

export default App;
