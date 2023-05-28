import dashboard from '../../resources/dashboard.png';
import artist from '../../resources/artist.png';
import track from '../../resources/track.png';
import score from '../../resources/score.png';
import history from '../../resources/history.png';
import genre from '../../resources/genre.png';

import './dashboard.css';

function Dashboard() {
    return (
        <div className="container panel animate-fade">
                <div className="dashboard-image">
                    <img src={dashboard} alt={"dashboard"} width={"70px"} height={"70px"}/>
                </div>
                <div className="dashboard-content">
                    <p className="dashboard-title">Welcome to your personalized music dashboard!</p>
                    <div className="row">
                        <div className="col-lg col-description">
                            <p>With our Spotify-powered app, you can view your
                                music preferences at a glance. Intuitive design and seamless integration with Spotify
                                API make it easy to stay connected to your musical taste and stay on top of the
                                latest hits. </p>
                            <p>You can also export a playlist made of your favorite songs with Statly using <span style={{color:"#1db954"}}>Spotify API.</span></p>
                        </div>
                        <div className="col-lg">
                            <p style={{color:"#1db954"}}>Our dashboard features options
                                for showing your:</p>
                            <div>
                                <ul className="dashboard-list">
                                    <li className="dashboard-list-item">
                                        <img className="image-position" src={track} alt="test" width={'30px'} height={'30px'}/>
                                        Top tracks</li>
                                    <li className="dashboard-list-item">
                                        <img className="image-position" src={artist} alt="test" width={'30px'} height={'30px'}/>
                                        Top artists</li>
                                    <li className="dashboard-list-item">
                                    <img className="image-position" src={history} alt="test" width={'30px'} height={'30px'}/>
                                        User listening history</li>
                                    <li className="dashboard-list-item">
                                    <img className="image-position" src={genre} alt="test" width={'30px'} height={'30px'}/>
                                        Top genres</li>
                                    <li className="dashboard-list-item">
                                    <img className="image-position" src={score} alt="test" width={'30px'} height={'30px'}/>
                                        Mainstream score</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-description">
                    <p style={{color:"#535353"}}>With these insights, you can discover
                        new music, curate personalized playlists, and even export your Top tracks
                        into a playlist.</p>
                    </div>
                </div>
            </div>
    );
}

export default Dashboard;