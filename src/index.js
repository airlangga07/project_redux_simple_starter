import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyAMeLBKWEM4-EiIy5WmdPGhpJ-tSBPu-TE';

// create a new component, this component should prouce some HTML (create)
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".container"));