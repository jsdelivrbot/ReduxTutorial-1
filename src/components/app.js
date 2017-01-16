import React, { Component } from 'react';

import BookList from '../containers/book_list';
import store from '../stores';


export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <BookList store={store} />
        </div>
      </div>
    );
  }
};
