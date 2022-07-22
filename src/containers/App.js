import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
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
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ cats: users }) );
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { cats, searchField } = this.state;
    const filteredCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase());
    })

    if (!cats.length) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1>KittyKatFriends</h1>
          <SearchBox searchChange={ this.onSearchChange } searchField={ searchField } />
          <Scroll>
            <CardList cats={ filteredCats }/>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
