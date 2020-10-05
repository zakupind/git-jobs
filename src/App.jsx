import React from 'react';
import FavouritesList from './FavouritesList';
import SearchForm from './SearchForm';
import VacancyList from './Vacancylist';

function App() {
  return (
    <div className="App">
      <FavouritesList />
      <SearchForm />
      <VacancyList />
    </div>
  );
}

export default App;
