import React from 'react';
import ReactDOM from 'react-dom';

const YOUTUBE_API_KEY = 'AIzaSyAMeLBKWEM4-EiIy5WmdPGhpJ-tSBPu-TE';

// create a new component, this component should prouce some HTML (create)
const App = () => {
  return <div>Hi</div>;
}

ReactDOM.render(<App />, document.querySelector(".container"));