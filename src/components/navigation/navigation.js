import artist from '../../resources/artist.png';
import track from '../../resources/track.png';
import score from '../../resources/score.png';
import history from '../../resources/history.png';
import genre from '../../resources/genre.png';

import './navigation.css';

import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <div className="nav-col">
            <div className="nav-item">
                <img className="image-position" src={track} alt="test" width={'25px'} height={'25px'} />
                <Link to="/track/top" className="link-item">Top tracks</Link>
            </div>
            <div className="nav-item">
                <img className="image-position" src={artist} alt="test" width={'25px'} height={'25px'} />
                <Link to="/artist/top" className="link-item">Top artists</Link>
            </div>
            <div className="nav-item">
                <img className="image-position" src={genre} alt="test" width={'25px'} height={'25px'} />
                <Link to="/genre/top" className="link-item">Top genres</Link>
            </div>
            <div className="nav-item">
                <img className="image-position" src={score} alt="test" width={'25px'} height={'25px'} />
                <Link to="/user/analysis" className="link-item">Library analysis</Link>
            </div>
            <div className="nav-item">
                <img className="image-position" src={history} alt="test" width={'25px'} height={'25px'} />
                <Link to="/user/history" className="link-item">Recently played</Link>
            </div>
        </div>
    );
}

export default Navigation;