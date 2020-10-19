import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
  searchSubmit,
  searchNull,
} from './store/action';

export class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      location: '',
      fullTime: false,
    };
  }

  handleClick = () => {
    this.setState({ fullTime: !this.state.fullTime });
  }

  submit = (event) => {
    const { description, location } = this.state;
    const { searchNull: searchNullAction, searchSubmit: searchSubmitAction } = this.props;

    event.preventDefault();
    if (!description && !location) {
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
            onChange={(e) => { this.setState({ description: e.target.value })}}
          />

          <div className="search-form__location_and_fulltime">
            <input
              className="search-form__location"
              placeholder="Город"
              name="location"
              value={this.location}
              onChange={(e) => { this.setState({ location: e.target.value }) }}
            />

            <div className="check-fulltime">

              <label htmlFor="fullTime">
                <input
                  className="check-fulltime__check"
                  type="checkbox"
                  name="fullTime"
                  onClick={this.handleClick}
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
