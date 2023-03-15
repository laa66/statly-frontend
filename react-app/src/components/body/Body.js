import { useState } from "react";

import Panel from '../panel/panel';

import concert from '../../resources/concert.jpg';
import genres from '../../resources/genres.jpg';
import playlists from '../../resources/playlists.jpg';
import score from '../../resources/score.jpg';
import tracks from '../../resources/tracks.jpg';
import iphone from '../../resources/iphone.png';

import './slider.css';
import './body.css';

function Body() {
    const [active, setActive] = useState("home");

    return (
        <div>
            {active === "home" && <div className="home">
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
                                <button className="iphone-button button-position" onClick={() => setActive("panel")}>Login with Spotify</button>
                            </div>
                        </div>
                    </div>
                </div>}
            {active === "panel" && <Panel/>}
        </div>
    );
}
export default Body;