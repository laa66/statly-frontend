import { useNavigate } from "react-router-dom";
import { deleteAccount } from "./deleteAccount";
import { logOut } from '../logOut/logOut';
import { Link } from "react-router-dom";

import './account.css';

function Account() {
    const navigate = useNavigate();

    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    const handleDelete = () => {
        deleteAccount();
        sleep(2000).then(() => {
            logOut()
        });
    }

    return (
        <div className="container panel" style={{textAlign:"center"}}>
            <h1 style={{color:"#b3b3b3"}}>Profile Settings</h1>
            <hr/>
            <h5 style={{marginBottom:"70px", color:"#1db954"}}>Here you can check your Spotify account settings and also delete your account in Statly-app.</h5>
            <div className="section-option">
                <div className="col option-first" onClick={() => {window.location.href="https://www.spotify.com/us/account/overview/"}}>
                    <p style={{"color":"#1db954", fontSize:"24px"}}>Manage Spotify account</p>
                    <p style={{"fontSize":"21px"}}>Continue to Spotify</p>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"center", marginTop:"80px"}}>
                <div className="button-delete" onClick={() => handleDelete()}><Link to="/" className="link-item">I want to delete my Statly account</Link></div>
            </div>
            <div style={{marginTop:"30px", display:"flex", justifyContent:"center"}}>
                <div className="button-back" onClick={() => navigate(-1)} style={{textAlign:"center"}}>Back</div>
            </div>
        </div>
    );
}

export default Account;