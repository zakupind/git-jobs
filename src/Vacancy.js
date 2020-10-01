import React from 'react';
import { connect } from 'react-redux';

import {addFavourites} from './Redux/action';

class Vacancy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textAll: false,
            title: this.props.title,
            url: this.props.url,
            id: this.props.id
        }
    }

    addFavourites() {
        const {id, title, url} = this.state;
        this.props.addFavourites({id, title, url})
    }

    expandText() {
        this.setState((state) => {
            return {textAll: !state.textAll}
        })
    }

    render() {
        const date = new Date(this.props.created_at).toLocaleString('ru', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            timezone: 'UTC'
        });
        
        return (
            <div className="vacancy-wrapper">
                <div className="vacancy__title_wrapper">
                    <h2 className="vacancy__title"><a href={this.props.url}>{this.props.title}</a></h2>
                    <div className="vacancy__favourites"
                        onClick={() => this.addFavourites()}>
                    <span>В избрынное</span>
                </div>
                </div>
                <div className="vacancy__header">
                    <div className="vacancy__company_wrapper">
                        <img className="vacancy__logo" 
                             src={this.props.company_logo}
                             href={this.props.company_url}/>

                        <span className="vacancy__company_name" 
                              href={this.props.company_url}>{this.props.company}</span>
                    </div>
                    <span>{this.props.location}</span>
                    <span>{date}</span>
                </div>
                <div>
                    <div className={this.state.textAll ? 'vacancy__description' : "vacancy__description description-text__hidden"}
                        dangerouslySetInnerHTML={{__html: this.props.description}}></div>
                    <span className="description__button_hidden"
                          onClick={() => this.expandText()}>
                              {this.state.textAll ? 'скрыть' : 'ещё'}
                    </span>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = {
    addFavourites
}

export default connect(null, mapDispatchToProps)(Vacancy);