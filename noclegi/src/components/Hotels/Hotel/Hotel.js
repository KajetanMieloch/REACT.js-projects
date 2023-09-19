import PropTypes from 'prop-types';
import React from 'react';
import styles from './Hotel.module.css'
import hotelImg from '../../../assets/images/hotel.png'
import ThemeContext from '../../../context/themeContext';

const propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
};
const defaultProps = {
    
}


    function Hotel(props){
        return(
            <div className={`card mx-3 ${styles.hotel}`}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <img src={hotelImg}
                            alt="hotel"
                            className="img-fluid rounded" />
                        </div>
                        <div className="col-8">
                            <div className="row">
                                <div className="col">
                                    <p className={styles.title}>{props.name}</p>
                                    <span class="badge bg-info">{props.city}</span>
                                </div>
                                <div className={`col text-end ${styles.fontSizing}`}>
                                    <h5>
                                    <p>Ocena: {props.rating}
                                        <span class="badge bg-secondary ms-1">{props.ratings}</span>
                                    </p>
                                    <ThemeContext.Consumer>
                                        {({theme}) =>
                                            <a href="#" className={`btn btn-${theme} mt-1`}>Pokaż</a>
                                        }
                                    </ThemeContext.Consumer>
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                        <p className={styles.description}>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

Hotel.propTypes = propTypes;
Hotel.defaultProps = defaultProps;

export default Hotel;