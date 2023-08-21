import { useEffect } from 'react';
import './matchLocation.css';
import { GetRequest } from '../request/apiUrl';
import { getRequest } from '../request/getRequest';
import { useState } from 'react';
import Error from '../error/error';
import Map from './LocationMap';

function MatchLocation() {
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getRequest(GetRequest.MatchUserLocation).then((data) => {
            setUsers(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
        });
    // eslint-disable-next-line
    }, []);

    if (hasError) return (<div><Error code={status}/></div>);
    return (
        <div className="location-container animate-fade">
            <div className="image-description">
                <h1>Your music taste matches</h1>
                <div style={{ color: "#7d7d7d" }}>Connect with like-minded individuals who share your musical vibe</div>
                <div className="row mt-5">
                    <div className="col-xl-2"> 
                        {users?.slice(1, 6).map((data, i) => {
                            return (
                                <div key={data + i} className="match-user-container row mb-3">
                                    <div className="col-2 d-flex align-items-center justify-content-center">
                                        <img className="friend-image" src={data.images[0].url} alt="test" width={'40px'} height={'40px'} />
                                    </div>
                                    <div className="col-10 text-start">
                                        <div className="match-user-nick match-text-overflow">{data?.display_name}</div>
                                        <div className="match-text-overflow" style={{ color: "#7d7d7d" }}>{data.location.features[0].text}, {data.location.features[1].text}</div>
                                        <div className="match-user-stats match-text-overflow">
                                            <span style={{ color: "#1db954" }}>{data.match}%</span>
                                            <span style={{ color: "#121212" }}> | </span>
                                            <span style={{ color: "#00A573" }}>{parseInt(data.distance * 0.001)} km</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="col-xl-8">
                        <Map data={users}/>
                    </div>
                    <div className="col-xl-2">
                        {users?.slice(6).map((data, i) => {
                            return (
                                <div key={data + i} className="match-user-container row mb-3">
                                    <div className="col-2 d-flex align-items-center justify-content-center">
                                        <img className="friend-image" src={data.images[0].url} alt="test" width={'40px'} height={'40px'} />
                                    </div>
                                    <div className="col-10 text-start">
                                        <div className="match-user-nick match-text-overflow">{data?.display_name}</div>
                                        <div className="match-text-overflow" style={{ color: "#7d7d7d" }}>{data.location.features[0].text}, {data.location.features[1].text}</div>
                                        <div className="match-user-stats match-text-overflow">
                                            <span style={{ color: "#1db954" }}>{data.match}%</span>
                                            <span style={{ color: "#121212" }}> | </span>
                                            <span style={{ color: "#00A573" }}>{parseInt(data.distance * 0.001)} km</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchLocation;