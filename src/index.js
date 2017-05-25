import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyAMeLBKWEM4-EiIy5WmdPGhpJ-tSBPu-TE';

YTSearch({
  key: YOUTUBE_API_KEY,
  term: 'surfboards'
}, data => {
  console.log(data);
});

// create a new component, this component should prouce some HTML (create)
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".container"));