import React from 'react';
import loader from './img/loader.gif'

class Loader extends React.Component {
    render() {
        return(
            <div>
                <img className="loader" src={loader} />
            </div>
        )
    }
}

export default Loader;