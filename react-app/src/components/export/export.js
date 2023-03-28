import './export.css';

function Export({postTrack}) {

    return (
        <div className="container export-section">
            <div className="export-button">
                <div className="nav-range-item" style={{width:"20%", height:"90%"}} onClick={postTrack}>Create playlist</div>
            </div>
            <div>
                <p>Take your music with you wherever you go.</p> 
                <p style={{"font-size":"18px"}}>Create playlist based on your Top tracks and export them to your Spotify account, so you can listen on the go.</p>
            </div>
        </div>
    );
}

export default Export;