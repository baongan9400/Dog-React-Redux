import React from 'react';
import { Link } from "react-router-dom"

import PropTypes from 'prop-types';

const DogComponent = (props) => {
    const { id, life_span, name, breed_group, temperament, url } = props.dog;
    return (
        <div className="ui four wide column">
            <Link to={{ pathname: `/dog/${id}`, state: { dog: props.dog } }}>
                <div className="ui link cards ">
                    <div className="ui card">
                        <div className="image">
                            <img src={url} />
                        </div>
                        <div className="content">
                            <div className="header">{name}</div>
                            <div className="meta">
                                <span className="date">{life_span}</span>
                            </div>
                            <div className="description">
                                {temperament}
                            </div>
                        </div>
                        <div className="extra content">
                            <i className="tag icon"></i>
                            Breed group: {breed_group}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
DogComponent.propTypes = {
    dog: PropTypes.object,
}
export default DogComponent;