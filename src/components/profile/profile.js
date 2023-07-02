import './profile.css';
import Error from '../error/error';
import test from '../../resources/testuserimage.jpg'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchProfile } from './fetchProfile';

function Profile() {
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();

    const [active, setActive] = useState('stats');
    const [profile, setProfile] = useState([]);

    const location = useLocation();
    const { id } = location.state;

    const buttonStyle = {
        cursor: "pointer",
        color: "#b3b3b3",
        borderBottom: "7px solid #1db954"
    };

    useEffect(() => {
        fetchProfile(id).then((data) => {
            setProfile(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        // eslint-disable-next-line
        })}, [location]);
        console.log(profile)
    if (hasError) return (<div><Error code={status}/></div>);
    return (
        <div className="container profile-img-container">
            <div className="row mb-0">
                <div className="col-md-2 image-container">
                    <img src={test} className="profile-img" alt={"random"}/>
                </div>
                <div className="col-md-7 name-container">
                    <div className="profile-name"><b>{profile.username}</b></div>
                    <div className="profile-followers"><b>{profile?.points} points | {profile.followers?.length} followers | {profile.following?.length} following</b></div>
                </div>
                <div className="col-md-1">
                    <div className="follow-button">Follow</div>
                </div>
            </div>
            <div className="row">
            <nav className="container section-nav">
                <ul className="nav">
                    <li className="profile-button" style={active === 'stats' ? buttonStyle : {}} onClick={() => setActive('stats')}>Statistics</li>
                    <li className="profile-button" style={active === 'matching' ? buttonStyle : {}} onClick={() => setActive('matching')}>Matching</li>
                    <li className="profile-button" style={active === 'battle' ? buttonStyle : {}} onClick={() => setActive('battle')}>Playlist battle</li>
                </ul>
            </nav>
                {active === 'stats' && <div className="stats-container">
                    
                </div>}
                {active === 'matching' && <div className="matching-container">
                    
                </div>}
                {active === 'battle' && <div className="battle-container">
                    
                </div>}
            </div>
        </div>
    );
}

export default Profile;