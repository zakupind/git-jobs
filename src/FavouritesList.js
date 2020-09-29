import React from 'react';
import {connect} from 'react-redux';

import FavouritesItem from './Favourites Item'

import { checkFavorites } from  './REDUX/action';

class FavouritesList extends React.Component {
    componentDidMount() {
        this.props.checkFavorites()
    }

    render() {
        return(
            <div>
                <h2>Избранное</h2>
                <ul>
                    {this.props.favouritesList.map(item => (
                        <FavouritesItem key={item.id} {...item}/>
                    ))}
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