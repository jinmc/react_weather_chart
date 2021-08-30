import React, { Component } from "react";
import ReactDOM from 'react-dom';
import SearchBar from '../containers/search_bar'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
