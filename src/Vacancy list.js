import React from 'react';
import { connect } from 'react-redux';
import Vacancy from './Vacancy';

class VacancyList extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    {this.props.jobs.map(job => (
                        <Vacancy key={job.id} {...job}/>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    jobs: state.search.jobs
});

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(VacancyList);