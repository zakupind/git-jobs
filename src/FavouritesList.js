import React from 'react';
import {connect} from 'react-redux';

import FavouritesItem from './FavouritesItem';

import { checkFavorites } from  './Redux/action';

class FavouritesList extends React.Component {

    componentDidMount() {
        this.props.checkFavorites()
    }

    render() {
        return(
            <div className="favourites-list">
                <h2 className="favourites-list__title">Избранное</h2>
                <ul className="favourites-list__list">
                    { this.props.favouritesList.length == 0 ? 
                    <span>Нет избранных вакансий</span> :
                    this.props.favouritesList.map(item => (
                        <FavouritesItem key={item.id} {...item}/>))
                    } 
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    favouritesList: state.favourites.favouritesList
})

const mapDispatchToProps = {
    checkFavorites
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesList);