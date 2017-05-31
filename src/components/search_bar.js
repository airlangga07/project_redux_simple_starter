// NOTES
// 1. setting state can be in many ways. you can try to use this:
//      <input onChange={this.onInputChange.bind(this)} />
//    and initialize the handle function like this
//      onInputChange(event) { this.setState({ term: event.target.value })};
//    if you do not like the .bind(this) to call on all function you can use this 
//      onInputChange = event => this.setState({ term: event.target.value });
//    or you can first initialize it in the constructor method like so
//      this.onInputChange = this.onInputChange.bind(this)

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

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input onChange={event => this.onInputChange(event.target.value)} value={this.state.term} className="form-control" />
      </div>
    );
  }
}

export default SearchBar;