import HeaderState from '../header/header';
import Profile from '../profile/profile';
import WrapperPanel from './WrapperPanel';

import { fetchFriends } from '../friend/fetchFriends.js';
import Error from '../error/error';

import { useState, useEffect } from 'react';

function WrapperBody({ component, withCallback }) {
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();
    const [friends, setFriends] = useState([]);

    const fetchFriendsList = () => {
        fetchFriends().then((data) => {
            setFriends(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        })}

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
        <div>
            <HeaderState.HeaderLogged/>
            {withCallback ?
                <WrapperPanel list={friends} component={<Profile callback={fetchFriendsList}/>}/> :
                <WrapperPanel list={friends} component={component}/>}
        </div>
    );
}
export default WrapperBody;