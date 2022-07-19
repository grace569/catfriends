import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { cats } from './cats';

const App = () => {
  return (
    <div>
      <h1>KittyKatFriends</h1>
      <CardList cats={ cats }/>
    </div>
  );
}

export default App;
