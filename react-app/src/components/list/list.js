import './list.css';
import React from 'react';

function TrackList({list}) {
    return (
        <div className="container">
            <div className="list-container">
                <table className="list">
                    {list.map((data, index) => {
                        return(
                        <tbody className="track-row" key={data + index} onClick={() => {window.open(data.external_urls.spotify, "_blank", "noreferrer")}}>
                            <tr>
                                <th className="col-first" style={{width:"4%"}}>{index+1}</th>
                                <td><img className="track-img" src={data.album.images[2].url} alt={"test"}/><b>{data.name}</b></td>
                                <td className="col-third" style={{width:"50%"}}>{data.artists.map((artist, i, arr) => {
                                    return (i + 1 === arr.length ? artist.name : artist.name + ", ")
                                })}</td>
                                <td className="col-fourth" style={{width:"3%"}}>Option</td>
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
                    <div className="col list-row" onClick={() => {window.open(data.external_urls.spotify, "_blank", "noreferrer")}}>
                        <img className="artist-img" src={data.images[1].url} alt={"test"}/>
                        <div className="artist-text">{index+1}</div>
                        <div className="artist-description"><b>{data.name}</b></div>
                    </div>
                  )})}
            </div>
        </div>
    );
}

function GenreList({list}) {
    return (
        <div className="genre-bar-chart container">
            {list.map((item, i) => (
                <div className="genre-container">
                    <div>{item.score + "%"}</div>
                    <div className="genre-bar" style={{"--percentage":String(item.score + "%")}}/>
                    <div className="genre-label">{item.genre}</div>
                </div>
            ))}
        </div>
    );
}

function Mainstream({score}) {
    return (
        <div className="container">
            <div className="score-container">
                <div className="stats-score">
                    <div className="stats-item">
                        <span>{score.score}</span>
                        <div className="stats-bar" style={{"--percentage":String(score.score + "%")}}></div>
                        <span>Score</span>
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
                        <tbody className="track-row" key={data + index} onClick={() => {window.open(data.track.external_urls.spotify, "_blank", "noreferrer")}}>
                            <tr>
                                <th className="col-first">{index+1}</th>
                                <td><img className="track-img" src={data.track.album.images[2].url} alt={"test"}/><b>{data.track.name}</b></td>
                                <td className="col-third">{data.track.artists.map((artist, i, arr) => {
                                    return (i + 1 === arr.length ? artist.name : artist.name + ", ")
                                })}</td>
                                <td className="col-fourth">{new Intl.DateTimeFormat('en-US', 
                                {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})
                                .format(Date.parse(new Date(data.played_at).toLocaleString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone})))}</td>
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