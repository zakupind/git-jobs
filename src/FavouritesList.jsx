import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FavouritesItem from './FavouritesItem';

function FavouritesList(props) {
  const { favouritesList } = props;
  return (
    <div className="favourites-list">
      <h2 className="favourites-list__title">Избранное</h2>
      <ul className="favourites-list__list">
        {favouritesList.length === 0
          ? <span>Нет избранных вакансий</span>
          : Object.keys(favouritesList).map((key) => (
            <FavouritesItem key={key} {...favouritesList[key]} />))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  favouritesList: state.favourites.favouritesList,
});

FavouritesList.propTypes = {
  favouritesList: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default connect(mapStateToProps)(FavouritesList);
