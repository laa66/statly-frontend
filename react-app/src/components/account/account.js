import { useNavigate } from "react-router-dom";

import './account.css';

function Account() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row section-option">
                <div className="col option-first" onClick={() => {window.location.href="https://www.spotify.com/us/account/overview/"}}>
                    <p style={{"color":"#1db954"}}>Manage Spotify account</p>
                    <p style={{"fontSize":"18px"}}>Continue to Spotify</p>
                </div>
                <div className="col option-second">
                    <p style={{"color":"#1db954"}}>Our privacy policy</p>
                    <p style={{"fontSize":"18px"}}>Go to privacy policy</p>
                </div>
            </div>
            <div style={{"textAlign":"center", "margin-top":"80px"}}>
                <a href="http://localhost:3000" style={{color:"#b50202"}}>I want to delete my Statly account</a>
            </div>
            <div style={{"textAlign":"center", "margin-top":"30px"}}>
                <button className="button-back" onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    );
}

export default Account;