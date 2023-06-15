import './analysis.css';
import { useState, useEffect } from 'react';
import { fetchPlaylistAnalysis, fetchUserPlaylists } from './fetchAnalysis';
import Error from '../error/error';

function AnalysisPlaylist() {

    const[indicators, setIndicators] = useState([]);
    const[playlists, setPlaylists] = useState([]);

    const[currentPlaylist, setCurrentPlaylist] = useState({
        name: 'none',
        image: 'url'
    });

    const[active, setActive] = useState("playlists");
    const[hasError, setHasError] = useState(false);
    const[status, setStatus] = useState();

    useEffect(() => {
        fetchUserPlaylists().then((data) => {
            setPlaylists(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        })}, []);

    const togglePlaylistAndFetch = (name, id, image) => {
        setCurrentPlaylist({
            name: name,
            image: image
        });
        setActive('playlist-analysis');
        fetchPlaylistAnalysis(name, id).then((data) => {
            setIndicators(data);
        }).catch((err) =>{
            setHasError(true);
            setStatus(err.message);
            console.log(err);
        });
    }   

    if (hasError) return (<div><Error code={status}/></div>);

    return (
        <div className="container playlist-container">
            <div className="playlist-title-description">
            <h2>Playlist insights</h2>
            <p style={{color:"#7d7d7d"}}>
            You can delve into and analyze the data 
            behind your playlists by selecting one from your collection.
             We'll then offer you valuable insights and statistics to enhance your understanding.
            </p>
            </div>
            {active === "playlists" &&  <div className="row row-cols-xl-1 row-cols-xl-2 row-cols-xl-3 row-cols-xl-4 row-cols-xl-5">
            {playlists.items?.map((data) => {
                  return(
                    <div className="playlist-item">
                        <img src={data.images[0].url} className="playlist-img" 
                        alt={"random"} onClick={() => togglePlaylistAndFetch(data.name, data.id, data.images[0].url)}/>
                        <div className="playlist-description"><b>{data.name}</b></div>
                    </div>
                  )})}
            </div>}
            {active === "playlist-analysis" && <div>
            <div className="row row-cols-xl-1 row-cols-xl-2 row-cols-xl-3 row-cols-xl-4 row-cols-xl-5">
                    <div>
                        <img src={currentPlaylist.image} className="playlist-img" alt={"random"}/>
                        <div className="playlist-description"><b>{currentPlaylist.name}</b></div>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Energy</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['energy'] * 100}%</p>
                        </div>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Mainstream</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['mainstream']}%</p>
                        </div>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Boringness</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['boringness']}</p>
                        </div>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Tempo</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['tempo']} BPM</p>
                        </div>
                    </div>
               
            </div>
            <div style={{justifyContent:"center", display:"flex"}}>
                <div className="back-playlist-button" onClick={() => setActive('playlists')}>Back</div>
            </div>
        </div>}
        </div>
    );
}

export default AnalysisPlaylist;