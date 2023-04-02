import { useState } from 'react';
import './export.css';

function Export({postTrack}) {

    const [showButton, setShowButton] = useState(true);
    const [playlist, setPlaylist] = useState([]);

    const toggleButton = () => {
        setShowButton(!showButton);
        postTrack().then((data) => {
            setPlaylist(data);
        }).catch((err) =>{console.log(err.message)});
    }

    return (
        <div className="container export-section">
            {!showButton && <div style={{color:"#535353"}}>Playlist created and exported to your <span style={{color:"#1db954"}}>Spotify account!</span></div>}
            <div className="export-button">
                {showButton && <div className="nav-range-item" style={{width:"20%", height:"90%"}} onClick={toggleButton}>Create playlist</div>}
                {!showButton && <div className="check-playlist-button" style={{width:"20%", height:"90%", fontWeight:"400"}}
                onClick={() => {window.open(playlist.external_urls.spotify, "_blank", "noreferrer")}}>Check playlist</div>}
            </div>
            <div>
                <p>Take your music with you wherever you go.</p> 
                <p style={{"font-size":"18px"}}>Create playlist based on your Top tracks and export them to your Spotify account, so you can listen on the go.</p>
            </div>
        </div>
    );
}

export default Export;