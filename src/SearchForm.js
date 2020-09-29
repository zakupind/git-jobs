import React from 'react';

import { connect } from 'react-redux';

import { handleChangeSearch,
         searchSubmit } from './REDUX/action';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.props.handleChangeSearch({name, value});
    }

    submit(event) {
        event.preventDefault();
        this.props.searchSubmit(this.props.description, this.props.location, this.props.fullTime);
    }

    render() {
        return(
            <div className="search-form-wrapper">
                <form className="search-form"
                      onSubmit={ this.submit }>
                    <input className="search-form__query"
                           placeholder="Поисковый запрос"
                           name="description"
                           value={this.props.description}
                           onChange={this.handleChange}/>
                    
                    <div className="search-form__location_and_fulltime">
                        <input className="search-form__location"
                               placeholder="Город"
                               name="location"
                               value={this.props.location}
                               onChange={this.handleChange}/>

                        <div className="check-fulltime">
                            <input type="checkbox"
                                   name="fullTime"
                                   onChange={this.handleChange}
                                   defaultChecked={this.props.fullTime}/>

                            <label>Только полный день</label>
                        </div>
                    </div>

                    <button>Найти</button>
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
    handleChangeSearch,
    searchSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);