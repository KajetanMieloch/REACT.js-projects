import React, { useState } from 'react'
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/themeContext';

const propTypes = {
    onSearch: PropTypes.func.isRequired,
}

function Searchbar(props){

    const [term, setTerm] = useState('');

    const search = () => {
        props.onSearch(term);
    }

    return(
        <div className="d-flex">
            <input
                className="form-control" 
                type="text"
                onKeyDown={e => e.key === 'Enter' ? search() : null}
                onChange={e => setTerm(e.target.value)}
                placeholder="Szukaj..."/>
            <ThemeContext.Consumer>
                {({theme}) =>
                    <button
                        value={term}
                        onClick={search}
                        className={`btn btn-${theme} ms-1`}>
                        Szukaj
                    </button>
                 }
            </ThemeContext.Consumer>
            
        </div>
    );
}

Searchbar.propTypes = propTypes;

export default Searchbar;