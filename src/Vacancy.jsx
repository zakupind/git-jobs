import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import noPhoto from './img/noPhoto.jpg';
import { addFavourites } from './store/action';

export class Vacancy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textHidden: true,
    };

    this.expandText = this.expandText.bind(this);
  }

  expandText() {
    const { textHidden } = this.state;
    this.setState({ textHidden: !textHidden });
  }

  clickButtonFavourite() {
    const {
      id,
      title,
      url,
      addFavourites: addFav,
    } = this.props;

    addFav({ id, title, url });
  }

  render() {
    const {
      title,
      url,
      created_at: createdAt,
      company,
      company_logo: companyLogo,
      company_url: companyUrl,
      location,
      description,
      isFavourite,
    } = this.props;

    const { textHidden } = this.state;
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
            className={isFavourite ? 'vacancy__favourites disable__button' : 'vacancy__favourites'}
            type="button"
            disabled={isFavourite}
            onClick={() => this.clickButtonFavourite()}
          >
            В избранное
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
            className={textHidden ? 'vacancy__description description-text__hidden ' : 'vacancy__description'}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <button
            className="description__button_hidden"
            type="button"
            onClick={this.expandText}
          >
            {textHidden ? 'ещё' : 'скрыть'}
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
  company_url: PropTypes.string,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  addFavourites: PropTypes.func.isRequired,
  isFavourite: PropTypes.bool,
};

Vacancy.defaultProps = {
  company_logo: noPhoto,
  isFavourite: false,
};

export default connect(null, mapDispatchToProps)(Vacancy);
