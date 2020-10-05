import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Vacancy from './Vacancy';
import Loader from './Loader';

function VacancyList(props) {
  const { isFetching, statusSearch, jobs } = props;
  return (
    <div>
      {isFetching
        ? <Loader />
        : (
          <div>
            <span className="search__status">{statusSearch}</span>
            <ul>
              {jobs.map((job) => (
                <Vacancy key={job.id} {...job} />
              ))}
            </ul>
          </div>
        )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  jobs: state.search.jobs,
  statusSearch: state.search.statusSearch,
  isFetching: state.search.isFetching,
});

VacancyList.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  isFetching: PropTypes.bool.isRequired,
  statusSearch: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(VacancyList);
