import React from 'react';
import FavouritesList from './FavouritesList';
import SearchForm from './SearchForm';
import VacancyList from './Vacancylist';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <FavouritesList />
          <SearchForm />
          <VacancyList />
        </div>
      );
  }
}

export default App;
