import './location.css';
import worldmap from '../../resources/worldmap.png';
import { useState } from 'react';

function Location() {
    const [showDescription, setShowDescription] = useState(false);
    const [mapHighlight, setMapHighlight] = useState(false);


    const onMouseOverButton = () => {
        setMapHighlight(true);
        setShowDescription(true);
    }

    const onMouseLeaveButton = () => {
        setMapHighlight(false);
        setShowDescription(false);
    }

    const mapStyle = {
        opacity: 0.75
    };

    return (
        <div className="location-container animate-fade">
            <div className="image-description">
                <h1>Music-Matched Connections</h1>
                <div className="container location-section">
                    <div style={{ color: "#7d7d7d" }}>Discover fellow users whose music taste aligns with yours and explore their locations.</div>
                    <img src={worldmap} style={mapHighlight ? mapStyle : null} className="world-img animate-fate" alt="world-map" />
                    <div className="row location-buttons">
                        <div className="col ms-5">
                            <button onMouseOver={onMouseOverButton} className="match-users-button">Find matching users</button>
                        </div>
                        <div className="col me-5">
                            <button onMouseOver={onMouseOverButton} className="nearby-users-button">Find nearby users</button>
                        </div>
                    </div>
                    {showDescription && <div onMouseLeave={onMouseLeaveButton} className="location-description animate-fade">
                        <div className="location-description-inner">
                            <h4>Connect</h4>
                            <div style={{ color: "#7d7d7d" }}>
                                ...with like-minded music enthusiasts and uncover nearby users who share your passion for this application.
                                Expand your musical connections and meet people who resonate with your preferences,
                                creating a harmonious community right at your fingertips.
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default Location;