import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

import secret from './_secret.js';

const YOUTUBE_API_KEY = secret.API_KEY;
// console.log(YOUTUBE_API_KEY);

YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards' }, (data) => {
  console.log(data);
})
// This is a class of a component
// To create an instance of this class use <App />
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Render App inside an element with class name 'container'
ReactDOM.render(<App />, document.querySelector('.container'));
