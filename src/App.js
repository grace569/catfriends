import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchField: ''
    }
  }

  componentDidMount() {
    const cats = fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ cats: users }) );
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const filteredCats = this.state.cats.filter(cat => {
      return cat.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })

    if (this.state.cats.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1>KittyKatFriends</h1>
          <SearchBox searchChange={ this.onSearchChange } searchField={ this.state.searchField } />
          <CardList cats={ filteredCats }/>
        </div>
      );
    }
  }
}

export default App;
