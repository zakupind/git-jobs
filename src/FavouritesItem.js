import React from 'react';
import { connect } from 'react-redux';

import close from './img/close.svg';

import {delFavourites} from './REDUX/action';

class FavouritesItem extends React.Component {
    render() {
        return(
            <div className="favourites-item-wrapper">
                <h4 className="favourites-item__title"><a href={this.props.url}>{this.props.title}</a></h4>
                <div onClick={() => this.props.delFavourites(this.props.id)}>
                    <img className="favourites-item__button_del" src={close}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    delFavourites
}

export default connect(null, mapDispatchToProps)(FavouritesItem);