import { useEffect } from 'react';
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
    }, []);0

    if (hasError) return (<div><Error code={status}/></div>);
    return (
        <div className="location-container animate-fade">
            <div className="image-description">
                <h4>Connect with like-minded individuals who share your musical vibe</h4>
                <div className="mt-4">
                    <Map data={users}/>
                </div>
            </div>
        </div>
    );
}

export default MatchLocation;