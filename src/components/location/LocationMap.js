import Map from 'react-map-gl';
import { Layer, Source, Marker } from 'react-map-gl';

import basemarkericon from '../../resources/basemarkericon.png';
import markericon from '../../resources/markericon.png';

function LocationMap({data}) {

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
                style={{ width: '940px', height: '600px' }}
                initialViewState={{ zoom: 1.5, longitude: data[0]?.coordinates.longitude, latitude: data[0]?.coordinates.latitude}}
                mapboxAccessToken="pk.eyJ1IjoibGFhNjYiLCJhIjoiY2xrc2pudDFuMDA4cTNnbnBlMHM5YW0wNSJ9.zt1xEp0w7pgucF75qiqE3A"
                mapStyle="mapbox://styles/mapbox/dark-v11">
                <Marker longitude={data[0]?.coordinates.longitude} latitude={data[0]?.coordinates.latitude}>
                    <img src={basemarkericon} alt="marker-icon" width={'40px'} height={'40px'} />
                </Marker>
                {
                    data.slice(1).map((d, i) => {
                        return (
                            <div key={i}>
                                <Marker longitude={d.coordinates.longitude} latitude={d.coordinates.latitude}>
                                    <img src={markericon} alt="marker-icon" width={'40px'} height={'40px'} />
                                </Marker>
                                {coordinates.push([data[0]?.coordinates.longitude, data[0]?.coordinates.latitude])}
                                {coordinates.push([d.coordinates.longitude, d.coordinates.latitude])}
                            </div>
                        );
                    })
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