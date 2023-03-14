import './export.css'

function Export() {
    return (
        <div className="container export-section">
            <button className="nav-range-item">Export playlist</button>
            <div>
                <p>Take your music with you wherever you go.</p> 
                <p style={{"font-size":"18px"}}>Create playlist based on your Top tracks and export them to your Spotify account, so you can listen on the go.</p>
            </div>
        </div>
    );
}

export default Export;