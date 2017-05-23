import React, { Component } from 'react';

// functional based component
// const SearchBar = () => {
//   return <input />;
// }

// class based component
// class SearchBar extends React.Component {
//   render() {
//     return <input />;
//   }
// }

// class based component ES6 style
class SearchBar extends Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return <input onChange={this.onInputChange} />;
  }
}

export default SearchBar;