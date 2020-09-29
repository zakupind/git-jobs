import React from 'react';
import { connect } from 'react-redux';

import {delFavourites} from './REDUX/action';

class FavouritesItem extends React.Component {
    render() {
        return(
            <div>
                <h4 href={this.props.url}>{this.props.title}</h4>
                <div onClick={() => this.props.delFavourites(this.props.id)}><span>Del</span></div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    delFavourites
}

export default connect(null, mapDispatchToProps)(FavouritesItem);