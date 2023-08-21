import * as React from 'react';
import Map from 'react-map-gl';
import { Layer, Source, Marker } from 'react-map-gl';

import markericon from '../../resources/markericon.png';

function LocationMap({data}) {
    
    /*const geojson = {
        'type': 'Feature',
        'properties': {},
        'geometry': {
            'type': 'line',
            'coordinates': [
                [-122.483696, 37.833818],
                [0, 37.833683]
            ]
        }
    };

    const layerStyle = {
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#1db954',
            'line-width': 3
        }
    };*/
    
    return (
        /*<>
        {data.length > 0 && <Map
                style={{width:'940px', height:'600px'}}
                initialViewState={{zoom:-5}}
                mapboxAccessToken="{token}"
                mapStyle="mapbox://styles/mapbox/dark-v11">
                <Marker longitude={data[0].coordinates.longitude} latitude={data[0].coordinates.latitude} anchor="bottom" />
                
                <Source id="data" type="geojson" data={geojson}>
                    <Layer {...layerStyle} />
                </Source>
            </Map> }
        </>*/
        <>
            {data.length > 0 && <Map
                style={{ width: '940px', height: '600px' }}
                initialViewState={{ zoom: 1.5 }}
                mapboxAccessToken="{token}"
                mapStyle="mapbox://styles/mapbox/dark-v11">
                <Marker longitude={data[0]?.coordinates.longitude} latitude={data[0]?.coordinates.latitude}>
                    <img src={markericon} alt="marker-icon" width={'40px'} height={'40px'} />
                </Marker>
                {
                    data.slice(1).map((d, i) => {
                        return (
                            <Marker key={d + i} longitude={d.coordinates.longitude} latitude={d.coordinates.latitude}>
                                <img src={markericon} alt="marker-icon" width={'40px'} height={'40px'} />
                            </Marker>
                        );
                    })
                }

            </Map>

            }
        </>
    );
}

export default LocationMap;