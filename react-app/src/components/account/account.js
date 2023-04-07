import { useNavigate } from "react-router-dom";
import { getConfiguration } from "../../config";

import './account.css';

function Account() {
    const navigate = useNavigate();
    const url = getConfiguration().apiUrl;

    return (
        <div className="container panel" style={{textAlign:"center"}}>
            <h5 style={{marginBottom:"70px", color:"#1db954"}}>Here you can check your Spotify account settings and also delete your account in Statly-app.</h5>
            <div className="section-option">
                <div className="col option-first" onClick={() => {window.location.href="https://www.spotify.com/us/account/overview/"}}>
                    <p style={{"color":"#1db954", fontSize:"24px"}}>Manage Spotify account</p>
                    <p style={{"fontSize":"21px"}}>Continue to Spotify</p>
                </div>
            </div>
            <div style={{"textAlign":"center", "margin-top":"80px"}}>
                <a href={url} style={{color:"#b50202"}}>I want to delete my Statly account</a>
            </div>
            <div style={{marginTop:"30px", display:"flex", justifyContent:"center"}}>
                <div className="button-back" onClick={() => navigate(-1)} style={{textAlign:"center"}}>Back</div>
            </div>
        </div>
    );
}

export default Account;