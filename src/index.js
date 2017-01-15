import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create a new component
// This component should produce some HTML.
class App extends Component {
  render() {
    return (
      <div>Hi</div>
    );
  } 
};

// Take this component's generated HTML and put it on page.
ReactDOM.render(<App />, document.querySelector('.container'));
