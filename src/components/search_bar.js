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
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
        <p>Value of the Input: {this.state.term}</p>
      </div>
    );
  }
}

export default SearchBar;