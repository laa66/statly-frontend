import concert from '../../resources/concert.jpg';
import genres from '../../resources/genres.jpg';
import playlists from '../../resources/playlists.jpg';
import score from '../../resources/score.jpg';
import tracks from '../../resources/tracks.jpg';
import iphone from '../../resources/iphone.png';
import HeaderState from '../header/header';

import '../panel/panel.css';
import Dashboard from '../dashboard/dashboard';
import Track from '../track/track';
import Artist from "../artist/artist";
import Genre from "../genre/genre";
import Mainstream from "../mainstream/mainstream";
import History from "../history/history";
import Account from "../account/account";
import Callback from '../callback/callback';

import { Route, Routes } from "react-router-dom";

import './slider.css';
import './body.css';

function Body() {

    return (
        <div>
            <Routes>
                <Route index element={<div className="home">
                <HeaderState.Header/>
                    <div className="container section-title">
                        <p>Your Spotify statistics on-demand</p>
                    </div>
                    <div className="container section">
                        <div className="content">
                            <div className="slides">
                                <div className="slide-content">
                                    <img className="image" src={tracks} alt={"tracks"} width={"600px"} height={"300px"} />
                                    <div className="centered">Your Top tracks</div>
                                </div>
                                <div className="slide-content">
                                    <img className="image" src={concert} alt={"concert"} width={"600px"} height={"300px"} />
                                    <div className="centered">Your Top artists</div>
                                </div>
                                <div className="slide-content">
                                    <img className="image" src={score} alt={"concert"} width={"600px"} height={"300px"} />
                                    <div className="centered">Mainstream score</div>
                                </div>
                                <div className="slide-content">
                                    <img className="image" src={genres} alt={"concert"} width={"600px"} height={"300px"} />
                                    <div className="centered">Your Top genres</div>
                                </div>
                                <div className="slide-content">
                                    <img className="image" src={playlists} alt={"concert"} width={"600px"} height={"300px"} />
                                    <div className="centered">Export playlists</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container section-two">
                        <div className="row">
                            <div className="col-sm">
                                <div className="container section-description">
                                    <p className="section-two-title">Tired of waiting for Spotify Wrapped?</p>
                                    <p>Discover your musical taste with our Spotify-powered app!</p>
                                    <p>Our app seamlessly integrates with Spotify API to bring you a
                                        comprehensive view of your music preferences.</p>
                                    <p>With different features you can discover new music and curate
                                        personalized playlists.</p>
                                    <p> With an intuitive design and seamless integration, you can immerse yourself
                                        in your music like never before.</p>
                                    <hr />
                                    <p className="iphone-text">Login with your Spotify account to see your Top tracks, artists and more!</p>
                                </div>
                            </div>
                            <div className="col-sm">
                                <center><img src={iphone} alt="iphone" width="240px" height="450px" /></center>
                                <button className="iphone-button button-position" onClick={() => window.location.href='http://localhost:8080/api/auth'}>Login with Spotify</button>
                            </div>
                        </div>
                    </div>
                </div>}/>
                <Route path="/callback" element={<div><HeaderState.Header/><Callback/></div>}/>
                <Route path="/dashboard" element={<div className="panel"><HeaderState.HeaderLogged/><Dashboard/></div>}/>
                <Route path="/track/top" element={<div className="panel"><HeaderState.HeaderLogged/><Track/></div>}/>
                <Route path="/artist/top" element={<div className="panel"><HeaderState.HeaderLogged/><Artist/></div>}/>
                <Route path="/user/history" element={<div className="panel"><HeaderState.HeaderLogged/><History/></div>}/>
                <Route path="/genre/top" element={<div className="panel"><HeaderState.HeaderLogged/><Genre/></div>}/>
                <Route path="/user/score" element={<div className="panel"><HeaderState.HeaderLogged/><Mainstream/></div>}/>
                <Route path="/user/account" element={<div className="panel"><HeaderState.HeaderLogged/><Account/></div>}/>
            </Routes>
        </div>
    );
}
export default Body;