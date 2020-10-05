import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import noPhoto from './img/noPhoto.jpg';
import { addFavourites } from './store/action';

class Vacancy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textAll: false,
    };
  }

  expandText = () => {
    const { textAll } = this.state;
    this.setState({ textAll: !textAll });
  }

  render() {
    const {
      id,
      title,
      url,
      created_at: createdAt,
      company,
      company_logo: companyLogo,
      company_url: companyUrl,
      location,
      description,
      addFavourites: addFav,
    } = this.props;

    const { textAll } = this.state;
    const date = new Date(createdAt).toLocaleString('ru', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      timezone: 'UTC',
    });

    return (
      <div className="vacancy-wrapper">
        <div className="vacancy__title_wrapper">
          <h2 className="vacancy__title"><a href={url}>{title}</a></h2>
          <button
            className="vacancy__favourites"
            type="button"
            onClick={() => addFav({ id, title, url })}
          >
            В избрынное
          </button>
        </div>
        <div className="vacancy__header">
          <div className="vacancy__company_wrapper">
            <img
              className="vacancy__logo"
              alt={company}
              src={companyLogo}
              href={companyUrl}
            />

            <span>
              <a
                className="vacancy__company_name"
                href={companyUrl}
              >
                {company}
              </a>
            </span>
          </div>
          <span>{location}</span>
          <span>{date}</span>
        </div>
        <div>
          <div
            className={textAll ? 'vacancy__description' : 'vacancy__description description-text__hidden'}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <button
            className="description__button_hidden"
            type="button"
            onClick={this.expandText}
          >
            {textAll ? 'скрыть' : 'ещё'}
          </button>
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = {
  addFavourites,
};

Vacancy.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  company_logo: PropTypes.string,
  company_url: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  addFavourites: PropTypes.func.isRequired,
};

Vacancy.defaultProps = {
  company_logo: noPhoto,
};

export default connect(null, mapDispatchToProps)(Vacancy);
