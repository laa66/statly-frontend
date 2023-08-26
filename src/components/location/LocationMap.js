import Map, { Popup } from 'react-map-gl';
import { Layer, Source, Marker } from 'react-map-gl';

import basemarkericon from '../../resources/basemarkericon.png';
import markericon from '../../resources/markericon.png';
import { useState } from 'react';

function LocationMap({data, mapZoom}) {
    
    const [user, setUser] = useState(null);
    const coordinates = [];
    const layerStyle = {
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#00A573',
            'line-width': 2
        }
    };
    
    return (
        <>
            {data.length > 0 && <Map
                style={{ width: '1450px', height: '700px' }}
                initialViewState={{ zoom: mapZoom, longitude: data[0]?.coordinates.longitude, latitude: data[0]?.coordinates.latitude}}
                mapboxAccessToken="pk.eyJ1IjoibGFhNjYiLCJhIjoiY2xrc2pudDFuMDA4cTNnbnBlMHM5YW0wNSJ9.zt1xEp0w7pgucF75qiqE3A"
                mapStyle="mapbox://styles/mapbox/dark-v11">
                <Marker longitude={data[0]?.coordinates.longitude} latitude={data[0]?.coordinates.latitude}>
                    <img src={basemarkericon} alt="marker-icon" width={'40px'} height={'40px'} />
                </Marker>
                {
                    data.slice(1).map((user, i) => {
                        return (
                            <div key={i}>
                                <Marker
                                longitude={user.coordinates.longitude} 
                                latitude={user.coordinates.latitude}
                                onClick={e => {
                                    e.originalEvent.stopPropagation();
                                    setUser(user);
                                }}>
                                    <img src={markericon} alt="marker-icon" width={'40px'} height={'40px'} />
                                </Marker>
                                {coordinates.push([data[0]?.coordinates.longitude, data[0]?.coordinates.latitude])}
                                {coordinates.push([user.coordinates.longitude, user.coordinates.latitude])}
                            </div>
                        );
                    })
                }
                {user && 
                <Popup
                anchor="bottom"
                longitude={user.coordinates.longitude}
                latitude={user.coordinates.latitude}
                onClose={() => setUser(null)}
                >
                <div className="map-popup">
                    <div>
                        <div className="row gx-0">
                            <div className="col-3 map-popup-img">
                                <img src={user.images[0].url} alt="test" width={'30px'} height={'30px'}/>
                            </div>
                            <div className="col-9 map-popup-title">
                                {user.display_name}
                            </div>
                            <div className="map-popup-line">{user.location.features[0].text}, {user.location.features[1].text}</div>
                        {user.match !== null ? <div className="map-popup-line">Match - {user.match}%</div> : <></>}
                        <div className="map-popup-line">Distance - {parseInt(user.distance)}km</div>
                        </div>
                    </div>
                    
                </div>
                
                </Popup>
                }

                <Source id="data" type="geojson" data={{
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': coordinates
                    }
                }}>
                    <Layer {...layerStyle} />
                </Source>
            </Map>
            }
        </>
    );
}

export default LocationMap;