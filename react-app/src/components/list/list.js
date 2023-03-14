import test from '../../resources/testuserimage.jpg';
import './list.css';

function TrackList() {
    return (
        <div className="container">
            <div className="list-container">
                <table class="list">
                    <tbody>
                        <tr className="list-row">
                            <th className="col-first">1</th>
                            <td><img className="track-img" src={test} alt={"test"}/><b>Title</b></td>
                            <td className="col-third">Artists</td>
                            <td className="col-fourth">Option</td>
                        </tr>
                        <tr className="list-row">
                            <th className="col-first">2</th>
                            <td><img className="track-img" src={test} alt={"test"}/><b>Title</b></td>
                            <td className="col-third">Artists</td>
                            <td className="col-fourth">Option</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function ArtistList() {
    return (
        <div className="container artist-container">
            <div className="row row-cols-5">
                <div className="col">
                    <img className="artist-img" src={test} alt={"test"}/>
                    <div className="artist-text">1</div>
                    <div className="artist-description">Need</div>
                </div>
                <div className="col">
                    <img className="artist-img" src={test} alt={"test"}/>
                    <div className="artist-text">2</div>
                    <div className="artist-description">Need</div>
                </div>
                <div className="col">
                    <img className="artist-img" src={test} alt={"test"}/>
                    <div className="artist-text">3</div>
                    <div className="artist-description">Need</div>
                </div>
                <div className="col">
                    <img className="artist-img" src={test} alt={"test"}/>
                    <div className="artist-text">4</div>
                    <div className="artist-description">Need</div>
                </div>
                <div className="col">
                    <img className="artist-img" src={test} alt={"test"}/>
                    <div className="artist-text">5</div>
                    <div className="artist-description">Need</div>
                </div>
            </div>
            <div className="row row-cols-5">
                <div className="col">
                    <img className="artist-img" src={test} alt={"test"}/>
                    <div className="artist-text">1</div>
                    <div className="artist-description">Need</div>
                </div>
                <div className="col">
                    <img className="artist-img" src={test} alt={"test"}/>
                    <div className="artist-text">2</div>
                    <div className="artist-description">Need</div>
                </div>
                <div className="col">
                    <img className="artist-img" src={test} alt={"test"}/>
                    <div className="artist-text">3</div>
                    <div className="artist-description">Need</div>
                </div>
                <div className="col">
                    <img className="artist-img" src={test} alt={"test"}/>
                    <div className="artist-text">4</div>
                    <div className="artist-description">Need</div>
                </div>
                <div className="col">
                    <img className="artist-img" src={test} alt={"test"}/>
                    <div className="artist-text">5</div>
                    <div className="artist-description">Need</div>
                </div>
            </div>
        </div>
    );
}

function GenreList() {
    return (
        <div className="container">
            <div className="stats">
                <div className="stats-item">
                    <span className="stats-percentage">20</span>
                    <div className="stats-bar" style={{"--percentage":"67%"}}></div>
                    <span className="genre">Rap</span>
                </div>
                <div className="stats-item">
                    <span className="stats-percentage">10</span>
                    <div className="stats-bar" style={{"--percentage":"50%"}}></div>
                    <span className="genre">Rap</span>
                </div>
                <div className="stats-item">
                    <span className="stats-percentage">5</span>
                    <div className="stats-bar" style={{"--percentage":"13%"}}></div>
                    <span className="genre">Rap</span>
                </div>
                <div className="stats-item">
                    <span className="stats-percentage">2</span>
                    <div className="stats-bar" style={{"--percentage":"7%"}}></div>
                    <span className="genre">Rap</span>
                </div>
                <div className="stats-item">
                    <span className="stats-percentage">1</span>
                    <div className="stats-bar" style={{"--percentage":"2%"}}></div>
                    <span className="genre">Rap</span>
                </div>
            </div>
        </div>
    );
}

function Mainstream() {
    return (
        <div className="container">
            <div className="score-container">
                <div className="stats-score">
                    <div className="stats-item">
                        <span className="stats-percentage">20</span>
                        <div className="stats-bar" style={{"--percentage":"67%"}}></div>
                        <span className="genre">Score</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HistoryList() {
    return (
        <div className="container">
            <div className="list-container">
                <table class="list">
                    <tbody>
                        <tr className="list-row">
                            <th className="col-first">1</th>
                            <td><img className="track-img" src={test} alt={"test"}/><b>Title</b></td>
                            <td className="col-third">Artists</td>
                            <td className="col-fourth">Played at</td>
                        </tr>
                        <tr className="list-row">
                            <th className="col-first">2</th>
                            <td><img className="track-img" src={test} alt={"test"}/><b>Title</b></td>
                            <td className="col-third">Artists</td>
                            <td className="col-fourth">Played at</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const exportedObject = {
    TrackList, ArtistList, GenreList, HistoryList, Mainstream
}

export default exportedObject;