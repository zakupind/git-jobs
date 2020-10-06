import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
  searchSubmit,
  searchNull,
} from './store/action';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      location: '',
      fullTime: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    // const { fullTime: fullTimeDes } = this.state;
    if (name === 'fullTime') {
      this.setState(({ fullTimeDes }) => ({ fullTime: !fullTimeDes }));
    } else {
      this.setState({ [name]: value });
    }
  }

  submit = (event) => {
    const { description, location } = this.state;
    const { searchNull: searchNullAction, searchSubmit: searchSubmitAction } = this.props;

    event.preventDefault();
    if (description === '' && location === '') {
      searchNullAction();
    } else {
      searchSubmitAction(this.state);
    }
  }

  render() {
    return (
      <div className="search-form-wrapper">
        <form
          className="search-form"
          onSubmit={this.submit}
        >
          <input
            className="search-form__query"
            placeholder="Поисковый запрос"
            name="description"
            value={this.description}
            onChange={this.handleChange}
          />

          <div className="search-form__location_and_fulltime">
            <input
              className="search-form__location"
              placeholder="Город"
              name="location"
              value={this.location}
              onChange={this.handleChange}
            />

            <div className="check-fulltime">

              <label htmlFor="fullTime">
                <input
                  className="check-fulltime__check"
                  type="checkbox"
                  name="fullTime"
                  onChange={this.handleChange}
                  defaultChecked={this.fullTime}
                />
                Только полный день
              </label>
            </div>
          </div>

          <button type="submit" className="search__button">Найти</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchSubmit,
  searchNull,
};

Search.propTypes = {
  searchSubmit: PropTypes.func.isRequired,
  searchNull: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Search);
