import React from 'react';
import ReactDOM from 'react-dom';

// create a new component, this component should prouce some HTML (create)
const App = () => {
  return <div>Hi</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM) (show)
ReactDOM.render(<App />);