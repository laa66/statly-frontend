import './profile.css';
import Error from '../error/error';
import Statistics from './statistics';
import Matching from './matching';
import PlaylistBattle from './playlistBattle';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchProfile } from './fetchProfile';
import { fetchCurrentUser } from './fetchCurrentUser';
import { followUser, unfollowUser } from './profileOperation';

function Profile({ callback }) {
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();

    const [active, setActive] = useState('stats');
    const [profile, setProfile] = useState([]);
    const [currentUser, setCurrentUser] = useState([]);
    const [followed, setFollowed] = useState();

    const location = useLocation();
    const { id } = location.state;
    const buttonStyle = {
        cursor: "pointer",
        color: "#b3b3b3",
        borderBottom: "7px solid #1db954"
    };

    useEffect(() => {
        setActive('stats');
        window.scrollTo(0, 0);
        fetchProfile(id).then((data) => {
            setProfile(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        })
        fetchCurrentUser().then((data) => {
            setCurrentUser(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        })
    // eslint-disable-next-line
    }, [location]);

    useEffect(() => {
        setFollowed(profile.followers?.some(e => e.id === currentUser.id));
    }, [profile.followers, currentUser.id]);

    const handleFollow = (id) => {
        followUser(id)
            .then(() => setFollowed(true))
                .then(() => callback());

    }

    const handleUnfollow = (id) => {
        unfollowUser(id)
            .then(() => setFollowed(false))
                .then(() => callback());
    }

    if (hasError) return (<div><Error code={status}/></div>);
    return (
        <div className="container profile-img-container">
            <div className="row mb-0">
                <div className="col-md-2 image-container">
                    <img src={profile.imageUrl} className="profile-img" alt={"random"}/>
                </div>
                <div className="col-md-7 name-container">
                    <div className="profile-name"><b>{profile.username}</b></div>
                    <div className="profile-followers"><b><span style={{color:"#1db954"}}>{profile?.points} points</span> | {profile.followers?.length} followers | {profile.following?.length} following</b></div>
                </div>
                <div className="col-md-1 animate-fade">
                    {followed && <div className="unfollow-button" onClick={() => handleUnfollow(id)}>Unfollow</div>}
                    {!followed && currentUser.id !== id && <div className="follow-button" onClick={() => handleFollow(id)}>Follow</div>}
                </div>
            </div>
            <div className="row">
            <nav className="container section-nav">
                <ul className="nav">
                    <li className="profile-button" style={active === 'stats' ? buttonStyle : {}} onClick={() => setActive('stats')}>Statistics</li>
                    {profile.id === Number(currentUser.id) ? <li/> : <li className="profile-button" style={active === 'matching' ? buttonStyle : {}} onClick={() => setActive('matching')}>Matching</li>}
                    {profile.id === Number(currentUser.id) ? <li/> : <li className="profile-button" style={active === 'battle' ? buttonStyle : {}} onClick={() => setActive('battle')}>Playlist battle</li>}
                </ul>
            </nav>
                {active === 'stats' && <Statistics profile={profile}/>}
                {active === 'matching' && <Matching profile={profile}/>}
                {active === 'battle' && <PlaylistBattle profile={profile}/>}
            </div>
        </div>
    );
}

export default Profile;