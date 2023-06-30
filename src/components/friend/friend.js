import './friend.css';

import { fetchFriends } from './fetchFriends';
import Error from '../error/error';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Friend() {
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetchFriends().then((data) => {
            setFriends(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        })}, []);

    if (hasError) return (<div><Error code={status}/></div>);

    return (
        <div className="friend-col">
            <h2 className="friend-title">
                <Link to="/track/top" className="link-item">Your friends - {friends.size}</Link>
            </h2>
            {friends.users?.map((data, i) => {
                  return(
                      <div key={i} className="friend-item">
                          <img className="friend-image" src={data.images[0].url} alt="test" width={'30px'} height={'30px'} onClick={{}} />
                          <Link to="/track/top" className="link-item">{data.display_name}</Link>
                      </div>
                  )})}
        </div>
    );
}

export default Friend;