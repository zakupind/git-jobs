import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import close from './img/close.svg';

import { delFavourites } from './store/action';

export function FavouritesItem(props) {
  const {
    url,
    title,
    id,
    delFavourites: delFav,
  } = props;

  return (
    <div className="favourites-item-wrapper">
      <h4 className="favourites-item__title"><a href={url}>{title}</a></h4>
      <button className="favourites-item__button_del" type="button" onClick={() => delFav(id)}>
        <img className="favourites-item__button_img_del" alt="delete" src={close} />
      </button>
    </div>
  );
}

const mapDispatchToProps = {
  delFavourites,
};

FavouritesItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  delFavourites: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FavouritesItem);
