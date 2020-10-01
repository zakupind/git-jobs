import React from 'react';

import { connect } from 'react-redux';

import { searchSubmit,
         searchNull } from './REDUX/action';

class Search extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        description: '',
        location: '',
        fullTime: false
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    submit(event) {
        event.preventDefault();
        if (this.state.description === '' && this.state.location === '') {
            this.props.searchNull();
        } else {
            this.props.searchSubmit(this.state);
        }
    }

    render() {
        return(
            <div className="search-form-wrapper">
                <form className="search-form"
                      onSubmit={(event) => this.submit(event)}>
                    <input className="search-form__query"
                           placeholder="Поисковый запрос"
                           name="description"
                           value={this.description}
                           onChange={(event) => this.handleChange(event)}/>
                    
                    <div className="search-form__location_and_fulltime">
                        <input className="search-form__location"
                               placeholder="Город"
                               name="location"
                               value={this.location}
                               onChange={(event) => this.handleChange(event)}/>

                        <div className="check-fulltime">
                            <input className="check-fulltime__check"
                                   type="checkbox"
                                   name="fullTime"
                                   onChange={(event) => this.handleChange(event)}
                                   defaultChecked={this.fullTime}/>

                            <label>Только полный день</label>
                        </div>
                    </div>

                    <button className="search__button">Найти</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.search.description,
    location: state.search.location,
    fullTime: state.search.fullTime
})

const mapDispatchToProps = {
    searchSubmit,
    searchNull
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);