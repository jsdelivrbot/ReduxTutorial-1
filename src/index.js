import React from 'react';
import ReactDOM from 'react-dom';

// This is a class of a component
// To create an instance of this class use <App />
const App = function() {
  return <div>Hi</div>;
}

// Render App inside an element with class name 'container'
ReactDOM.render(<App />, document.querySelector('.container'));
