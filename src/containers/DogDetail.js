import React from 'react';
import { useLocation } from 'react-router-dom';
import "../index.css"

const DogDetail = () => {
    const location = useLocation();
    const { id, life_span, name, breed_group, temperament, url } = location.state.dog;
    return (
        <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
                <div className="middle aligned row">
                    <div className="column">
                        <img className="ui large rounded image" src={url} />
                    </div>
                    <div className="column">
                        <h1>{name}</h1>
                        <h2>{breed_group}</h2>
                        <h3 className="ui brown block header">{life_span}</h3>
                        <p>{temperament}</p>
                        <div className="ui vertical animated button" tabIndex="0">
                            <div className="hidden content">
                                <i className="like icon"></i>
                            </div>
                            <div className="visible content">Like</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DogDetail;