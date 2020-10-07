import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';

import FavouritesItem from './FavouritesItem';

import { checkFavorites } from './store/action';

class FavouritesList extends React.Component {
  componentDidMount() {
    const { checkFavorites: checkFavoritesAction } = this.props;
    checkFavoritesAction();
  }

  componentWillUnmount() {
    console.log('no');
    localStorage.setItem('acv', 'JSON.stringify(item))');
    this.props.favouritesList.forEach((item) => {
      localStorage.setItem(item.id, JSON.stringify(item));
    });
  }

  render() {
    const { favouritesList } = this.props;
    return (
      <div className="favourites-list">
        <h2 className="favourites-list__title">Избранное</h2>
        <ul className="favourites-list__list">
          { favouritesList.length === 0
            ? <span>Нет избранных вакансий</span>
            : favouritesList.map((item) => (
              <FavouritesItem key={item.id} {...item} />))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favouritesList: state.favourites.favouritesList,
});

const mapDispatchToProps = {
  checkFavorites,
};

FavouritesList.propTypes = {
  favouritesList: PropsTypes.arrayOf(PropsTypes.objectOf(PropsTypes.string)).isRequired,
  checkFavorites: PropsTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesList);
