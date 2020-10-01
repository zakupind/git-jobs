import React from 'react';
import { connect } from 'react-redux';
import Vacancy from './Vacancy';
import Loader from './Loader';

class VacancyList extends React.Component {
    render() {
        return( 
            <div> {this.props.isFetching ? 
                <Loader /> :
                <div>
                    <span className="search__status">{this.props.statusSearch}</span>
                    <ul>
                        {this.props.jobs.map(job => (
                            <Vacancy key={job.id} {...job}/>
                        ))}
                    </ul>
                </div>
            }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    jobs: state.search.jobs,
    statusSearch: state.search.statusSearch,
    isFetching: state.search.isFetching
});


export default connect(mapStateToProps, null)(VacancyList);