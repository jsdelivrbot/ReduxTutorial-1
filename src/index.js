import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

import secret from './_secret.js';

const YOUTUBE_API_KEY = secret.API_KEY;
// console.log(YOUTUBE_API_KEY);

// This is a class of a component
// To create an instance of this class use <App />

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Render App inside an element with class name 'container'
ReactDOM.render(<App />, document.querySelector('.container'));
