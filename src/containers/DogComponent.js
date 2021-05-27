import React from 'react';
import PropTypes from 'prop-types';

const DogComponent = (props) => {
    const { id, life_span, name, breed_group, temperament, url } = props.dog;
    return (
        <div className="ui four wide column">
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
                        <a>
                            <i className="tag icon"></i>
                    Breed group: {breed_group}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
DogComponent.propTypes = {
    dog: PropTypes.object,
}
export default DogComponent;