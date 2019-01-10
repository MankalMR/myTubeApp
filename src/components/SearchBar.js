import React from 'react';

export default class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  };

  onInputChange = (event) => {
    this.setState( { searchTerm: event.target.value } );
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    // invoke search terms callback in App.js
    this.props.onSearchTermSubmit(this.state.searchTerm);
  }

  render () {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={ this.onFormSubmit }>
        <div className="ui action fluid input">
          <input
            type="text"
            placeholder="Search..."
            value={ this.state.searchTerm }
            onChange={ this.onInputChange }
          />
          <button className="ui icon button">
            <i className="search icon"></i>
          </button>
        </div>
        </form>
      </div>
    );
  }
}