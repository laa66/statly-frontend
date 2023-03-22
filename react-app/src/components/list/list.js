import test from '../../resources/testuserimage.jpg';
import './list.css';

function TrackList({list}) {
    return (
        <div className="container">
            <div className="list-container">
                <table className="list">
                    {list.map((data, index) => {
                        return(
                        <tbody key={data + index}>
                            <tr>
                                <th className="col-first">{index+1}</th>
                                <td><img className="track-img" src={data.album.images[2].url} alt={"test"}/><b>{data.name}</b></td>
                                <td className="col-third">{data.artists.map((artist, i, arr) => {
                                    return (i + 1 === arr.length ? artist.name : artist.name + ", ")
                                })}</td>
                                <td className="col-fourth">Option</td>
                            </tr>
                    </tbody>)})}
                </table>
            </div>
        </div>
    );
}

function ArtistList({list}) {
    return (
        <div className="container artist-container">
            <div className="row row-cols-5">
                {list.map((data, index) => {
                  return(
                    <div className="col list-row">
                        <img className="artist-img" src={data.images[1].url} alt={"test"}/>
                        <div className="artist-text">{index+1}</div>
                        <div className="artist-description"><b>{data.name}</b></div>
                    </div>
                  )})}
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

function HistoryList({list}) {
    return (
        <div className="container">
            <div className="list-container">
                <table class="list">
                    {list.map((data, index) => {
                        return(
                        <tbody key={data + index}>
                            <tr>
                                <th className="col-first">{index+1}</th>
                                <td><img className="track-img" src={data.track.album.images[2].url} alt={"test"}/><b>{data.track.name}</b></td>
                                <td className="col-third">{data.track.artists.map((artist, i, arr) => {
                                    return (i + 1 === arr.length ? artist.name : artist.name + ", ")
                                })}</td>
                                <td className="col-fourth">{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.parse(data.played_at))}</td>
                            </tr>
                    </tbody>)})}
                </table>
            </div>
        </div>
    );
}

const exportedObject = {
    TrackList, ArtistList, GenreList, HistoryList, Mainstream
}

export default exportedObject;